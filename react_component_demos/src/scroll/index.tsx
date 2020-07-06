import React from 'react';
import BScroll from 'better-scroll';
import axios from 'axios';
import './index.css';

interface user {
  user_id: number;
  display_name: string;
  [key: string]: any;
}

interface IState {
  data: user[];
  loading: boolean;
}

let bscroll: BScroll;
class Scroll extends React.Component<{}, IState> {
  readonly state = {
    data: [],
    loading: false
  } as IState;

  page = 1;

  componentDidMount() {
    bscroll = new BScroll('#bs', {
      scrollY: true,
      pullUpLoad: true
    });

    bscroll.on('pullingUp', () => {
      // setTimeout(function() {}, 2000);
      this.fetchUser(++this.page, () => {
        bscroll.finishPullUp();
        bscroll.refresh();
      });
    });
    this.fetchUser(this.page, () => bscroll.refresh());
  }

  // todo: 数据加载到最后一页的边界情况需要做处理哦，然后在列表底部展示类似“没有更多数据”的文案
  fetchUser = (page: number, cb = () => {}) => {
    //stackexchange User API url
    const url = `https://api.stackexchange.com/2.2/users?page=${page}&pagesize=13&site=stackoverflow`;
    this.setState({ loading: true });
    axios
      .get(url)
      .then(res => {
        let listData = this.state.data;
        let data = listData.concat(res.data.items); //concate list with response
        this.setState({ loading: false, data }, cb);
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { data, loading } = this.state;

    return (
      <div className="wrapper">
        <div id="bs">
          <div className="pullup-scroller">
            <ul className="pullup-list">
              {data.map((user, i) => (
                <li key={user.user_id} className="pullup-list-item">
                  {i % 5 === 0 ? 'scroll up 👆🏻' : `I am ${user.display_name} `}
                </li>
              ))}
            </ul>
            <div className="pullup-tip-wrapper">
              {!loading ? (
                <div className="before-trigger">
                  <span className="pullup-txt">上拉加载更多</span>
                </div>
              ) : (
                <div className="after-trigger">
                  <span className="pullup-txt">加载中...</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Scroll;

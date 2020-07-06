import React from 'react';
import Menu from './menu-layout';
import Img from './img-view';
import Scroll from './scroll';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const data = [
  { id: '1', url: 'http://img0.imgtn.bdimg.com/it/u=2923679630,1264534690&fm=26&gp=0.jpg' },
  { id: '2', url: 'http://img5.imgtn.bdimg.com/it/u=1455747444,2513081477&fm=26&gp=0.jpg' },
  { id: '3', url: 'http://img0.imgtn.bdimg.com/it/u=1300810919,2064879991&fm=26&gp=0.jpg' },
  { id: '4', url: 'http://img4.imgtn.bdimg.com/it/u=3450230800,3260541970&fm=26&gp=0.jpg' },
  { id: '5', url: 'http://img5.imgtn.bdimg.com/it/u=3796740409,1068808904&fm=26&gp=0.jpg' },
  { id: '6', url: 'http://img5.imgtn.bdimg.com/it/u=2893150818,3423535185&fm=26&gp=0.jpg' },
  { id: '7', url: 'http://img5.imgtn.bdimg.com/it/u=1220092432,2680710673&fm=26&gp=0.jpg' },
  { id: '8', url: 'http://img1.imgtn.bdimg.com/it/u=330109828,109858191&fm=26&gp=0.jpg' },
  { id: '9', url: 'http://img2.imgtn.bdimg.com/it/u=1327495826,1844051418&fm=26&gp=0.jpg' },
  { id: '10', url: 'http://img3.imgtn.bdimg.com/it/u=3027296133,1203448824&fm=26&gp=0.jpg' }
];

const App = () => {
  return (
    <div className="container">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/menu">menu</Link>
            </li>
            <li>
              <Link to="/img">img</Link>
            </li>
            <li>
              <Link to="/scroll">scroll</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/img">
            <Img data={data} />
          </Route>
          <Route path="/scroll">
            <Scroll />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;

import React, { FC, useState } from 'react';
import { Carousel } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './img.css';

interface IImg {
  id: string;
  url: string;
}
interface IImgViewProps {
  data: IImg[];
  MAX?: 3 | 6 | 9; // 最大支持展示的数量，默认为九宫格
}

const screenRatio = window.innerHeight / window.innerWidth;
const ImgView: FC<IImgViewProps> = ({ data, MAX = 9 }) => {
  const [carousel, setCarousel] = useState({ visible: false, activeIndex: 0 });
  const remain = data.length - MAX;
  const imgs = remain > 0 ? data.slice(0, MAX) : data;

  return (
    <>
      <div className="section-img">
        {imgs.map((img, index) => {
          return (
            <div key={img.id} className="img" onClick={() => setCarousel({ visible: true, activeIndex: index })}>
              {remain > 0 && index === MAX - 1 && <div className="mask">+{remain}</div>}
              <img src={img.url} alt="" />
            </div>
          );
        })}
      </div>
      {carousel.visible && (
        <div className="section-carousel" onClick={() => setCarousel({ visible: false, activeIndex: 0 })}>
          <Carousel autoplay={false} infinite selectedIndex={carousel.activeIndex}>
            {data.map(img => (
              // 由于carousel会根据子元素的高度动态设置轮播元素的容器高度，
              // 这里统一将图片的外层div.img-wrapper固定设为屏幕高度，这样可以使轮播容器撑开，然后通过flex使图片垂直居中
              <div className="img-wrapper" key={img.id} style={{ height: window.innerHeight, width: '100%' }}>
                <img
                  src={img.url}
                  id={'img' + img.id}
                  onLoad={() => {
                    let imgEl = document.querySelector('#img' + img.id) as HTMLImageElement;
                    let { naturalHeight: nH, naturalWidth: nW } = imgEl;
                    let imgRatio = nH / nW;

                    // 如果图片的高宽比 大于 屏幕的高宽比，则将图片的高度(height)设为屏幕高度，宽度自适应
                    // 否则宽度设为屏幕的宽度(100%)，高度自适应
                    if (imgRatio > screenRatio) {
                      imgEl.style.height = window.innerHeight + 'px';
                      imgEl.style.width = 'auto';
                    }
                    // fire window resize event to change height
                    window.dispatchEvent(new Event('resize'));
                  }}
                />
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default ImgView;

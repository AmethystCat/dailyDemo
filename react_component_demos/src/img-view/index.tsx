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

const ImgView: FC<IImgViewProps> = ({ data, MAX = 9 }) => {
  const [carousel, setCarousel] = useState({ visible: false, activeIndex: 0 });
  const [height, setHeight] = useState<number | string>(200); // 动态加图片时需要动态设置图片高度
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
          <Carousel
            autoplay={false}
            infinite
            selectedIndex={carousel.activeIndex}
            style={{ display: 'inline-block', width: '100%', height }}
          >
            {data.map(img => (
              <img
                key={`carousel-${img.id}`}
                src={img.url}
                alt=""
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  setHeight('auto');
                }}
              />
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default ImgView;

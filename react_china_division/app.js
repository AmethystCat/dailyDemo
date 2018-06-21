import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Cascader, version } from 'antd';
import 'antd/dist/antd.css';

import provinces from 'china-division/dist/provinces.json';
import cities from 'china-division/dist/cities.json';
import areas from 'china-division/dist/areas.json';

console.log(provinces, cities, areas);

areas.forEach(area => {
  const matchCity = cities.filter(city => city.code === area.cityCode)[0];
  if (matchCity) {
    matchCity.children = matchCity.children || [];
    matchCity.children.push({
      label: area.name,
      value: area.code
    });
  }
});

cities.forEach(city => {
  const matchProvince = provinces.filter(
    province => province.code === city.provinceCode
  )[0];
  if (matchProvince) {
    matchProvince.children = matchProvince.children || [];
    matchProvince.children.push({
      label: city.name,
      value: city.code,
      children: city.children
    });
  }
});

const options = provinces.map(province => ({
  label: province.name,
  value: province.code,
  children: province.children
}));

console.log(options);

const onChangeHandler = (...args) => {
  console.log(args);
  // getLocation();
};

ReactDOM.render(
  <div style={{ margin: 24 }}>
    <p style={{ marginBottom: 24 }}>
      Current antd version: {version} <br />
      You can change antd version on the left panel (Dependencies section).
    </p>
    <Cascader
      options={options}
      showSearch
      placeholder="省 / 市 / 区"
      style={{ width: 400 }}
      onChange={onChangeHandler}
    />
  </div>,
  document.getElementById('app')
);

function getLocation(location) {
  // 地址解析
  // window.AMap.service('AMap.Geocoder', function() {
  //   //回调函数
  //   console.log(AMap);
  //   console.log(AMap.Geocoder);
    //实例化Geocoder
    // var geocoder = new AMap.Geocoder({
    //   city: '010' //城市，默认：“全国”
    // });
    // geocoder.getLocation('四川省成都市高新区天府软件园E区', (status, result) => {
    //   console.log(status, result);
    // });
    //TODO: 使用geocoder 对象完成相关功能
  // });
}

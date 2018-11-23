import React from 'react';
import { Menu } from 'antd';
// TODO
// Link引用方式，参照antd项目源码中的引用，否则会有问题，后续补充理由
import { Link } from 'bisheng/router';

// const KEY_ARTICLES = 'articles';
const KEY_COMPONENTS = 'components';
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const getLink = meta => {
  const { filename, title } = meta;
  const link = `/${filename.slice(0, filename.indexOf('index.md') - 1)}`;

  return <Link to={link}>{title}</Link>;
};

const DocMenu = ({ data = {}, currentRoute, md = {} }) => {
  if (Object.keys(md).length === 0) return null;
  const demoKeys = Object.keys(data[KEY_COMPONENTS]).filter(k => !!data[KEY_COMPONENTS][k].demo);
  const defaultSelectedKey = [currentRoute || demoKeys[0]];
  const menuMap = {};

  demoKeys.forEach(k => {
    const matchedMd = md[KEY_COMPONENTS].find(m => {
      return m.meta.filename.indexOf(k) > -1;
    });
    if (matchedMd) {
      menuMap[k] = matchedMd.meta;
    }
  });

  // console.log(menuMap);

  return (
    <Menu defaultSelectedKeys={defaultSelectedKey} defaultOpenKeys={['sub1']} mode="inline" className="doc-sub-menu">
      <SubMenu key="sub1" title="GatewayLib Components">
        {demoKeys.map(k => {
          return <MenuItem key={k}>{getLink(menuMap[k])}</MenuItem>;
        })}
      </SubMenu>
    </Menu>
  );
};

export default DocMenu;

import React from 'react';
import { Menu } from 'antd';
import { Link } from 'bisheng/router';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const getLink = meta => {
  const { filename, title } = meta;
  const link = `/${filename.slice(0, filename.indexOf('demo.md') -1)}`;
  // console.log(link);
  return <Link to={link} >{title}</Link>
  // return <a href={link}>{title}</a>;
};

const DocMenu = ({ data = {}, currentRoute, md = [] }) => {
  if (md.length === 0) return null;
  // console.log('menu.jsx render props.data-----', data);
  const demoKeys = Object.keys(data).filter(k => !!data[k].demo);
  // console.log('menu.jsx render demoKeys-----', demoKeys);
  const defaultSelectedKey = [currentRoute || demoKeys[0]];
  const menuMap = {};
  // console.log(md);

  demoKeys.forEach(k => {
    const matchedMd = md.find(m => {
      return m.meta.filename.indexOf(k) > -1;
    });
    // console.log(matchedMd);
    if (matchedMd) {
      menuMap[k] = matchedMd.meta;
    }
  });

  // console.log(menuMap);

  return (
    <Menu defaultSelectedKeys={defaultSelectedKey} defaultOpenKeys={['sub1']} mode="inline">
      <SubMenu key="sub1" title="GatewayLib Components">
        {demoKeys.map(k => {
          return <MenuItem key={k}>{getLink(menuMap[k])}</MenuItem>;
        })}
      </SubMenu>
    </Menu>
  );
};

export default DocMenu;

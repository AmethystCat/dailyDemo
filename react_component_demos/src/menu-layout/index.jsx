import React, { useState } from 'react';
import { menu, listObj } from './data';
import Menu from './menu';
import List from './list';
import './menu.css';

const defaultMenu = '素菜';
const MenuLayout = () => {
  const [activeMenu, setActiveMenu] = useState(defaultMenu);
  return (
    <div className="menu-w">
      <Menu
        data={menu}
        currMenu={activeMenu}
        onMenuClick={menuName => {
          let anchorElement = document.getElementById(menuName);
          // 如果对应id的锚点存在，就跳转到锚点
          if (anchorElement) {
            anchorElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
          }
          setActiveMenu(menuName);
        }}
      />
      <List data={listObj} />
    </div>
  );
};

export default MenuLayout;

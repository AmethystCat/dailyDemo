import React from 'react';

const Menu = ({ data, currMenu, onMenuClick }) => {
  console.log(data);
  return (
    <div className="menu">
      {data.map(d => (
        <div key={d.classifyName} className={`menu-item ${d.classifyName === currMenu ? 'on' : ''}`} onClick={() => onMenuClick(d.classifyName)}>
          {d.classifyName}
        </div>
      ))}
    </div>
  );
};

export default Menu;

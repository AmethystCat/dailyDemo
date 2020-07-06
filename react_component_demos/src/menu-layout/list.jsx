import React from 'react';

const List = ({ data }) => {
  console.log(data);
  return (
    <div className="list-wrapper">
      <div className="list">
        {Object.keys(data).map(classifyName => {
          const { num, data: spus } = data[classifyName];
          return (
            <div key={classifyName}>
              <h3 id={classifyName}>
                {classifyName}({num})
              </h3>
              <div className="spu">
                {spus.map(s => {
                  return (
                    <div className="listcard" key={s.tpSpuName}>
                      {s.tpSpuName} skljskl
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

import React, { useState, useEffect } from 'react';

const List = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    return fetch('/api/getList')
      .then(res => res.json())
      .then(list => setList(list))
      .catch(error => console.log(error));
  }

  return (
    <div className="container">
      <h1>List of Items</h1>
      {
        list.length ? (
          <div>
            {list.map(item => <div>{item}</div>)}
          </div>
        ) : (
          <div>
            <h2>No List Items Found</h2>
          </div>
        )
      }
    </div>
  );
}

export default List;

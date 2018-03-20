import React from 'react';

function AppList(props) {
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) =>
    <li 
      className="list-group-item" 
      key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul className="list-group">{listItems}</ul>
  );
}

export default AppList;
// 
import React from 'react';
const ChildComponent = ({ OnhandleClick }) => {
  return (
    <div>
      <h2 style={{ backgroundColor: 'yellow'}}>Child Component</h2>
      <button onClick={OnhandleClick}>Click me</button>
    </div>
  );
};
export default ChildComponent;


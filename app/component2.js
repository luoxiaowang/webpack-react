import React from 'react';
import './MyComponent.css';
import './MyComponent.less';

var Hello = React.createClass({
  render: function () {
    return (
      <div className="MyComponent-wrapper">
        <h1>Hello world by luoxiao</h1>
      </div>
    )
  }
});

export default Hello; 
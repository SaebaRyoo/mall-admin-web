import "core-js";
import sum from './utils/sum';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

sum(1, 2);

console.log(_.join(['a', 'b', 'c'], '***'));


class App extends React.Component {
  render() {
    return (
      <div className="color">test</div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'))
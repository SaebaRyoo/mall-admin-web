import "core-js";
import sum from '@src/utils/sum';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import s from './index.less'

sum(1, 2);

console.log(_.join(['a', 'b', 'c'], '***'));

class App extends React.Component {
  render() {
    return (
      <div>
        <div className={s.color}>test</div>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('root'))
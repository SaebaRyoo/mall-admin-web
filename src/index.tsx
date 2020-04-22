import 'core-js';
import sum from '@src/utils/sum';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import s from './index.less';

sum(1, 2);

class App extends React.Component {
  render() {
    console.log(1);
    return (
      <div>
        <div className={s.color}>test</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

import 'core-js';
import sum from '@src/utils/sum';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import s from './index.less';
import '@src/assets/normalize.global.less';

class App extends React.Component {
  render() {
    sum(1, 2);
    return (
      <div>
        <div className={s.color}>test</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

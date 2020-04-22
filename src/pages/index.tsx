import React from 'react';
import { Provider } from 'react-redux';
import store from '@src/core/store';
import s from './index.less';

const App = (props: { children: React.ReactNode }) => {
  return (
    <div className={s.App}>
      <Provider store={store}>{props.children}</Provider>
    </div>
  );
};

export default App;

import * as React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  let history = useHistory();
  return (
    <div>
      <p>登录页</p>
      <button onClick={() => history.push('/layout/home')}>进入首页</button>
    </div>
  );
};

export default LoginPage;

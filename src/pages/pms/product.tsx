import * as React from 'react';
import request from '@src/core/request';

const ProductListPage = () => {
  const handleClick = () => {
    request('/login', {
      method: 'POST',
      params: {
        username: 'william',
        password: '123',
      },
      data: {
        username: 'william',
        password: '123',
      },
    }).then((data) => console.log(data));
  };
  return (
    <div>
      <button onClick={handleClick}>获取数据</button>
    </div>
  );
};

export default ProductListPage;

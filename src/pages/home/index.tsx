import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const HomePage = () => {
  const { count } = useSelector((state: any) => state.home);
  const dispatch = useDispatch();
  return (
    <div>
      Member{count}
      <button
        onClick={() =>
          dispatch({
            type: 'home/increaseCount',
            payload: { count: count + 1 },
          })
        }
      >
        增加
      </button>
    </div>
  );
};

export default HomePage;

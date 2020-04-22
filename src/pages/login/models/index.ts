import { put } from 'redux-saga/effects';
export const Change_Count = 'Change_Count';

interface IinitState {
  count: number;
}

const initState: IinitState = {
  count: 1,
};

// action handler
const ACTION_HANDLER: any = {
  [Change_Count]: (state: IinitState, action: any) => {
    return { ...state, ...action.payload };
  },
};

export default {
  namespace: 'login',
  effects: {
    *increaseCount({ payload }: any) {
      yield put({
        type: Change_Count,
        payload,
      });
    },
  },
  reducer: (state: IinitState = initState, action: any) => {
    return ACTION_HANDLER[action.type]
      ? ACTION_HANDLER[action.type](state, action)
      : state;
  },
};

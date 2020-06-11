import { combineReducers } from 'redux';
import { takeEvery, all } from 'redux-saga/effects';

import login from '@src/pages/login/models';
import home from '@src/pages/home/models';
import pmsDetails from '@src/pages/pms/models/pmsDetails.ts';

const namespaces: string[] = [];
const modules = [login, home, pmsDetails];

function P(modules: any[]) {
	return new Promise((resolve, reject) => {
		const actions = [];
		for (let i = 0, len = modules.length; i < len; i++) {
			const o = modules[i];
			if (namespaces.indexOf(o.namespace) !== -1) {
				reject(`${o.namespace} 命名空间已经存在`);
			} else {
				namespaces.push(o.namespace);
				const l = Object.keys(o.effects).map((item) =>
					takeEvery(`${o.namespace}/${item}`, o.effects[item])
				);
				actions.push(...l);
			}
		}
		resolve(actions);
	});
}

// saga任务
export function* sagas() {
	try {
		const list = yield P(modules);

		// 在对应的action被dispatch时调用effect
		yield all(list);
	} catch (e) {
		throw new Error(e);
	}
}

const createReducers = (modules: any[]): object => {
	const reducers: any = {};
	modules.forEach((m) => (reducers[m.namespace] = m.reducer));
	return reducers;
};

export const rootReducer = combineReducers(createReducers(modules));

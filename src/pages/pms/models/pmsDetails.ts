import { put } from 'redux-saga/effects';
export const CHANGE_DETAILS = 'CHANGE_DETAILS';

interface IinitState {
	// 步骤一
	productCate: string[];
	productName: string;
	subTitle: string;
	brand: number;
	descript: string;
	productNo: number | null;
	sellingPrice: string;
	marketPrice: string;
	stock: number;
	unit: number;
	weight: number;
	sort: string;

	// 步骤二
	boundsPoint: number;
	growthValue: number;
	pointsLimit: number;
	noticGoods: boolean;
	goodsUp: boolean;
	news: boolean;
	recommend: boolean;
	back: boolean;
	refund: boolean;
	baoyou: boolean;
	detailTitle: string;
	detailDesc: string;
	goodsKey: string;
	goodsRemark: string;
	preferentialWay: string;
	startTime?: string | null;
	endTime?: string | null;
	salesPrice?: number | null;
	gold?: number | null; // 黄金会员价格
	platinum?: number | null; // 白金会员价格
	diamond?: number | null; // 钻石会员
}

const initState: IinitState = {
	productCate: [],
	productName: '',
	subTitle: '',
	brand: 1,
	descript: '',
	productNo: null,
	sellingPrice: '',
	marketPrice: '',
	stock: 0,
	unit: 0,
	weight: 0,
	sort: '',

	// 步骤二
	boundsPoint: 0,
	growthValue: 0,
	pointsLimit: 0,
	noticGoods: false,
	goodsUp: false,
	news: false,
	recommend: false,
	back: false,
	refund: false,
	baoyou: false,
	detailTitle: '',
	detailDesc: '',
	goodsKey: '',
	goodsRemark: '',
	preferentialWay: '1',
	startTime: null,
	endTime: null,
	salesPrice: null,
	gold: null, // 黄金会员价格
	platinum: null, // 白金会员价格
	diamond: null, // 钻石会员
};

// action handler
const ACTION_HANDLER: any = {
	[CHANGE_DETAILS]: (state: IinitState, action: any) => {
		return { ...state, ...action.payload };
	},
};

export default {
	namespace: 'pmsDetails',
	effects: {
		*changeDetails({ payload }: any) {
			yield put({
				type: CHANGE_DETAILS,
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

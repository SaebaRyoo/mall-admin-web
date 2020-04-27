// 优惠券
import * as React from 'react';
import CouponTable from './components/couponTable';
import FieldsSearch, { FieldType } from '@src/components/Search';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '优惠券名称',
		name: 'name',
		props: {
			placeholder: '优惠券名称',
		},
	},
	{
		type: 'select',
		label: '优惠券类型',
		name: 'type',
		options: [
			{
				id: 1,
				value: '1',
				name: '全场赠券',
			},
			{
				id: 2,
				value: '2',
				name: '会员赠券',
			},
			{
				id: 3,
				value: '3',
				name: '购物赠券',
			},
			{
				id: 4,
				value: '4',
				name: '注册赠券',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
];

const CouponPage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<CouponTable />
		</div>
	);
};

export default CouponPage;

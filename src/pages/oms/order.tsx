import * as React from 'react';
import OrderTable from './components/orderTable';
import FieldsSearch, { FieldType } from '@src/components/Search';
import Operate from '@src/components/operate';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '输入搜索',
		name: 'name',
		props: {
			picker: 'week',
			placeholder: '商品名称',
		},
	},
	{
		type: 'input',
		label: '收货人',
		name: 'person',
		props: {
			placeholder: '收货人',
		},
	},
	{
		type: 'datepicker',
		label: '提交时间',
		name: 'orderTime',
		props: {
			placeholder: '请选择时间',
		},
	},
	{
		type: 'select',
		label: '订单状态',
		name: 'productBrand',
		options: [
			{
				id: 1,
				value: '-2',
				name: '代付款',
			},
			{
				id: 2,
				value: '-1',
				name: '代发货',
			},
			{
				id: 3,
				value: '0',
				name: '已发货',
			},
			{
				id: 4,
				value: '1',
				name: '已完成',
			},
			{
				id: 5,
				value: '2',
				name: '已关闭',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
	{
		type: 'select',
		label: '订单分类',
		name: 'cate',
		options: [
			{
				id: 1,
				value: 'normal',
				name: '正常订单',
			},
			{
				id: 2,
				value: 'spike',
				name: '秒杀订单',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
	{
		type: 'select',
		label: '订单来源',
		name: 'origin',
		options: [
			{
				id: 1,
				value: '1',
				name: 'PC订单',
			},
			{
				id: 2,
				value: '2',
				name: 'APP订单',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
];

const OrderPage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<Operate
				conditions={[
					{
						value: 1,
						name: '商品上架',
					},
					{
						value: 2,
						name: '商品下架',
					},
				]}
			/>
			<OrderTable />
		</div>
	);
};

export default OrderPage;

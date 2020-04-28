import * as React from 'react';
import ReturnTable from './components/returnTable';
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
		type: 'select',
		label: '处理状态',
		name: 'status',
		options: [
			{
				id: 1,
				value: '-2',
				name: '待处理',
			},
			{
				id: 2,
				value: '-1',
				name: '退货中',
			},
			{
				id: 3,
				value: '0',
				name: '已完成',
			},
			{
				id: 4,
				value: '1',
				name: '已拒绝',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
	{
		type: 'datepicker',
		label: '申请时间',
		name: 'applyTime',
		props: {
			placeholder: '请选择时间',
		},
	},
	{
		type: 'input',
		label: '操作人员',
		name: 'operater',
		props: {
			placeholder: '操作人员',
		},
	},
	{
		type: 'datepicker',
		label: '处理事件',
		name: 'operateTime',
		props: {
			placeholder: '请选择时间',
		},
	},
];

const ReturnApplyPage = () => {
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
			<ReturnTable />
		</div>
	);
};

export default ReturnApplyPage;

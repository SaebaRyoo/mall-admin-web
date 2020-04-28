// 资源
import * as React from 'react';
import ResourceTable from './components/resourceTable';
import FieldsSearch, { FieldType } from '@src/components/Search';
import Operate from '@src/components/operate';
import { Button } from 'antd';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '资源名称',
		name: 'name',
		props: {
			placeholder: '资源名称',
		},
	},
	{
		type: 'input',
		label: '资源路径',
		name: 'name',
		props: {
			placeholder: '资源路径',
		},
	},
	{
		type: 'select',
		label: '资源分类',
		name: 'name',
		props: {
			placeholder: '全部',
		},
		options: [
			{
				id: 1,
				value: '1',
				name: '商品模块',
			},
			{
				id: 2,
				value: '2',
				name: '订单模块',
			},
			{
				id: 3,
				value: '3',
				name: '营销模块',
			},
			{
				id: 4,
				value: '4',
				name: '权限模块',
			},
			{
				id: 5,
				value: '5',
				name: '内容模块',
			},
			{
				id: 6,
				value: '6',
				name: '其他模块',
			},
		],
	},
];

const MenuPage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<Operate actionBtns={<Button>资源分类</Button>} />
			<ResourceTable />
		</div>
	);
};

export default MenuPage;

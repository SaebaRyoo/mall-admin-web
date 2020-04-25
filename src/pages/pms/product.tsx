import * as React from 'react';
import request from '@src/core/request';
import Search, { FieldType } from '@src/components/Search';
import ProductTable from './components/productTable';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '输入搜索',
		name: 'productName',
		props: {
			picker: 'week',
			placeholder: '商品名称',
		},
	},
	{
		type: 'input',
		label: '商品货号',
		name: 'productNumber',
		props: {
			placeholder: '商品货号',
		},
	},
	{
		type: 'cascader',
		label: '商品分类',
		name: 'productCate',
		props: {
			placeholder: '请选择',
		},
	},
	{
		type: 'select',
		label: '商品品牌',
		name: 'productBrand',
		options: [
			{
				id: 1,
				value: 'HUAWEi',
				name: '华为',
			},
			{
				id: 2,
				value: 'Apple',
				name: '苹果',
			},
		],
		props: {
			placeholder: '请选择商品',
		},
	},
	{
		type: 'select',
		label: '上架状态',
		name: 'upperShelfStatus',
		options: [
			{
				id: 1,
				value: 'up',
				name: '上架',
			},
			{
				id: 2,
				value: 'down',
				name: '下架',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
	{
		type: 'select',
		label: '审核状态',
		name: 'reviewStatus',
		options: [
			{
				id: 1,
				value: 'up',
				name: '上架',
			},
			{
				id: 2,
				value: 'down',
				name: '下架',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
];
const ProductListPage = () => {
	const onSearch = async () => {
		const data = await request('/login', {
			method: 'POST',
			params: {
				username: 'william',
				password: '123',
			},
			data: {
				username: 'william',
				password: '123',
			},
		});
		console.log(data);
	};

	return (
		<div>
			<Search data={fieldsConfig} onSearch={onSearch} />
			<ProductTable />
		</div>
	);
};

export default ProductListPage;

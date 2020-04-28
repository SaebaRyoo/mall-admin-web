import * as React from 'react';
import request from '@src/core/request';
import FieldsSearch, { FieldType } from '@src/components/Search';
import ProductTable from './components/productTable';
import Operate from '@src/components/operate';
import { Button } from 'antd';

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

const dataSource = [
	{
		id: '1',
		productImg: '图片',
		productName: '小米',
		attr: {
			price: '3799',
			number: 6946605,
		},
		tag: {
			up: true,
			new: true,
			recommend: true,
		},
		sort: 100,
		stock: 100,
		audit: '审核',
		sales: 100,
	},
	{
		id: '2',
		productImg: '图片',
		productName: '小米',
		attr: {
			price: '3799',
			number: 6946605,
		},
		tag: {
			up: true,
			new: true,
			recommend: true,
		},
		sort: 100,
		stock: 100,
		audit: '审核',
		sales: 100,
	},
];
interface Login {
	username: string;
	token: string;
	role: string;
}
const ProductListPage = () => {
	const onSearch = async () => {
		const data = await request<Login>('/login', {
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
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<Operate
				actionBtns={<Button>其他</Button>}
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
			<ProductTable dataSource={dataSource} />
		</div>
	);
};

export default ProductListPage;

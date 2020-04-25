import * as React from 'react';
import { Table, Switch, Button } from 'antd';
import s from './productTable.less';
const columns = [
	{
		title: '编号',
		dataIndex: 'id',
		key: 'id',
	},
	{
		title: '商品图片',
		dataIndex: 'productImg',
		key: 'productImg',
	},
	{
		title: '商品名称',
		dataIndex: 'productName',
		key: 'productName',
	},
	{
		title: '价格/货号',
		key: 'attr',
		dataIndex: 'attr',
		render: (text: { price: React.ReactNode; number: React.ReactNode }) => {
			return (
				<div>
					<div>价格: ￥{text.price}</div>
					<div>货号：{text.number}</div>
				</div>
			);
		},
	},
	{
		title: '标签',
		key: 'tag',
		dataIndex: 'tag',
		render: (text: {
			up: boolean | undefined;
			new: boolean | undefined;
			recommend: boolean | undefined;
		}) => (
			<div>
				<div>
					上架: <Switch checked={text.up} />
				</div>
				<div>
					新品: <Switch checked={text.new} />
				</div>
				<div>
					推荐: <Switch checked={text.recommend} />
				</div>
			</div>
		),
	},
	{
		title: '排序',
		dataIndex: 'sort',
		key: 'sort',
	},
	{
		title: '库存',
		dataIndex: 'stock',
		key: 'stock',
	},
	{
		title: '销量',
		dataIndex: 'sales',
		key: 'sales',
	},
	{
		title: '审核状态',
		key: 'audit',
		dataIndex: 'audit',
		render: (text: React.ReactNode) => (
			<div>
				<div>{text}</div>
				<a>审核详情</a>
			</div>
		),
	},
	{
		title: '操作',
		key: 'action',
		render: () => (
			<div className={s.action}>
				<Button>查看</Button>
				<Button>编辑</Button>
				<Button>日志</Button>
				<Button>删除</Button>
			</div>
		),
	},
];

const data = [
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

const ProductTable = () => {
	return (
		<div className={s.container}>
			<Table rowKey="id" columns={columns} dataSource={data} bordered />
		</div>
	);
};

export default ProductTable;

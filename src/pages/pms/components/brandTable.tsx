import React from 'react';
import { Table, Switch, Button } from 'antd';
import s from './common.less';

const dataSource = [
	{
		key: '1',
		no: '1',
		brandName: '美特斯邦威',
		initials: 'M',
		sort: 1,
		manuf: true,
		visible: true,
		about: {
			num: 100,
			assess: 1000,
		},
	},
	{
		key: '2',
		no: '2',
		brandName: '华为',
		initials: 'H',
		sort: 1,
		manuf: true,
		visible: true,
		about: {
			num: 100,
			assess: 1000,
		},
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: '品牌名称',
		dataIndex: 'brandName',
		key: 'brandName',
	},
	{
		title: '品牌首字母',
		dataIndex: 'initials',
		key: 'initials',
	},
	{
		title: '排序',
		dataIndex: 'sort',
		key: 'sort',
	},
	{
		title: '品牌制造商',
		dataIndex: 'manuf',
		key: 'manuf',
		render: (text: boolean | undefined) => <Switch checked={text} />,
	},
	{
		title: '是否显示',
		dataIndex: 'visible',
		key: 'visible',
		render: (text: boolean | undefined) => <Switch checked={text} />,
	},
	{
		title: '相关',
		dataIndex: 'about',
		key: 'about',
		render: (text: { num: React.ReactNode; assess: React.ReactNode }) => (
			<div className={s.action}>
				<span>商品: {text.num}</span>
				<span>商品: {text.assess}</span>
			</div>
		),
	},
	{
		title: '操作',
		dataIndex: 'action',
		key: 'action',
		render: () => (
			<div className={s.action}>
				<Button>编辑</Button>
				<Button type="danger">删除</Button>
			</div>
		),
	},
];
const BrandTable = () => {
	return (
		<div className="mt16">
			<Table bordered dataSource={dataSource} columns={columns} />
		</div>
	);
};

export default BrandTable;

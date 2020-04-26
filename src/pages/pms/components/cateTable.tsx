import React from 'react';
import { Table, Switch, Button } from 'antd';
import s from './common.less';
const dataSource = [
	{
		key: '1',
		no: '1',
		cateName: '服装',
		level: '一级',
		total: 100,
		unit: '件',
		nav: true,
		visible: true,
		sort: 1,
	},
	{
		key: '2',
		no: '2',
		cateName: '手机数码',
		level: '一级',
		total: 100,
		unit: '件',
		nav: true,
		visible: true,
		sort: 1,
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: '分类名称',
		dataIndex: 'cateName',
		key: 'cateName',
	},
	{
		title: '级别',
		dataIndex: 'level',
		key: 'level',
	},
	{
		title: '商品数量',
		dataIndex: 'total',
		key: 'total',
	},
	{
		title: '数量单位',
		dataIndex: 'unit',
		key: 'unit',
	},
	{
		title: '导航栏',
		dataIndex: 'nav',
		key: 'nav',
		render: (text: boolean | undefined) => <Switch checked={text} />,
	},
	{
		title: '是否显示',
		dataIndex: 'visible',
		key: 'visible',
		render: (text: boolean | undefined) => <Switch checked={text} />,
	},
	{
		title: '排序',
		dataIndex: 'sort',
		key: 'sort',
	},
	{
		title: '设置',
		dataIndex: 'setting',
		key: 'setting',
		render: () => (
			<div className={s.action}>
				<Button>查看下级</Button>
				<Button>转义商品</Button>
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
const CateTable = () => {
	return (
		<div>
			<Table bordered dataSource={dataSource} columns={columns} />
		</div>
	);
};

export default CateTable;

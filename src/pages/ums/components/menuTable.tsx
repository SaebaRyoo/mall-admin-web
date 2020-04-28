import React from 'react';
import { Table, Button, Switch } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		icon: 'icon',
		menuname: '商品',
		name: 'pms',
		level: 1,
		visible: true,
		sort: 1,
	},
	{
		key: '2',
		no: '2',
		icon: 'icon',
		menuname: '订单',
		name: 'oms',
		level: 1,
		visible: false,
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
		title: '菜单名称',
		dataIndex: 'menuname',
		key: 'menuname',
	},
	{
		title: '菜单级数',
		dataIndex: 'level、',
		key: 'level',
	},
	{
		title: '前端名称',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '前端图标',
		dataIndex: 'icon',
		key: 'icon',
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
			<div className="g_action">
				<Button>查看下级</Button>
			</div>
		),
	},
	{
		title: '操作',
		dataIndex: 'action',
		key: 'action',
		render: () => (
			<div className="g_action">
				<Button>编辑</Button>
				<Button type="danger">删除</Button>
			</div>
		),
	},
];
const MenuTable = () => {
	const rowSelection = {
		onChange: () => {},
	};
	return (
		<div className="mt16">
			<Table
				rowSelection={rowSelection}
				bordered
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	);
};

export default MenuTable;

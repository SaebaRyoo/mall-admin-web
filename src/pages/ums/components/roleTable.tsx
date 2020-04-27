import React from 'react';
import { Table, Button, Switch } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		createTime: '2018-09-15 12:24:27',
		userCount: 1,
		rolename: '管理员',
		desc: 'test',
		status: true,
	},
	{
		key: '2',
		no: '2',
		createTime: '2018-09-15 12:24:27',
		userCount: 1,
		rolename: '管理员',
		desc: 'test',
		status: false,
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: '角色名称',
		dataIndex: 'rolename',
		key: 'rolename',
	},
	{
		title: '描述',
		dataIndex: 'desc',
		key: 'desc',
	},
	{
		title: '用户数',
		dataIndex: 'userCount',
		key: 'userCount',
	},
	{
		title: '添加时间',
		dataIndex: 'createTime',
		key: 'createTime',
	},
	{
		title: '是否启用',
		dataIndex: 'status',
		key: 'status',
		render: (text: boolean | undefined) => <Switch checked={text} />,
	},
	{
		title: '操作',
		dataIndex: 'action',
		key: 'action',
		render: () => (
			<div className="g_action">
				<Button>分配菜单</Button>
				<Button>分配资源</Button>
				<Button>编辑</Button>
				<Button type="danger">删除</Button>
			</div>
		),
	},
];
const RoleTable = () => {
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

export default RoleTable;

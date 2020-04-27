import React from 'react';
import { Table, Button, Switch } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		createTime: '2018-09-15 12:24:27',
		prevTime: '2018-09-15 12:24:27',
		email: '123@qq.com',
		user: 'test',
		name: '测试账号',
		status: true,
	},
	{
		key: '2',
		no: '2',
		createTime: '2018-09-15 12:24:27',
		prevTime: '2018-09-15 12:24:27',
		email: '123@qq.com',
		user: 'test',
		name: '测试账号',
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
		title: '账号',
		dataIndex: 'user',
		key: 'user',
	},
	{
		title: '姓名',
		dataIndex: 'name',
		key: 'name',
	},
	{
		title: '邮箱',
		dataIndex: 'email',
		key: 'email',
	},
	{
		title: '添加时间',
		dataIndex: 'createTime',
		key: 'createTime',
	},
	{
		title: '最后登录',
		dataIndex: 'prevTime',
		key: 'prevTime',
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
				<Button>分配角色</Button>
				<Button>编辑</Button>
				<Button type="danger">删除</Button>
			</div>
		),
	},
];
const UserTable = () => {
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

export default UserTable;

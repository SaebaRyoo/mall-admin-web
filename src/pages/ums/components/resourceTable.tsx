import React from 'react';
import { Table, Button } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		createTime: '2018-09-15 12:24:27',
		path: '/brand/**',
		resourceName: '商品品牌管理',
		desc: '',
	},
	{
		key: '2',
		no: '2',
		createTime: '2018-09-15 12:24:27',
		path: '/brand/**',
		resourceName: '商品品牌管理',
		desc: '',
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: '资源名称',
		dataIndex: 'resourceName',
		key: 'resourceName',
	},
	{
		title: '资源路径',
		dataIndex: 'path',
		key: 'path',
	},
	{
		title: '描述',
		dataIndex: 'desc',
		key: 'desc',
	},
	{
		title: '添加时间',
		dataIndex: 'createTime',
		key: 'createTime',
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
const ResourceTable = () => {
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

export default ResourceTable;

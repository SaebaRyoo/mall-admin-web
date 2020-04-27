import React from 'react';
import { Table, Button } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		createTime: '2018-09-15 12:24:27',
		reasonType: '质量问题',
		sort: '1',
		useable: true,
	},
	{
		key: '2',
		no: '2',
		createTime: '2018-09-15 12:24:27',
		reasonType: '质量问题',
		sort: '1',
		useable: true,
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: '原因类型',
		dataIndex: 'reasonType',
		key: 'reasonType',
	},
	{
		title: '排序',
		dataIndex: 'sort',
		key: 'sort',
	},
	{
		title: '是否可用',
		dataIndex: 'useable',
		key: 'useable',
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
const ReasonTable = () => {
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

export default ReasonTable;

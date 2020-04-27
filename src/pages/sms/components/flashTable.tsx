import React from 'react';
import { Table, Button, Switch } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		startTime: '2018-09-15 12:24:27',
		endTime: '2018-09-15 12:24:27',
		activiteTitle: '质量问题',
		status: '1',
		online: true,
	},
	{
		key: '2',
		no: '2',
		startTime: '2018-09-15 12:24:27',
		endTime: '2018-09-15 12:24:27',
		activiteTitle: '质量问题',
		status: '1',
		online: true,
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: '活动标题',
		dataIndex: 'activiteTitle',
		key: 'activiteTitle',
	},
	{
		title: '活动状态',
		dataIndex: 'status',
		key: 'status',
	},
	{
		title: '开始时间',
		dataIndex: 'startTime',
		key: 'startTime',
	},
	{
		title: '结束时间',
		dataIndex: 'endTime',
		key: 'endTime',
	},
	{
		title: '上线/下线',
		dataIndex: 'online',
		key: 'online',
		render: (text: boolean | undefined) => <Switch checked={text} />,
	},
	{
		title: '操作',
		dataIndex: 'action',
		key: 'action',
		render: () => (
			<div className="g_action">
				<Button>设置商品</Button>
				<Button>编辑</Button>
				<Button type="danger">删除</Button>
			</div>
		),
	},
];
const FlashTable = () => {
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

export default FlashTable;

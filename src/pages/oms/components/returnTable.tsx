import React from 'react';
import { Table, Button } from 'antd';
const dataSource = [
	{
		key: '1',
		serviceNo: '1',
		operateTime: '2018-09-15 12:24:27',
		user: 'test',
		returnPrice: '￥18732',
		status: '代确认',
	},
	{
		key: '2',
		serviceNo: '2',
		operateTime: '2018-09-15 12:24:27',
		user: 'test',
		returnPrice: '￥18732',
		status: '代确认',
	},
];

const columns = [
	{
		title: '服务号',
		dataIndex: 'serviceNo',
		key: 'serviceNo',
	},
	{
		title: '申请时间',
		dataIndex: 'operateTime',
		key: 'operateTime',
	},
	{
		title: '用户账号',
		dataIndex: 'user',
		key: 'user',
	},
	{
		title: '退款金额',
		dataIndex: 'returnPrice',
		key: 'returnPrice',
	},
	{
		title: '申请状态',
		dataIndex: 'status',
		key: 'status',
	},
	{
		title: '处理事件',
		dataIndex: 'operateTime',
		key: 'operateTime',
	},
	{
		title: '操作',
		dataIndex: 'action',
		key: 'action',
		render: () => (
			<div className="g_action">
				<Button>查看详情</Button>
			</div>
		),
	},
];
const ReturnTable = () => {
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

export default ReturnTable;

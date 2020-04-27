import React from 'react';
import { Table, Button } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		orderNo: '201809150101000001',
		orderTime: '2018-09-15 12:24:27',
		user: 'test',
		orderPrice: '￥18732',
		payment: '未支付',
		origin: 'App订单',
		status: '代确认',
	},
	{
		key: '2',
		no: '2',
		orderNo: '201809150101000001',
		orderTime: '2018-09-15 12:24:27',
		user: 'test',
		orderPrice: '￥18732',
		payment: '未支付',
		origin: 'App订单',
		status: '代确认',
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: '订单编号',
		dataIndex: 'orderNo',
		key: 'orderNo',
	},
	{
		title: '提交时间',
		dataIndex: 'orderTime',
		key: 'orderTime',
	},
	{
		title: '用户账号',
		dataIndex: 'user',
		key: 'user',
	},
	{
		title: '订单金额',
		dataIndex: 'orderPrice',
		key: 'orderPrice',
	},
	{
		title: '支付方式',
		dataIndex: 'payment',
		key: 'payment',
	},
	{
		title: '订单来源',
		dataIndex: 'origin',
		key: 'origin',
	},
	{
		title: '订单状态',
		dataIndex: 'status',
		key: 'status',
	},
	{
		title: '操作',
		dataIndex: 'action',
		key: 'action',
		render: () => (
			<div className="g_action">
				<Button>查看订单</Button>
				<Button type="danger">删除订单</Button>
			</div>
		),
	},
];
const OrderTable = () => {
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

export default OrderTable;

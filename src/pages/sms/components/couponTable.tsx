import React from 'react';
import { Table, Button } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		expirationTime: '2018-09-15 12:24:27',
		canuse: '全场通用',
		couponName: '全品类通用券',
		type: '全场赠券',
		threshold: '100',
		faceValue: '10',
		plantform: '全平台',
		status: '已过期',
	},
	{
		key: '2',
		no: '2',
		expirationTime: '2018-09-15 12:24:27',
		canuse: '全场通用',
		couponName: '全品类通用券',
		type: '全场赠券',
		threshold: '100',
		faceValue: '10',
		plantform: '全平台',
		status: '已过期',
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: '优惠券名称',
		dataIndex: 'couponName',
		key: 'couponName',
	},
	{
		title: '优惠券类型',
		dataIndex: 'type',
		key: 'type',
	},
	{
		title: '可使用商品',
		dataIndex: 'canuse',
		key: 'canuse',
	},
	{
		title: '使用门槛',
		dataIndex: 'threshold',
		key: 'threshold',
	},
	{
		title: '面值',
		dataIndex: 'faceValue',
		key: 'faceValue',
	},
	{
		title: '适用品台',
		dataIndex: 'plantform',
		key: 'plantform',
	},
	{
		title: '有效期',
		dataIndex: 'expirationTime',
		key: 'expirationTime',
	},
	{
		title: '状态',
		dataIndex: 'status',
		key: 'status',
	},
	{
		title: '操作',
		dataIndex: 'action',
		key: 'action',
		render: () => (
			<div className="g_action">
				<Button>查看</Button>
				<Button>编辑</Button>
				<Button type="danger">删除</Button>
			</div>
		),
	},
];
const CouponTable = () => {
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

export default CouponTable;

import React from 'react';
import { Table, Button, Switch } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		expirationTime: '2018-09-15 12:24:27',
		sort: '全场通用',
		productName: '小米',
		recommand: true,
		threshold: '100',
		faceValue: '10',
		plantform: '全平台',
		status: '已过期',
	},
	{
		key: '2',
		no: '2',
		expirationTime: '2018-09-15 12:24:27',
		sort: '全场通用',
		productName: '小米',
		recommand: false,
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
		title: '商品名称',
		dataIndex: 'productName',
		key: 'productName',
	},
	{
		title: '是否推荐',
		dataIndex: 'recommand',
		key: 'recommand',
		render: (text: boolean | undefined) => <Switch checked={text} />,
	},
	{
		title: '排序',
		dataIndex: 'sort',
		key: 'sort',
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
				<Button>设置排序</Button>
				<Button type="danger">删除</Button>
			</div>
		),
	},
];
const HotTable = () => {
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

export default HotTable;

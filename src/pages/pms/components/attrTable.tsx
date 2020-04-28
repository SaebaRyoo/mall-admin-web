import React from 'react';
import { Table, Button } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		attrName: '服装-T恤',
		attrNum: 10,
		paramsNum: 100,
	},
	{
		key: '2',
		no: '2',
		attrName: '手机数码-手机通讯',
		attrNum: 10,
		paramsNum: 100,
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: 'l类型名称',
		dataIndex: 'attrName',
		key: 'attrName',
	},
	{
		title: '属性数量',
		dataIndex: 'attrNum',
		key: 'attrNum',
	},
	{
		title: '参数数量',
		dataIndex: 'paramsNum',
		key: 'paramsNum',
	},
	{
		title: '设置',
		dataIndex: 'setting',
		key: 'setting',
		render: () => (
			<div className="g_action">
				<Button>属性列表</Button>
				<Button>参数列表</Button>
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
const AttrTable = () => {
	return (
		<div>
			<Table
				rowSelection={{}}
				bordered
				dataSource={dataSource}
				columns={columns}
			/>
		</div>
	);
};

export default AttrTable;

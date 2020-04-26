import React from 'react';
import { Table, Modal, Input, Row, Col } from 'antd';
const { Search } = Input;
const dataSource = [
	{
		key: '1',
		skuNo: '12',
		color: '红色',
		capacity: '16g',
		salesPrice: 3799,
		stock: 100,
		stockWarn: 10,
	},
	{
		key: '2',
		skuNo: '13',
		color: '黑色',
		capacity: '16g',
		salesPrice: 3799,
		stock: 99,
		stockWarn: 10,
	},
];

const columns = [
	{
		title: 'SKU编号',
		dataIndex: 'skuNo',
		key: 'skuNo',
		render: (text: string | number | string[] | undefined) => (
			<Input defaultValue={text} />
		),
	},
	{
		title: '颜色',
		dataIndex: 'color',
		key: 'color',
	},
	{
		title: '容量',
		dataIndex: 'capacity',
		key: 'capacity',
	},
	{
		title: '销售价格',
		dataIndex: 'salesPrice',
		key: 'salesPrice',
		render: (text: string | number | string[] | undefined) => (
			<Input defaultValue={text} />
		),
	},
	{
		title: '商品库存',
		dataIndex: 'stock',
		key: 'stock',
		render: (text: string | number | string[] | undefined) => (
			<Input defaultValue={text} />
		),
	},
	{
		title: '商品库存',
		dataIndex: 'stockWarn',
		key: 'stockWarn',
		render: (text: string | number | string[] | undefined) => (
			<Input defaultValue={text} />
		),
	},
];

const SKUModal = ({ visible, onCancel, onOk }: any) => {
	return (
		<Modal
			width={800}
			title="编辑货品信息"
			visible={visible}
			onCancel={onCancel}
			onOk={onOk}
		>
			<Row justify="space-around" align="middle" style={{ paddingBottom: 16 }}>
				<Col span={8}>商品货号： 6946605</Col>
				<Col span={16}>
					<Search
						placeholder="按sku编号搜索"
						enterButton
						onSearch={(value: any) => console.log(value)}
					/>
				</Col>
			</Row>
			<Table
				bordered
				pagination={false}
				dataSource={dataSource}
				columns={columns}
			/>
		</Modal>
	);
};

export default SKUModal;

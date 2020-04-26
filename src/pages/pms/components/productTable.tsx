import * as React from 'react';
import { Table, Switch, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import SKUModal from './skuModal';
import s from './productTable.less';

const ProductTable = ({ dataSource }: any) => {
	const [skuModal, setSkuModal] = React.useState(false);
	// 列配置
	const columns = [
		{
			title: '编号',
			dataIndex: 'id',
			key: 'id',
		},
		{
			title: '商品图片',
			dataIndex: 'productImg',
			key: 'productImg',
		},
		{
			title: '商品名称',
			dataIndex: 'productName',
			key: 'productName',
		},
		{
			title: '价格/货号',
			key: 'attr',
			dataIndex: 'attr',
			render: (text: { price: React.ReactNode; number: React.ReactNode }) => {
				return (
					<div>
						<div>价格: ￥{text.price}</div>
						<div>货号：{text.number}</div>
					</div>
				);
			},
		},
		{
			title: '标签',
			key: 'tag',
			dataIndex: 'tag',
			render: (text: {
				up: boolean | undefined;
				new: boolean | undefined;
				recommend: boolean | undefined;
			}) => (
				<div>
					<div>
						上架: <Switch checked={text.up} />
					</div>
					<div>
						新品: <Switch checked={text.new} />
					</div>
					<div>
						推荐: <Switch checked={text.recommend} />
					</div>
				</div>
			),
		},
		{
			title: '排序',
			dataIndex: 'sort',
			key: 'sort',
		},
		{
			title: '库存',
			dataIndex: 'stock',
			key: 'stock',
			render: () => (
				<Button
					onClick={() => setSkuModal(true)}
					shape="round"
					type="primary"
					icon={<EditOutlined />}
				/>
			),
		},
		{
			title: '销量',
			dataIndex: 'sales',
			key: 'sales',
		},
		{
			title: '审核状态',
			key: 'audit',
			dataIndex: 'audit',
			render: (text: React.ReactNode) => (
				<div>
					<div>{text}</div>
					<a>审核详情</a>
				</div>
			),
		},
		{
			title: '操作',
			key: 'action',
			render: () => (
				<div className={s.action}>
					<Button>查看</Button>
					<Button>编辑</Button>
					<Button>日志</Button>
					<Button type="danger">删除</Button>
				</div>
			),
		},
	];
	return (
		<div className="mt16">
			<SKUModal
				visible={skuModal}
				onCancel={() => setSkuModal(false)}
				onOk={() => setSkuModal(false)}
			/>
			<Table rowKey="id" columns={columns} dataSource={dataSource} bordered />
		</div>
	);
};

export default ProductTable;

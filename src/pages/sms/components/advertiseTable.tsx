import React from 'react';
import { Table, Button, Switch } from 'antd';
const dataSource = [
	{
		key: '1',
		no: '1',
		expirationTime: '2018-09-15 12:24:27',
		img:
			'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/movie_ad.jpg',
		advertiseName: '夏季精选',
		adPlacement: 'App首页轮播',
		threshold: '100',
		faceValue: '10',
		plantform: '全平台',
		online: true,
		clickCount: 1,
		orderCount: 1,
	},
	{
		key: '2',
		no: '2',
		expirationTime: '2018-09-15 12:24:27',
		img:
			'http://macro-oss.oss-cn-shenzhen.aliyuncs.com/mall/images/20181113/movie_ad.jpg',
		advertiseName: '大牌手机低价秒',
		adPlacement: 'App首页轮播',
		threshold: '100',
		faceValue: '10',
		plantform: '全平台',
		online: false,
		clickCount: 1,
		orderCount: 1,
	},
];

const columns = [
	{
		title: '编号',
		dataIndex: 'no',
		key: 'no',
	},
	{
		title: '广告名称',
		dataIndex: 'advertiseName',
		key: 'advertiseName',
	},
	{
		title: '广告位置',
		dataIndex: 'adPlacement',
		key: 'adPlacement',
	},
	{
		title: '广告图片',
		dataIndex: 'img',
		key: 'img',
		render: (text: string) => <img className="g_img_80" src={text} />,
	},
	{
		title: '上线/下线',
		dataIndex: 'online',
		key: 'online',
		render: (text: boolean | undefined) => <Switch checked={text} />,
	},
	{
		title: '点击次数',
		dataIndex: 'clickCount',
		key: 'clickCount',
	},
	{
		title: '生成订单',
		dataIndex: 'orderCount',
		key: 'orderCount',
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
const AdvertiseTable = () => {
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

export default AdvertiseTable;

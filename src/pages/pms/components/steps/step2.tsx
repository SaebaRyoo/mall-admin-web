import * as React from 'react';
import { Form, Input, Switch, Checkbox, Tabs, DatePicker } from 'antd';

const TextArea = Input.TextArea;
const { TabPane } = Tabs;

const tailLayout = {
	wrapperCol: { offset: 0, span: 14 },
};

const TabsComp = () => (
	<Tabs defaultActiveKey="1">
		<TabPane tab="无优惠" key="1">
			无优惠
		</TabPane>
		<TabPane tab="特惠促销" key="2">
			<Form.Item label="开始时间" {...tailLayout}>
				<DatePicker showTime />
			</Form.Item>
			<Form.Item label="结束时间" {...tailLayout}>
				<DatePicker showTime />
			</Form.Item>
			<Form.Item label="促销价格" {...tailLayout}>
				<Input />
			</Form.Item>
		</TabPane>
		<TabPane tab="会员价格" key="3">
			<Form.Item label="黄金会员" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item label="白金会员" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item label="钻石会员" {...tailLayout}>
				<Input />
			</Form.Item>
		</TabPane>
		<TabPane tab="阶梯价格" key="4">
			Content of Tab Pane 3
		</TabPane>
		<TabPane tab="满减价格" key="5">
			Content of Tab Pane 3
		</TabPane>
	</Tabs>
);

const StepTwo = () => {
	return (
		<React.Fragment>
			<Form.Item name={'boundsPoint'} label="赠送积分" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'growthValue'} label="赠送成长值" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'pointsLimit'} label="积分购买限制" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'noticGoods'} label="预告商品" {...tailLayout}>
				<Switch checked />
			</Form.Item>
			<Form.Item name={'goodsUp'} label="商品上架" {...tailLayout}>
				<Switch checked />
			</Form.Item>
			<Form.Item label="商品推荐" {...tailLayout}>
				<div>
					新品 <Switch checked />
				</div>
				<div>
					推荐 <Switch checked />
				</div>
			</Form.Item>
			<Form.Item label="服务保障" {...tailLayout}>
				<Checkbox>无忧退货</Checkbox>
				<Checkbox>快速退款</Checkbox>
				<Checkbox>免费包邮</Checkbox>
			</Form.Item>
			<Form.Item name={'detailTitle'} label="详细页标题" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'detailDesc'} label="详细页描述" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'goodsKey'} label="商品关键字" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'goodsRemark'} label="商品备注" {...tailLayout}>
				<TextArea />
			</Form.Item>
			<Form.Item name={'preferentialWay'} label="优惠方式" {...tailLayout}>
				<TabsComp />
			</Form.Item>
		</React.Fragment>
	);
};

export default StepTwo;

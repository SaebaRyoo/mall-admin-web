import * as React from 'react';
import { Form, Input, Switch, Checkbox } from 'antd';

const TextArea = Input.TextArea;

const tailLayout = {
	wrapperCol: { offset: 0, span: 14 },
};
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
				<Switch />
			</Form.Item>
			<Form.Item name={'goodsUp'} label="商品上架" {...tailLayout}>
				<Switch />
			</Form.Item>
			<Form.Item name={'recommend'} label="商品推荐" {...tailLayout}>
				<div>
					新品 <Switch />
				</div>
				<div>
					推荐 <Switch />
				</div>
			</Form.Item>
			<Form.Item name={'service'} label="服务保障" {...tailLayout}>
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
				<Input />
			</Form.Item>
		</React.Fragment>
	);
};

export default StepTwo;

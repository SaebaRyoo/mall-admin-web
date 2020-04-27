import * as React from 'react';
import { Steps } from 'antd';

const { Step } = Steps;

const OrderDetail = () => {
	return (
		<div>
			<Steps current={1}>
				<Step title="提交订单" description="2018-09-15 12:24:27" />
				<Step title="支付订单" />
				<Step title="平台发货" />
				<Step title="确认收货" />
				<Step title="完成评价" />
			</Steps>
		</div>
	);
};

export default OrderDetail;

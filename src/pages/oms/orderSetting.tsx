import * as React from 'react';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};
const OrderSettingPage = () => {
	const [form] = Form.useForm();
	return (
		<div>
			<Form form={form} name="orderSetting" {...layout}>
				<FormItem name="spikeOrder" label="秒杀订单超过">
					<Input defaultValue={60} style={{ width: 200 }} addonAfter="分" />
					未付款，订单自动关闭
				</FormItem>
				<FormItem name="normalOrder" label="正常订单超过">
					<Input defaultValue={120} style={{ width: 200 }} addonAfter="分" />
					未付款，订单自动关闭
				</FormItem>
				<FormItem name="shipOver" label="发货超过">
					<Input defaultValue={15} style={{ width: 200 }} addonAfter="天" />
					未收货，订单自动关闭
				</FormItem>
				<FormItem name="orderFinished" label="订单完成超过">
					<Input defaultValue={7} style={{ width: 200 }} addonAfter="天" />
					自动结束交易，不能申请售后
				</FormItem>
				<FormItem name="orderFinishedAssess" label="订单完成超过">
					<Input defaultValue={7} style={{ width: 200 }} addonAfter="天" />
					自动五星好评
				</FormItem>
			</Form>
		</div>
	);
};

export default OrderSettingPage;

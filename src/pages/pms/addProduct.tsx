import * as React from 'react';
import { Steps, Button, message, Form } from 'antd';
import s from './addProduct.less';
import StepOne from './components/steps/step1';
import StepTwo from './components/steps/step2';

const { Step } = Steps;

const steps = [
	{
		title: '填写商品信息',
		content: <StepOne />,
	},
	{
		title: '填写商品促销',
		content: <StepTwo />,
	},
	{
		title: '填写商品属性',
		content: '商品属性',
	},
	{
		title: '选择商品关联',
		content: '商品关联',
	},
];

const layout = {
	labelCol: { span: 6 },
	wrapperCol: { span: 18 },
};
const AddProductPage = () => {
	const [current, changeCurrent] = React.useState<number>(0);
	const [form] = Form.useForm();

	const next = () => {
		changeCurrent(current + 1);
	};
	const prev = () => {
		changeCurrent(current - 1);
	};
	return (
		<div className={s.container}>
			<Steps current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className={s['steps-content']}>
				<Form {...layout} form={form}>
					{steps[current].content}
				</Form>
			</div>
			<div className={s['steps-action']}>
				{current > 0 && (
					<Button className="margin8" onClick={() => prev()}>
						上一步
					</Button>
				)}
				{current < steps.length - 1 && (
					<Button type="primary" onClick={() => next()}>
						下一步
					</Button>
				)}
				{current === steps.length - 1 && (
					<Button
						type="primary"
						onClick={() => message.success('Processing complete!')}
					>
						完成
					</Button>
				)}
			</div>
		</div>
	);
};

export default AddProductPage;

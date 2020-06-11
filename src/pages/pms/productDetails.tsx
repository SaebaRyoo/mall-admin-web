import * as React from 'react';
import { Steps, Button } from 'antd';
import s from './productDetails.less';
import StepOne from './components/steps/step1';
import StepTwo from './components/steps/step2';

const { Step } = Steps;

const steps = [
	{
		title: '填写商品信息',
		content: <StepOne styles={s} />,
	},
	{
		title: '填写商品促销',
		content: <StepTwo styles={s} />,
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

const AddProductPage = () => {
	const [current, changeCurrent] = React.useState<number>(0);
	const next = () => {
		changeCurrent(current + 1);
	};
	const prev = () => {
		changeCurrent(current - 1);
	};
	console.log('productDetails----->');
	return (
		<div className={s.container}>
			<Steps current={current}>
				{steps.map((item) => (
					<Step key={item.title} title={item.title} />
				))}
			</Steps>
			<div className={s['steps-content']}>{steps[current].content}</div>
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
					<Button type="primary" htmlType="submit">
						完成
					</Button>
				)}
			</div>
		</div>
	);
};

export default AddProductPage;

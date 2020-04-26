import * as React from 'react';
import { Form, Input, Cascader, Select } from 'antd';

const Option = Select.Option;
const TextArea = Input.TextArea;

const tailLayout = {
	wrapperCol: { offset: 0, span: 14 },
};
const StepOne = () => {
	return (
		<React.Fragment>
			<Form.Item name={'productCate'} label="商品分类" {...tailLayout}>
				<Cascader />
			</Form.Item>
			<Form.Item name={'productName'} label="商品名称" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'subTitle'} label="副标题" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'brand'} label="商品品牌" {...tailLayout}>
				<Select>
					<Option value={1}>华为</Option>
					<Option value={2}>小米</Option>
				</Select>
			</Form.Item>
			<Form.Item name={'descript'} label="商品介绍" {...tailLayout}>
				<TextArea />
			</Form.Item>
			<Form.Item name={'productNo'} label="商品货号" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'sellingPrice'} label="商品售价" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'marketPrice'} label="市场价" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'stock'} label="商品库存" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'unit'} label="计量单位" {...tailLayout}>
				<Input />
			</Form.Item>
			<Form.Item name={'weight'} label="商品重量" {...tailLayout}>
				<Input addonAfter="克" />
			</Form.Item>
			<Form.Item name={'sort'} label="排序" {...tailLayout}>
				<Input />
			</Form.Item>
		</React.Fragment>
	);
};

export default StepOne;

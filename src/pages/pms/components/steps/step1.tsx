import * as React from 'react';
import { Input, Cascader, Select, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const Option = Select.Option;
const TextArea = Input.TextArea;

const StepOne = ({ styles }: any) => {
	console.log('step1------------>');
	const {
		productCate,
		productName,
		subTitle,
		brand,
		descript,
		productNo,
		sellingPrice,
		marketPrice,
		stock,
		unit,
		weight,
		sort,
	} = useSelector((state: any) => state.pmsDetails);
	const dispatch = useDispatch();

	const handleChange = (key: string, value: any) => {
		dispatch({
			type: 'pmsDetails/changeDetails',
			payload: { [key]: value },
		});
	};

	const data = [
		{
			label: '商品分类',
			required: true,
			child: (
				<Cascader
					style={{ width: '100%' }}
					value={productCate}
					onChange={(value) => handleChange('productCate', value)}
				/>
			),
		},
		{
			label: '商品名称',
			required: true,
			child: (
				<Input
					value={productName}
					onChange={(e) => handleChange('productName', e.target.value)}
				/>
			),
		},
		{
			label: '副标题',
			required: true,
			child: (
				<Input
					value={subTitle}
					onChange={(e) => handleChange('subTitle', e.target.value)}
				/>
			),
		},
		{
			label: '商品品牌',
			required: true,
			child: (
				<Select
					style={{ width: '100%' }}
					value={brand}
					onChange={(value) => handleChange('brand', value)}
				>
					<Option value={1}>华为</Option>
					<Option value={2}>小米</Option>
				</Select>
			),
		},
		{
			label: '商品介绍',
			child: (
				<TextArea
					placeholder="请输入简介"
					value={descript}
					onChange={(e) => handleChange('descript', e.target.value)}
				/>
			),
		},
		{
			label: '商品货号',
			child: (
				<Input
					value={productNo}
					onChange={(e) => handleChange('productNo', e.target.value)}
				/>
			),
		},
		{
			label: '商品售价',
			child: (
				<Input
					value={sellingPrice}
					onChange={(e) => handleChange('sellingPrice', e.target.value)}
				/>
			),
		},
		{
			label: '市场价',
			child: (
				<Input
					value={marketPrice}
					onChange={(e) => handleChange('marketPrice', e.target.value)}
				/>
			),
		},
		{
			label: '商品库存',
			child: (
				<Input
					value={stock}
					onChange={(e) => handleChange('stock', e.target.value)}
				/>
			),
		},
		{
			label: '计量单位',
			child: (
				<Input
					value={unit}
					onChange={(e) => handleChange('unit', e.target.value)}
				/>
			),
		},
		{
			label: '商品重量',
			child: (
				<Input
					value={weight}
					onChange={(e) => handleChange('weight', e.target.value)}
				/>
			),
		},
		{
			label: '排序',
			child: (
				<Input
					value={sort}
					onChange={(e) => handleChange('sort', e.target.value)}
				/>
			),
		},
	];

	return (
		<React.Fragment>
			{data.map((item, i) => {
				return (
					<Row align="middle" gutter={[16, 16]} key={i}>
						<Col className={styles['step-item-label']} span={6}>
							{item.required && <span>*</span>}
							{item.label}:
						</Col>
						<Col span={14}>{item.child}</Col>
					</Row>
				);
			})}
		</React.Fragment>
	);
};

export default StepOne;

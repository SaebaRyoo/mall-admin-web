import * as React from 'react';
import { Input, Switch, Row, Col, Select, Checkbox } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

const Option = Select.Option;

const generateStandardData = (type: number) => {
	const data: any = {
		0: [
			{
				filterType: 1,
				handAddStatus: 0,
				id: 49,
				inputList: '红色,蓝色,绿色',
				inputType: 1,
				name: '颜色',
				productAttributeCategoryId: 11,
				relatedStatus: 0,
				searchType: 0,
				selectType: 0,
				sort: 0,
				type: 0,
			},
			{
				filterType: 0,
				handAddStatus: 0,
				id: 50,
				inputList: 'M,X,XL,2XL,3XL,4XL',
				inputType: 1,
				name: '尺寸',
				productAttributeCategoryId: 11,
				relatedStatus: 0,
				searchType: 0,
				selectType: 0,
				sort: 0,
				type: 0,
			},
		],
		1: [
			{
				filterType: 1,
				handAddStatus: 0,
				id: 49,
				inputList: '红色,蓝色,绿色',
				inputType: 1,
				name: '颜色',
				productAttributeCategoryId: 11,
				relatedStatus: 0,
				searchType: 0,
				selectType: 0,
				sort: 0,
				type: 0,
			},
			{
				filterType: 0,
				handAddStatus: 0,
				id: 50,
				inputList: '38,39,40',
				inputType: 1,
				name: '尺寸',
				productAttributeCategoryId: 11,
				relatedStatus: 0,
				searchType: 0,
				selectType: 0,
				sort: 0,
				type: 0,
			},
			{
				filterType: 0,
				handAddStatus: 0,
				id: 51,
				inputList: '夏季,秋季',
				inputType: 1,
				name: '风格',
				productAttributeCategoryId: 11,
				relatedStatus: 0,
				searchType: 0,
				selectType: 0,
				sort: 0,
				type: 0,
			},
		],
	};
	return data[type];
};

const StepThree = ({ styles }: any) => {
	const {
		type, // 属性类型
		standard, // 规格
		prod_parameters, // 商品参数
		prod_images, // 商品相册
		standard_parameters, // 规格参数
	} = useSelector((state: any) => state.pmsDetails);
	const dispatch = useDispatch();
	const handleChange = (key: string, value: any) => {
		dispatch({
			type: 'pmsDetails/changeDetails',
			payload: { [key]: value },
		});
	};

	const standardData = generateStandardData(type);

	const data = [
		{
			label: '属性类型',
			child: (
				<Select value={type} onChange={(value) => handleChange('type', value)}>
					<Option value={0}>服装-T恤</Option>
					<Option value={1}>服装-鞋帽</Option>
				</Select>
			),
		},
		{
			label: '商品规格',
			child: (
				// <Input
				// 	value={standard}
				// 	onChange={(e) => handleChange('standard', e.target.value)}
				// />
				<div>
					{standardData.map((item: any) => {
						const inputs = item.inputList.split(',');
						return (
							<Row key={item.id}>
								<Col span={24}>{item.name}</Col>
								<Col span={24}>
									{inputs.map((inp: any) => {
										return <Checkbox key={inp}>{inp}</Checkbox>;
									})}
								</Col>
							</Row>
						);
					})}
				</div>
			),
		},
		{
			label: '商品参数',
			child: (
				<Input
					value={prod_parameters}
					onChange={(e) => handleChange('prod_parameters', e.target.value)}
				/>
			),
		},
		{
			label: '商品相册',
			child: (
				<Switch
					checked={prod_images}
					onChange={(value) => handleChange('prod_images', value)}
				/>
			),
		},
		{
			label: '规格参数',
			child: (
				<Switch
					checked={standard_parameters}
					onChange={(value) => handleChange('standard_parameters', value)}
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
							{item.label}:
						</Col>
						<Col className={styles['step-item-content']} span={14}>
							{item.child}
						</Col>
					</Row>
				);
			})}
		</React.Fragment>
	);
};

export default StepThree;

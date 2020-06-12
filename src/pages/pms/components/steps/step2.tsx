import * as React from 'react';
import {
	Form,
	Input,
	Switch,
	Checkbox,
	Tabs,
	DatePicker,
	Row,
	Col,
} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { mConvert } from '@src/utils/common';
import OperateTable from '@src/components/Table/OperateTable';

const TextArea = Input.TextArea;
const { TabPane } = Tabs;

const tailLayout = {
	wrapperCol: { offset: 0, span: 14 },
};

const TabsComp = ({
	preferentialWay,
	startTime,
	endTime,
	salesPrice,
	gold,
	platinum,
	diamond,
	handleChange,
	stepPrice,
	fullReduction,
}: any) => {
	return (
		<Tabs
			activeKey={preferentialWay}
			onChange={(activeKey) => handleChange('preferentialWay', activeKey)}
		>
			<TabPane tab="无优惠" key="1">
				无优惠
			</TabPane>
			<TabPane tab="特惠促销" key="2">
				<Form.Item label="开始时间" {...tailLayout}>
					<DatePicker
						showTime
						value={mConvert(startTime)}
						onChange={(date, dateString: string) =>
							handleChange('startTime', dateString)
						}
					/>
				</Form.Item>
				<Form.Item label="结束时间" {...tailLayout}>
					<DatePicker
						showTime
						value={mConvert(endTime)}
						onChange={(date, dateString: string) =>
							handleChange('endTime', dateString)
						}
					/>
				</Form.Item>
				<Form.Item label="促销价格" {...tailLayout}>
					<Input
						type="number"
						value={salesPrice}
						onChange={(e) => {
							handleChange('salesPrice', e.target.value);
						}}
					/>
				</Form.Item>
			</TabPane>
			<TabPane tab="会员价格" key="3">
				<Form.Item label="黄金会员" {...tailLayout}>
					<Input
						value={gold}
						onChange={(e) => {
							handleChange('gold', e.target.value);
						}}
					/>
				</Form.Item>
				<Form.Item label="白金会员" {...tailLayout}>
					<Input
						value={platinum}
						onChange={(e) => {
							handleChange('platinum', e.target.value);
						}}
					/>
				</Form.Item>
				<Form.Item label="钻石会员" {...tailLayout}>
					<Input
						value={diamond}
						onChange={(e) => {
							handleChange('diamond', e.target.value);
						}}
					/>
				</Form.Item>
			</TabPane>
			<TabPane tab="阶梯价格" key="4">
				<OperateTable
					dataSource={stepPrice}
					columns={[
						{
							title: '数量',
							dataIndex: 'total',
							key: 'total',
						},
						{
							title: '折扣',
							dataIndex: 'discount',
							key: 'discount',
						},
					]}
					onChange={(data) => {
						handleChange('stepPrice', data);
					}}
					defaultData={{
						total: 0,
						discount: 0,
					}}
				/>
			</TabPane>
			<TabPane tab="满减价格" key="5">
				<OperateTable
					dataSource={fullReduction}
					columns={[
						{
							title: '满',
							dataIndex: 'full',
							key: 'full',
							needRender: true,
						},
						{
							title: '立减',
							dataIndex: 'decrease',
							key: 'decrease',
							needRender: true,
						},
					]}
					onChange={(data) => {
						handleChange('fullReduction', data);
					}}
					defaultData={{
						full: 0,
						decrease: 0,
					}}
				/>
			</TabPane>
		</Tabs>
	);
};
const StepTwo = ({ styles }: any) => {
	const {
		boundsPoint,
		growthValue,
		pointsLimit,
		noticGoods,
		goodsUp,
		news,
		recommend,
		back,
		refund,
		baoyou,
		detailTitle,
		detailDesc,
		goodsKey,
		goodsRemark,
		preferentialWay,
		startTime,
		endTime,
		salesPrice,
		gold, // 黄金会员价格
		platinum, // 白金会员价格
		diamond, // 钻石会员
		stepPrice, // 阶梯价格
		fullReduction, // 满减
	} = useSelector((state: any) => state.pmsDetails);
	const dispatch = useDispatch();
	const handleChange = (key: string, value: any) => {
		dispatch({
			type: 'pmsDetails/changeDetails',
			payload: { [key]: value },
		});
	};

	// 防止在改变其他与tab无关的props时，重新渲染Tabs组件
	const MemoizedTab = React.useMemo(
		() => (
			<TabsComp
				handleChange={handleChange}
				preferentialWay={preferentialWay}
				startTime={startTime}
				endTime={endTime}
				salesPrice={salesPrice}
				gold={gold}
				platinum={platinum}
				diamond={diamond}
				stepPrice={stepPrice}
				fullReduction={fullReduction}
			/>
		),
		[
			preferentialWay,
			startTime,
			endTime,
			salesPrice,
			gold,
			platinum,
			diamond,
			stepPrice,
			fullReduction,
		]
	);
	const data = [
		{
			label: '商品货号',
			child: (
				<Input
					value={boundsPoint}
					onChange={(e) => handleChange('boundsPoint', e.target.value)}
				/>
			),
		},
		{
			label: '赠送成长值',
			child: (
				<Input
					value={growthValue}
					onChange={(e) => handleChange('growthValue', e.target.value)}
				/>
			),
		},
		{
			label: '积分购买限制',
			child: (
				<Input
					value={pointsLimit}
					onChange={(e) => handleChange('pointsLimit', e.target.value)}
				/>
			),
		},
		{
			label: '预告商品',
			child: (
				<Switch
					checked={noticGoods}
					onChange={(value) => handleChange('noticGoods', value)}
				/>
			),
		},
		{
			label: '商品上架',
			child: (
				<Switch
					checked={goodsUp}
					onChange={(value) => handleChange('goodsUp', value)}
				/>
			),
		},
		{
			label: '商品推荐',
			child: (
				<React.Fragment>
					<div>
						新品{' '}
						<Switch
							checked={news}
							onChange={(value) => handleChange('news', value)}
						/>
					</div>
					<div>
						推荐{' '}
						<Switch
							checked={recommend}
							onChange={(value) => handleChange('recommend', value)}
						/>
					</div>
				</React.Fragment>
			),
		},
		{
			label: '服务保障',
			child: (
				<React.Fragment>
					<Checkbox
						checked={back}
						onChange={(e) => handleChange('back', e.target.checked)}
					>
						无忧退货
					</Checkbox>
					<Checkbox
						checked={refund}
						onChange={(e) => handleChange('refund', e.target.checked)}
					>
						快速退款
					</Checkbox>
					<Checkbox
						checked={baoyou}
						onChange={(e) => handleChange('baoyou', e.target.checked)}
					>
						免费包邮
					</Checkbox>
				</React.Fragment>
			),
		},
		{
			label: '详细页标题',
			child: (
				<Input
					value={detailTitle}
					onChange={(e) => handleChange('detailTitle', e.target.value)}
				/>
			),
		},
		{
			label: '详细页描述',
			child: (
				<Input
					value={detailDesc}
					onChange={(e) => handleChange('detailDesc', e.target.value)}
				/>
			),
		},
		{
			label: '商品关键字',
			child: (
				<Input
					value={goodsKey}
					onChange={(e) => handleChange('goodsKey', e.target.value)}
				/>
			),
		},
		{
			label: '商品备注',
			child: (
				<TextArea
					value={goodsRemark}
					onChange={(e) => handleChange('goodsRemark', e.target.value)}
				/>
			),
		},
		{
			label: '优惠方式',
			child: MemoizedTab,
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

export default StepTwo;

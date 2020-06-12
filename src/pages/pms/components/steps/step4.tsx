import * as React from 'react';
import { Transfer, Row, Col } from 'antd';
import { TransferItem } from 'antd/lib/transfer';
import { useSelector, useDispatch } from 'react-redux';

const mockData: TransferItem[] | undefined = [];
for (let i = 0; i < 20; i++) {
	mockData.push({
		key: i.toString(),
		title: `content${i + 1}`,
		description: `description of content${i + 1}`,
		disabled: i % 3 < 1,
	});
}
const oriTargetKeys = mockData
	.filter((item) => +item.key % 3 > 1)
	.map((item) => item.key);

const StepThree = ({ styles }: any) => {
	const [targetKeys, changeTargetKeys] = React.useState(oriTargetKeys);
	const [selectedKeys, changeSelectedKeys] = React.useState<string[]>([]);
	// const {
	// } = useSelector((state: any) => state.pmsDetails);
	// const dispatch = useDispatch();
	// const handleChange = (key: string, value: any) => {
	// 	dispatch({
	// 		type: 'pmsDetails/changeDetails',
	// 		payload: { [key]: value },
	// 	});
	// };
	console.log(targetKeys);

	const handleChange = (nextTargetKeys: any) => {
		changeTargetKeys(nextTargetKeys);
	};

	const handleSelectChange = (
		sourceSelectedKeys: string[],
		targetSelectedKeys: string[]
	) => {
		changeSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
	};

	const data = [
		{
			label: '关联专题',
			child: (
				<Transfer
					dataSource={mockData}
					titles={['待选择', '已选择']}
					targetKeys={targetKeys}
					selectedKeys={selectedKeys}
					onChange={handleChange}
					onSelectChange={handleSelectChange}
					render={(item): any => item.title}
				/>
			),
		},
		{
			label: '关联有限',
			child: (
				<Transfer
					dataSource={mockData}
					titles={['待选择', '已选择']}
					targetKeys={targetKeys}
					selectedKeys={selectedKeys}
					onChange={handleChange}
					onSelectChange={handleSelectChange}
					render={(item): any => item.title}
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

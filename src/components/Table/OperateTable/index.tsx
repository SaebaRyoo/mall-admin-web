import React from 'react';
import { Table, Button, Input } from 'antd';
import uid from '@src/utils/uid';
import { cloneDeep } from 'lodash';

const OperateTable = ({
	dataSource,
	columns,
	defaultData,
	onChange,
	...rest
}: {
	dataSource: object[];
	columns: object[];
	defaultData: object;
	onChange: (data: object[]) => void;
}) => {
	const handleInputChange = (key: string, value: string, index: number) => {
		const data: any = cloneDeep(dataSource);
		data[index][key] = value;
		onChange(data);
	};

	const handleDel = (index: number) => {
		const data: object[] = cloneDeep(dataSource);
		data.splice(index, 1);
		onChange(data);
	};

	const handleAddRow = () => {
		const data: object[] = cloneDeep(dataSource);
		const item: any = defaultData;
		item.key = uid();
		data.push(item);
		onChange(data);
	};

	const defaultColumns = columns
		.map((item: any) => {
			if (item.needRender) {
				item['render'] = (
					text: string | number | string[] | undefined,
					record: any,
					index: number
				) => {
					return (
						<Input
							value={text}
							onChange={(e) =>
								handleInputChange(item.key, e.target.value, index)
							}
						/>
					);
				};
			}
			return item;
		})
		.concat([
			{
				title: '操作',
				dataIndex: 'action',
				key: 'action',
				render: (text: any, record: any, index: any) => (
					<div className="g_action">
						{dataSource.length > 1 && (
							<Button type="danger" onClick={() => handleDel(index)}>
								删除
							</Button>
						)}
						<Button type="primary" onClick={() => handleAddRow()}>
							添加
						</Button>
					</div>
				),
			},
		]);
	return (
		<div>
			<Table
				rowKey={'key'}
				bordered
				dataSource={dataSource}
				columns={defaultColumns}
				{...rest}
			/>
		</div>
	);
};

export default OperateTable;

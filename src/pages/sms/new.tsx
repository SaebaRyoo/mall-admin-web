// 新品
import * as React from 'react';
import NewTable from './components/newTable';
import FieldsSearch, { FieldType } from '@src/components/Search';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '商品名称',
		name: 'name',
		props: {
			placeholder: '商品名称',
		},
	},
	{
		type: 'select',
		label: '推荐状态',
		name: 'status',
		options: [
			{
				id: 1,
				value: '1',
				name: '未推荐',
			},
			{
				id: 2,
				value: '2',
				name: '推荐中',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
];

const NewPage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<NewTable />
		</div>
	);
};

export default NewPage;

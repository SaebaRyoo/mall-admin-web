// 秒杀
import * as React from 'react';
import FlashTable from './components/flashTable';
import FieldsSearch, { FieldType } from '@src/components/Search';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '活动名称',
		name: 'name',
		props: {
			placeholder: '活动名称',
		},
	},
];

const FlashPage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<FlashTable />
		</div>
	);
};

export default FlashPage;

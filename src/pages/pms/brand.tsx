import * as React from 'react';
import BrandTable from './components/brandTable';
import FieldsSearch, { FieldType } from '@src/components/Search';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '输入搜索',
		name: 'productName',
		props: {
			picker: 'week',
			placeholder: '商品名称',
		},
	},
];
const BrandManagePage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<BrandTable />
		</div>
	);
};

export default BrandManagePage;

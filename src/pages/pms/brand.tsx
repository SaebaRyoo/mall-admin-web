import * as React from 'react';
import BrandTable from './components/brandTable';
import FieldsSearch, { FieldType } from '@src/components/Search';
import Operate from '@src/components/operate';

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
			<Operate
				conditions={[
					{
						value: 1,
						name: '商品上架',
					},
					{
						value: 2,
						name: '商品下架',
					},
				]}
			/>
			<BrandTable />
		</div>
	);
};

export default BrandManagePage;

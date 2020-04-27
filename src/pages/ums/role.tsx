// 角色
import * as React from 'react';
import RoleTable from './components/roleTable';
import FieldsSearch, { FieldType } from '@src/components/Search';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '输入搜索',
		name: 'name',
		props: {
			placeholder: '角色名称',
		},
	},
];

const MenuPage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<RoleTable />
		</div>
	);
};

export default MenuPage;

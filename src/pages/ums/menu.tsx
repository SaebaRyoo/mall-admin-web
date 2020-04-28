// 菜单
import * as React from 'react';
import MenuTable from './components/menuTable';
import Operate from '@src/components/operate';

const MenuPage = () => {
	return (
		<div>
			<Operate />
			<MenuTable />
		</div>
	);
};

export default MenuPage;

// 秒杀
import * as React from 'react';
import FlashTable from './components/flashTable';
import FieldsSearch, { FieldType } from '@src/components/Search';
import Operate from '@src/components/operate';
import { Button } from 'antd';

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
			<Operate actionBtns={<Button>秒杀时间段列表</Button>} />
			<FlashTable />
		</div>
	);
};

export default FlashPage;

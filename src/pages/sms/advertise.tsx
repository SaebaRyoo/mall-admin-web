// 广告
import * as React from 'react';
import AdvertiseTable from './components/advertiseTable';
import FieldsSearch, { FieldType } from '@src/components/Search';

const fieldsConfig: FieldType[] = [
	{
		type: 'input',
		label: '广告名称',
		name: 'name',
		props: {
			placeholder: '广告名称',
		},
	},
	{
		type: 'select',
		label: '广告位置',
		name: 'status',
		options: [
			{
				id: 1,
				value: '1',
				name: 'PC首页轮播',
			},
			{
				id: 2,
				value: '2',
				name: 'APP首页轮播',
			},
		],
		props: {
			placeholder: '全部',
		},
	},
	{
		type: 'datepicker',
		label: '到期时间',
		name: 'expireTime',
		props: {
			placeholder: '请选择时间',
		},
	},
];

const SubjectPage = () => {
	const onSearch = () => {};
	return (
		<div>
			<FieldsSearch data={fieldsConfig} onSearch={onSearch} />
			<AdvertiseTable />
		</div>
	);
};

export default SubjectPage;

// 广告
import * as React from 'react';
import AdvertiseTable from './components/advertiseTable';
import FieldsSearch, { FieldType } from '@src/components/Search';
import Operate from '@src/components/operate';

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
			<AdvertiseTable />
		</div>
	);
};

export default SubjectPage;

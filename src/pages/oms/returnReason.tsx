import * as React from 'react';
import ReasonTable from './components/reasonTable';
import Operate from '@src/components/operate';

const ReturnReasonPage = () => {
	return (
		<div>
			<ReasonTable />
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
		</div>
	);
};

export default ReturnReasonPage;

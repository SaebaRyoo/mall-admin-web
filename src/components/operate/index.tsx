import * as React from 'react';
import { FileTextOutlined } from '@ant-design/icons';
import { Button, Select } from 'antd';
import s from './index.less';

const Option = Select.Option;

type Condition = {
	value: any;
	name: string;
};

const OptionComp = ({ value, name }: Condition) => {
	return <Option value={value}>{name}</Option>;
};

const Operate = ({
	title = '数据列表',
	conditions,
	actionBtns,
	handleClick,
}: {
	title?: string | React.ReactElement;
	conditions?: Condition[] | undefined | null;
	actionBtns?: React.ReactElement;
	handleClick?: () => void;
}) => {
	const handleAdd = () => {
		if (handleClick) {
			handleClick();
		}
	};
	return (
		<div className={s.container}>
			<div>
				<FileTextOutlined />
				&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div>
				{conditions && (
					<React.Fragment>
						<Select style={{ width: 200 }}>
							{conditions && conditions.map(OptionComp)}
						</Select>
						<Button>确定</Button>
					</React.Fragment>
				)}
			</div>
			<div className={s.actions}>
				{actionBtns ? actionBtns : <Button onClick={handleAdd}>添加</Button>}
			</div>
		</div>
	);
};

export default Operate;

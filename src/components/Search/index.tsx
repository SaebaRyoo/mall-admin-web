import * as React from 'react';
import {
	Form,
	Row,
	Col,
	Input,
	Button,
	Cascader,
	DatePicker,
	Select,
} from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import s from './index.less';

const { RangePicker } = DatePicker;
const { Option } = Select;

export type FieldType = {
	span?: number; // 占一行的多少份
	type: string;
	props?: object;
	options?: any;
	label: string;
	name: string;
	required?: boolean;
	message?: string;
};

type PropsType = {
	data?: any;
	onSearch?: (values: any) => void;
	onReset?: () => void;
};

const generateOption = (
	item: { id: any; value: React.ReactText; name: React.ReactNode },
	i: any
) => (
	<Option key={item.id || i} value={item.value}>
		{item.name}
	</Option>
);

const mapSearchItem = (item: any): any => {
	const Comp: any = {
		input: <Input allowClear {...item.props} />,
		cascader: <Cascader allowClear {...item.props} />,
		datepicker: <DatePicker allowClear {...item.props} />,
		rangepicker: <RangePicker allowClear {...item.props} />,
		select: (
			<Select allowClear {...item.props}>
				{item.options && item.options.map(generateOption)}
			</Select>
		),
	};
	return Comp[item.type];
};

const SearchFieldsComponent = ({ data, onSearch, onReset }: PropsType) => {
	const [form] = Form.useForm();

	const getFields = () => {
		return (
			data &&
			!!data.length &&
			data.map((item: FieldType) => {
				const Comp = mapSearchItem(item);
				return (
					<Col span={8} key={item.name}>
						<Form.Item
							name={item.name}
							label={item.label}
							rules={[
								{
									required: !!item.required,
									message: item.message,
								},
							]}
						>
							{Comp ? Comp : <Input />}
						</Form.Item>
					</Col>
				);
			})
		);
	};

	const onFinish = (values: any) => {
		if (onSearch) {
			onSearch(values);
		}
	};

	const handleReset = () => {
		form.resetFields();
		if (onReset) {
			onReset();
		}
	};

	return (
		<Form
			form={form}
			name="advanced_search"
			className={s['ant-advanced-search-form']}
			onFinish={onFinish}
		>
			<Row gutter={24}>
				<Col span={24} className={s['fields-title']}>
					<SearchOutlined />
					筛选搜索
				</Col>
			</Row>
			<Row gutter={24}>{getFields()}</Row>
			<Row>
				<Col span={24} className={s['btn-wrap']}>
					<Button onClick={handleReset}>重置</Button>
					<Button className={s['search-btn']} type="primary" htmlType="submit">
						搜索
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default SearchFieldsComponent;

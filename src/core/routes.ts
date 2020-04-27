import asyncHOC from '@src/utils/asyncHOC';
import Layout from '@src/components/layout';
import App from '@src/pages/index';
const Home = asyncHOC(() => import('@src/pages/home'));
const Login = asyncHOC(() => import('@src/pages/login'));
// 商品页面
const ProductPage = asyncHOC(() => import('@src/pages/pms/product'));
const AddProductPage = asyncHOC(() => import('@src/pages/pms/addProduct'));
const ProductCatePage = asyncHOC(() => import('@src/pages/pms/productCate'));
const ProductAttrPage = asyncHOC(() => import('@src/pages/pms/productAttr'));
const BrandManagePage = asyncHOC(() => import('@src/pages/pms/brand'));
// 订单
const OrderPage = asyncHOC(() => import('@src/pages/oms/order'));
const OrderDetailPage = asyncHOC(() => import('@src/pages/oms/orderDetail'));
const OrderSettingPage = asyncHOC(() => import('@src/pages/oms/orderSetting'));
const ReturnApplyPage = asyncHOC(() => import('@src/pages/oms/returnApply'));
const ReturnReasonPage = asyncHOC(() => import('@src/pages/oms/returnReason'));
// 营销
const FlashPage = asyncHOC(() => import('@src/pages/sms/flash'));
const CouponPage = asyncHOC(() => import('@src/pages/sms/coupon'));
const BrandRecommendPage = asyncHOC(() => import('@src/pages/sms/brand'));
const NewProductPage = asyncHOC(() => import('@src/pages/sms/new'));
const HotPage = asyncHOC(() => import('@src/pages/sms/hot'));
const SubjectPage = asyncHOC(() => import('@src/pages/sms/subject'));
const AdvertisePage = asyncHOC(() => import('@src/pages/sms/advertise'));
// 权限
const UserPage = asyncHOC(() => import('@src/pages/ums/user'));
const RolePage = asyncHOC(() => import('@src/pages/ums/role'));
const MenuPage = asyncHOC(() => import('@src/pages/ums/menu'));
const ResourcePage = asyncHOC(() => import('@src/pages/ums/resource'));

export interface I_Route {
	component?: React.ReactElement | React.FC | React.ReactNode;
	path: string;
	exact?: boolean;
	routes?: I_Route[];
	redirect?: string;
	name?: string;
	hide?: boolean;
}

const PMS = '商品';
const OMS = '订单';
const SMS = '营销';
const UMS = '权限';

export const layoutRotutes: I_Route[] = [
	{
		path: '/layout/home',
		component: Home,
		name: `首页`,
	},
	{
		path: '/layout/pms',
		redirect: '/layout/pms/product',
		name: PMS,
		routes: [
			{
				path: '/layout/pms/product',
				component: ProductPage,
				name: `${PMS}/商品列表`,
			},
			{
				path: '/layout/pms/addProduct',
				component: AddProductPage,
				name: `${PMS}/添加商品`,
			},
			{
				path: '/layout/pms/productCate',
				component: ProductCatePage,
				name: `${PMS}/商品分类`,
			},
			{
				path: '/layout/pms/productAttr',
				component: ProductAttrPage,
				name: `${PMS}/商品类型`,
			},
			{
				path: '/layout/pms/brand',
				component: BrandManagePage,
				name: `${PMS}/品牌管理`,
			},
		],
	},
	{
		path: '/layout/oms',
		redirect: '/layout/oms/order',
		name: OMS,
		routes: [
			{
				path: '/layout/oms/order',
				component: OrderPage,
				name: `${OMS}/订单列表`,
			},
			{
				path: '/layout/oms/orderDetail',
				component: OrderDetailPage,
				hide: true,
				name: `${OMS}/订单详情`,
			},
			{
				path: '/layout/oms/orderSetting',
				component: OrderSettingPage,
				name: `${OMS}/订单设置`,
			},
			{
				path: '/layout/oms/returnApply',
				component: ReturnApplyPage,
				name: `${OMS}/退货申请处理`,
			},
			{
				path: '/layout/oms/returnReason',
				component: ReturnReasonPage,
				name: `${OMS}/退货原因设置`,
			},
		],
	},
	{
		path: '/layout/sms',
		redirect: '/layout/sms/flash',
		name: SMS,
		routes: [
			{
				path: '/layout/sms/flash',
				component: FlashPage,
				name: `${SMS}/秒杀活动列表`,
			},
			{
				path: '/layout/sms/coupon',
				component: CouponPage,
				name: `${SMS}/优惠券列表`,
			},
			{
				path: '/layout/sms/brand',
				component: BrandRecommendPage,
				name: `${SMS}/品牌推荐`,
			},
			{
				path: '/layout/sms/new',
				component: NewProductPage,
				name: `${SMS}/新品推荐`,
			},
			{
				path: '/layout/sms/hot',
				component: HotPage,
				name: `${SMS}/人气推荐`,
			},
			{
				path: '/layout/sms/subject',
				component: SubjectPage,
				name: `${SMS}/专题推荐`,
			},
			{
				path: '/layout/sms/advertise',
				component: AdvertisePage,
				name: `${SMS}/广告列表`,
			},
		],
	},
	{
		path: '/layout/ums',
		redirect: '/layout/ums/user',
		name: UMS,
		routes: [
			{
				path: '/layout/ums/user',
				component: UserPage,
				name: `${UMS}/用户列表`,
			},
			{
				path: '/layout/ums/role',
				component: RolePage,
				name: `${UMS}/角色列表`,
			},
			{
				path: '/layout/ums/menu',
				component: MenuPage,
				name: `${UMS}/菜单列表`,
			},
			{
				path: '/layout/ums/resource',
				component: ResourcePage,
				name: `${UMS}/资源列表`,
			},
		],
	},
];

export const routes: I_Route[] = [
	{
		path: '/',
		redirect: '/login',
		component: App,
		routes: [
			{
				path: '/login',
				component: Login,
			},
			{
				path: '/layout',
				component: Layout,
				redirect: '/layout/home',
				routes: layoutRotutes,
			},
		],
	},
];

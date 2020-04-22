import Layout from '@src/components/layout';
import App from '@src/pages/index';
import Home from '@src/pages/home';
import Login from '@src/pages/login';
import ProductPage from '@src/pages/pms/product';
import AddProductPage from '@src/pages/pms/addProduct';
import ProductCatePage from '@src/pages/pms/productCate';
import ProductAttrPage from '@src/pages/pms/productAttr';
import BrandManagePage from '@src/pages/pms/brand';

export interface Route {
  component?: React.ReactElement | React.FC | React.ReactNode;
  path: string;
  exact?: boolean;
  routes?: Route[];
  redirect?: string;
  name?: string;
}

export const layoutRotutes: Route[] = [
  {
    path: '/layout/home',
    component: Home,
    name: `首页`,
  },
  {
    path: '/layout/pms',
    redirect: '/layout/pms/product',
    name: '商品',
    routes: [
      {
        path: '/layout/pms/product',
        component: ProductPage,
        name: `商品列表`,
      },
      {
        path: '/layout/pms/addProduct',
        component: AddProductPage,
        name: `添加商品`,
      },
      {
        path: '/layout/pms/productCate',
        component: ProductCatePage,
        name: `商品分类`,
      },
      {
        path: '/layout/pms/productAttr',
        component: ProductAttrPage,
        name: `商品类型`,
      },
      {
        path: '/layout/pms/brand',
        component: BrandManagePage,
        name: `品牌管理`,
      },
    ],
  },
];

export const routes: Route[] = [
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

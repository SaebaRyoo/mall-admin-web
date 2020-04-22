import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { layoutRotutes } from '@src/core/routes';
import { useHistory } from 'react-router-dom';
import s from './index.less';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const MenuComponent = (routes: any[], history: any) => {
  return routes.map((route) => {
    if (route.routes) {
      return (
        <SubMenu
          key={route.path}
          title={
            <span>
              <UserOutlined />
              {route.name}
            </span>
          }
        >
          {MenuComponent(route.routes, history)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={route.path} onClick={() => history.push(route.path)}>
        <LaptopOutlined />
        {route.name}
      </Menu.Item>
    );
  });
};

const LayoutComponent = (props: { children: React.ReactNode }) => {
  const history = useHistory();
  return (
    <Layout className={s.layout}>
      <Sider width={200} className={s['site-layout-background']}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {MenuComponent(layoutRotutes, history)}
        </Menu>
      </Sider>
      <Layout>
        <Breadcrumb className={s.breadcrumb}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content className={s.content}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;

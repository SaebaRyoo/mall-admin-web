import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { layoutRotutes, I_Route } from '@src/core/routes';
import { useHistory } from 'react-router-dom';
import s from './index.less';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const breadMap: any = {
  pms: '商品',
};

const MenuComponent = (routes: any[], handleClick: any) => {
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
          {MenuComponent(route.routes, handleClick)}
        </SubMenu>
      );
    }
    return (
      <Menu.Item key={route.path} onClick={() => handleClick(route)}>
        <LaptopOutlined />
        {route.name}
      </Menu.Item>
    );
  });
};

const LayoutComponent = (props: { children: React.ReactNode }) => {
  const [breads, setBread] = useState<any>([]);
  const history = useHistory();

  const handleClick = (route: I_Route) => {
    history.push(route.path);
    let key = location.pathname.split('/')[2];
    setBread([breadMap[key], route.name]);
  };

  const BreadCrumbItem = useMemo(() => {
    return breads.map((bread: string, index: number) => {
      return <Breadcrumb.Item key={index}>{bread}</Breadcrumb.Item>;
    });
  }, [breads]);

  useEffect(() => {
    setBread(['首页']);
  }, []);

  return (
    <Layout className={s.layout}>
      <Sider width={200} className={s['site-layout-background']}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          {MenuComponent(layoutRotutes, handleClick)}
        </Menu>
      </Sider>
      <Layout>
        <Breadcrumb className={s.breadcrumb}>{BreadCrumbItem}</Breadcrumb>
        <Content className={s.content}>{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;

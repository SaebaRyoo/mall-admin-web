import React from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import { routes } from '@src/core/routes';

const RouteWithSub = (routesData: any[]) =>
  routesData.map((route, key) => {
    if (!route.routes) {
      return (
        <Route
          key={key}
          path={route.path}
          exact={route.exact}
          render={(props) => <route.component {...props} />}
        />
      );
    }
    return (
      <Route
        key={key}
        path={route.path}
        exact={route.exact}
        render={(props) => {
          if (route.component) {
            return (
              <route.component {...props}>
                <Switch>
                  {/* 重定向, location.pathname === route.path 防止在刷新别的界面时返回到首页 */}
                  {route.redirect && location.pathname === route.path ? (
                    <Redirect key={key} from={route.path} to={route.redirect} />
                  ) : null}
                  {RouteWithSub(route.routes)}
                </Switch>
              </route.component>
            );
          } else {
            return (
              <Switch>
                {/* 重定向, location.pathname === route.path 防止在刷新别的界面时返回到首页 */}
                {route.redirect && location.pathname === route.path ? (
                  <Redirect key={key} from={route.path} to={route.redirect} />
                ) : null}
                {RouteWithSub(route.routes)}
              </Switch>
            );
          }
        }}
      />
    );
  });

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>{RouteWithSub(routes)}</Switch>
    </BrowserRouter>
  );
}

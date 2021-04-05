import { lazy, Suspense } from 'react';
import { Switch, RouteProps } from 'react-router-dom';
import Loading from 'components/Loading';
import AppLayout from 'components/AppLayout';
import PrivateRoute from 'components/PrivateRoute';

type RouteWithKeyProps = RouteProps & {
  id: string;
};

const routes: RouteWithKeyProps[] = [
  {
    id: 'home',
    path: '/',
    component: lazy(() => import('containers/Home')),
  },
  {
    id: 'home',
    path: '/as',
    exact: true,
    component: lazy(() => import('containers/Home')),
  },
];

export default function AppRouter(): React.FunctionComponentElement<{}> {
  return (
    <AppLayout>
      <Suspense fallback={<Loading />}>
        <Switch>
          {routes.map(route => (
            <PrivateRoute key={route.id} {...route} />
          ))}
        </Switch>
      </Suspense>
    </AppLayout>
  );
}

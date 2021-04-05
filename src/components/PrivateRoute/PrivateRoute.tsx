import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useAuth } from 'hooks';

function PrivateRoute({ component: Component, ...rest }: RouteProps) {
  const token = useAuth();

  if (!Component) return null;

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

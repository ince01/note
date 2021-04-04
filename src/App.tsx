import { Suspense, lazy } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { ApolloProvider } from '@apollo/client';
import AppLocales, { LocaleType, LangType } from 'translations';
import AppLayout from 'components/AppLayout';
import initApolloClient from './apolloConfig';

const SignIn = lazy(() => import('./containers/SignIn'));
const Home = lazy(() => import('./containers/Home'));

const apoloClient = initApolloClient();

function App() {
  const locale = (localStorage.getItem('locale') || 'en-US') as LocaleType;

  const lang = AppLocales[locale] as LangType;

  return (
    <ApolloProvider client={apoloClient}>
      <IntlProvider locale={locale} messages={lang.messages}>
        <Router>
          <Suspense fallback={<Spin />}>
            <Switch>
              <Route path="/sign-in" exact component={SignIn} />
              <Route path="/">
                <AppLayout>
                  <Switch>
                    <Route path="/home" component={Home} />
                  </Switch>
                </AppLayout>
              </Route>
            </Switch>
          </Suspense>
        </Router>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default App;

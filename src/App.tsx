import { Suspense, lazy } from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Spin } from 'antd';
import { ApolloProvider } from '@apollo/client';
import AppLocales, { LocaleType, LangType } from 'translations';
import initApolloClient from 'configs/apollo.conf';
import Routes from './Routes';

const SignIn = lazy(() => import('./containers/SignIn'));

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
              <Routes />
            </Switch>
          </Suspense>
        </Router>
      </IntlProvider>
    </ApolloProvider>
  );
}

export default App;

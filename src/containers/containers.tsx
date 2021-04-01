import { IntlProvider, FormattedMessage } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout, Avatar, Button, Tooltip, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AppLocales, { LocaleType, LangType } from 'translations';
import NoteEditing from 'components/NoteEditing';

const { Header, Sider, Content } = Layout;

const siderWidth = 54;
const siderMenuWidth = 300;

function App() {
  const locale = (localStorage.getItem('locale') || 'en-US') as LocaleType;

  const lang = AppLocales[locale] as LangType;

  return (
    <IntlProvider locale={locale} messages={lang.messages}>
      <Router>
        <Switch>
          <Route path="/">
            <div className="min-h-screen bg-gray-50">
              <Layout hasSider>
                <Sider
                  className="overflow-hidden h-screen fixed left-0 bg-gray-200"
                  width={siderWidth}
                >
                  <div className="flex flex-col justify-between items-center h-full py-4">
                    <div className="text-black">
                      <Typography.Title underline className="font-cursive">
                        n
                      </Typography.Title>
                    </div>
                    <Tooltip
                      title={<FormattedMessage defaultMessage="New note" />}
                    >
                      <Button
                        className="flex justify-center items-center"
                        shape="circle"
                        icon={<PlusOutlined />}
                      />
                    </Tooltip>
                  </div>
                </Sider>
                <Sider
                  width={siderMenuWidth}
                  className="overflow-hidden h-screen fixed left-0 border bg-gray-50 border-gray-200 border-solid"
                  style={{ left: siderWidth }}
                >
                  Sider menu
                </Sider>
                <Layout style={{ marginLeft: siderMenuWidth + siderWidth }}>
                  <Header className="px-4 h-12 flex flex-row justify-between items-center bg-gray-50 border border-l-0 border-gray-200 border-solid">
                    <div />
                    <Avatar />
                  </Header>
                  <Content id="main" className="bg-gray-50">
                    <div className="container mx-auto">
                      <div className="p-4 grid grid-cols-1 gap-6 justify-items-center">
                        <NoteEditing />
                        <NoteEditing />
                      </div>
                    </div>
                  </Content>
                </Layout>
              </Layout>
            </div>
          </Route>
        </Switch>
      </Router>
    </IntlProvider>
  );
}

export default App;

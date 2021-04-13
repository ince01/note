import { Layout, Avatar, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import AppSider from './AppSider';
import SiderMenu from './SiderMenu';

const { Header, Content } = Layout;

export const siderWidth = 54;
export const siderMenuWidth = 300;
export const headerHeigth = 48;

export type AppLayoutProps = {
  children: JSX.Element;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <Layout className="min-h-screen bg-gray-50" hasSider>
      <AppSider width={siderWidth} />
      <SiderMenu width={siderMenuWidth} left={siderWidth} />
      <Layout style={{ marginLeft: siderMenuWidth + siderWidth }}>
        <Header
          style={{ width: `calc(100% - ${siderMenuWidth + siderWidth}px)` }}
          className="fixed z-10 px-4 h-12 flex flex-row justify-between items-center bg-gray-50 border border-l-0 border-gray-200 border-solid"
        >
          {/* //TODO: implement breadcrumb */}
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/ahihi">
                <HomeOutlined />
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/ahuhu">
                <UserOutlined />
                <span>Application List</span>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>Application</Breadcrumb.Item>
          </Breadcrumb>
          <Avatar />
        </Header>
        <Content className="bg-gray-50" style={{ marginTop: headerHeigth }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;

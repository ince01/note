import { Layout, Avatar, Button, Tooltip, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

const { Header, Sider, Content } = Layout;

export const siderWidth = 54;
export const siderMenuWidth = 300;
export const headerHeigth = 48;

export type AppLayoutProps = {
  children: JSX.Element;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout hasSider>
        <Sider
          className="overflow-hidden h-screen fixed left-0 bg-gray-200"
          width={siderWidth}
        >
          <div className="flex flex-col justify-between items-center h-full py-4">
            <div className="text-black">
              <Typography.Title
                underline
                className="font-cursive"
                type="danger"
              >
                n
              </Typography.Title>
            </div>
            <Tooltip title={<FormattedMessage defaultMessage="New note" />}>
              <Button
                className="flex justify-center items-center text-gray-400"
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
          <Header
            style={{ width: `calc(100% - ${siderMenuWidth + siderWidth}px)` }}
            className="fixed z-10 px-4 h-12 flex flex-row justify-between items-center bg-gray-50 border border-l-0 border-gray-200 border-solid"
          >
            <div />
            <Avatar />
          </Header>
          <Content className="bg-gray-50" style={{ marginTop: headerHeigth }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default AppLayout;

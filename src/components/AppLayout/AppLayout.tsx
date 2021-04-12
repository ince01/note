import {
  Layout,
  Avatar,
  Button,
  Tooltip,
  Typography,
  Breadcrumb,
  Divider,
  Tree,
} from 'antd';
import { Link } from 'react-router-dom';
import {
  PlusOutlined,
  HomeOutlined,
  UserOutlined,
  DownOutlined,
  SettingOutlined,
  BulbOutlined,
} from '@ant-design/icons';
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
          <div className="flex flex-col px-1 pt-3 pb-2">
            <Button
              className="mb-2 bg-transparent"
              shape="round"
              size="middle"
              block
              icon={<HomeOutlined />}
            >
              Home
            </Button>
            <Button
              className="mb-2 bg-transparent"
              shape="round"
              size="middle"
              block
              icon={<BulbOutlined />}
            >
              Today
            </Button>
            <Button
              className="bg-transparent"
              shape="round"
              size="middle"
              block
              icon={<SettingOutlined />}
            >
              Settings
            </Button>
          </div>
          <Divider className="my-3" />
          <Tree
            className="bg-transparent px-4"
            switcherIcon={<DownOutlined />}
            blockNode
            treeData={[
              {
                title: (
                  <Typography.Text ellipsis>
                    Anasdasdasd ad as as da da dasd asd asdadasd t Design
                  </Typography.Text>
                ),
                key: '0-0-0',
                children: [
                  {
                    title: (
                      <Typography.Text ellipsis>
                        Anasdasdasd ad as as da da dasd asd asdadasd t Design
                      </Typography.Text>
                    ),
                    key: '0-0-0-0',
                  },
                  {
                    title: 'leaf',
                    key: '0-0-0-1',
                  },
                  {
                    title: 'leaf',
                    key: '0-0-0-2',
                  },
                ],
              },
              {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-1-0',
                  },
                ],
              },
              {
                title: 'parent 1-2',
                key: '0-0-2',
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-2-0',
                  },
                  {
                    title: 'leaf',
                    key: '0-0-2-1',
                  },
                ],
              },
            ]}
          />
        </Sider>
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
    </div>
  );
}

export default AppLayout;

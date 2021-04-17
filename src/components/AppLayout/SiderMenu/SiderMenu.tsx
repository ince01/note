import { Layout, Button, Divider, Tree } from 'antd';
import {
  HomeOutlined,
  DownOutlined,
  SettingOutlined,
  BulbOutlined,
} from '@ant-design/icons';
import { memo } from 'react';
import { useSiderMenu } from './SiderMenuContext';

export interface SiderMenuProps {
  width?: string | number;
  left?: string | number;
}

const SiderMenu: React.FC<SiderMenuProps> = ({ width, left }) => {
  const { treeData, activeNode, onNodeSelect } = useSiderMenu();

  return (
    <Layout.Sider
      className="overflow-hidden h-screen fixed left-0 border bg-gray-50 border-gray-200 border-solid"
      width={width}
      style={{ left }}
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
        selectedKeys={activeNode}
        onSelect={onNodeSelect}
        treeData={treeData}
      />
    </Layout.Sider>
  );
};

export default memo(SiderMenu);

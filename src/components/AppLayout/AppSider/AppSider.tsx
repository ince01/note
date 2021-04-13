import { Layout, Button, Tooltip, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';
import { memo } from 'react';

type AppSiderProps = {
  width?: string | number;
};

const AppSider: React.FC<AppSiderProps> = ({ width }) => {
  return (
    <Layout.Sider
      className="overflow-hidden h-screen fixed left-0 bg-gray-200"
      width={width}
    >
      <div className="flex flex-col justify-between items-center h-full py-4">
        <div className="text-black">
          <Typography.Title underline className="font-cursive" type="danger">
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
    </Layout.Sider>
  );
};

export default memo(AppSider);

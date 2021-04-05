import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const Loading: React.FC<{}> = () => (
  <div className="p-4 text-center">
    <Spin indicator={<LoadingOutlined spin />} tip="Loading..." />
  </div>
);

export default Loading;

import { FunctionComponent } from 'react';
import { Button, Divider } from 'antd';
import {
  HeartOutlined,
  CommentOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import { FormattedMessage } from 'react-intl';

const Key = ({ keyName }: { keyName: string }): JSX.Element => (
  <span
    className="text-xs inline  border-gray-300 border-solid border bg-gray-100 m-1 rounded-md tran"
    style={{ padding: '1px 3px' }}
  >
    {keyName}
  </span>
);

export type NoteProps = {
  editMode: boolean;
  loading?: boolean;
  onCancelBtnClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
};

const Note: FunctionComponent<NoteProps> = props => {
  const { editMode, onCancelBtnClick = () => {}, loading = false } = props;

  return editMode ? (
    <>
      <Divider className="my-3" />

      <div className="flex flex-row items-center justify-between">
        <div>
          <Button
            className="border-transparent shadow-none text-gray-400"
            size="small"
            shape="round"
            disabled={loading}
            danger
            onClick={onCancelBtnClick}
          >
            <p>
              <FormattedMessage defaultMessage="Cancel" />
              &nbsp;
              <Key keyName="Hold Esc" />
            </p>
          </Button>
        </div>
        <div>
          <Button
            loading={loading}
            htmlType="submit"
            size="small"
            shape="round"
            className="border-transparent shadow-none text-gray-400"
          >
            <span>
              <FormattedMessage defaultMessage="Finish" />
              &nbsp;
              <Key keyName="⌘" />
              +
              <Key keyName="Enter" />
            </span>
          </Button>
        </div>
      </div>
    </>
  ) : (
    <div className="flex flex-row items-center justify-start">
      <div className="px-1">
        <Button
          className="text-gray-400 border-none shadow-none "
          size="middle"
          shape="circle"
          icon={<HeartOutlined />}
        />
      </div>
      <div className="px-1">
        <Button
          className="text-gray-400 border-none shadow-none "
          size="middle"
          shape="circle"
          icon={<CommentOutlined />}
        />
      </div>
      <div className="px-1">
        <Button
          className="text-gray-400 border-none shadow-none "
          size="middle"
          shape="circle"
          icon={<ShareAltOutlined />}
        />
      </div>
    </div>
  );
};

export default Note;

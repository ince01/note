import { Button, Tooltip, Input } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Controller, Control } from 'react-hook-form';
import { useIntl } from 'react-intl';

export type HeaderProps = {
  control: Control;
  editMode: boolean;
  onBtnClick?: React.MouseEventHandler;
};

const Header: React.FC<HeaderProps> = ({ control, onBtnClick, editMode }) => {
  const intl = useIntl();

  return (
    <div className="flex flex-row">
      <div className="flex-grow">
        <div className="flex flex-row items-center justify-start">
          <div className="flex-grow-0">
            <Controller
              name="icon"
              control={control}
              render={({ value }) => (
                <span
                  className="text-2xl pl-2"
                  aria-label="note-icon"
                  role="img"
                >
                  {value ?? '📝'}
                </span>
              )}
            />
          </div>
          <div className="flex-grow">
            <Controller
              name="title"
              control={control}
              render={({ onChange, value }) => (
                <Input
                  width="100%"
                  value={value}
                  readOnly={!editMode}
                  onChange={onChange}
                  size="large"
                  className="text-2xl font-semibold"
                  bordered={false}
                  spellCheck="false"
                  placeholder={intl.formatMessage({
                    defaultMessage: 'Untitled',
                  })}
                />
              )}
            />
          </div>
        </div>
      </div>
      <div className="flex-grow-0">
        <Tooltip title={intl.formatMessage({ defaultMessage: 'Edit' })}>
          <Button
            className="text-gray-400"
            onClick={onBtnClick}
            size="small"
            shape="circle"
            icon={editMode ? <PlusOutlined /> : <EditOutlined />}
          />
        </Tooltip>
      </div>
    </div>
  );
};

export default Header;

import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { useIntl, defineMessage } from 'react-intl';
import { Controller, Control } from 'react-hook-form';

export type TitleProps = {
  editMode: boolean;
  control: Control;
};

const placeholderMess = defineMessage({
  defaultMessage: 'Untitled',
});

const Title: FunctionComponent<TitleProps> = props => {
  const { editMode, control } = props;

  const intl = useIntl();

  return (
    <div className="flex flex-row items-center justify-start">
      <div className="flex-grow-0">
        <Controller
          name="icon"
          control={control}
          render={({ value }) => (
            <span className="text-2xl pl-2" role="img" aria-label="note-icon">
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
              placeholder={intl.formatMessage(placeholderMess)}
            />
          )}
        />
      </div>
    </div>
  );
};

export default Title;

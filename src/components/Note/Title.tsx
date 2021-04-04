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
    <Controller
      name="title"
      control={control}
      render={({ onChange, value }) => (
        <Input
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
  );
};

export default Title;

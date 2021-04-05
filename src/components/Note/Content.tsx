import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { Controller, Control } from 'react-hook-form';
import { useIntl, defineMessage } from 'react-intl';
import ReactMarkdown from 'react-markdown';

export type ContentProps = {
  editMode: boolean;
  control: Control;
};

const placeholderMess = defineMessage({
  defaultMessage: "Type notes or ' / ' for additional elements...",
});

const Content: FunctionComponent<ContentProps> = props => {
  const { editMode, control } = props;

  const intl = useIntl();

  return (
    <Controller
      name="content"
      control={control}
      render={({ onChange, value }) =>
        editMode ? (
          <Input.TextArea
            value={value}
            onChange={onChange}
            bordered={false}
            spellCheck="false"
            showCount={{
              formatter: ({ count }) =>
                `${count} ${intl.formatMessage({
                  defaultMessage: 'characters',
                })}`,
            }}
            autoSize={{ minRows: 4 }}
            placeholder={intl.formatMessage(placeholderMess)}
          />
        ) : (
          <div className="py-1 px-3">
            <ReactMarkdown className="unreset">{value}</ReactMarkdown>
          </div>
        )
      }
    />
  );
};

export default Content;

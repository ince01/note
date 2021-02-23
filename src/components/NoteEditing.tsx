import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { useIntl } from 'react-intl';

export type NoteEdittingProps = {};

const NoteEditting: FunctionComponent<NoteEdittingProps> = () => {
  const intl = useIntl();

  return (
    <div className="p-2 max-w-2xl w-full rounded-lg border bg-white">
      <div className="flex flex-row">
        <Input
          className="text-xl"
          bordered={false}
          spellCheck="false"
          placeholder={intl.formatMessage({
            defaultMessage: 'Untitled',
          })}
        />
      </div>

      <Input.TextArea
        bordered={false}
        spellCheck="false"
        showCount
        autoSize={{ minRows: 4 }}
        placeholder={intl.formatMessage({
          defaultMessage: "Type notes or ' / ' for additional elements...",
        })}
      />
    </div>
  );
};

export default NoteEditting;

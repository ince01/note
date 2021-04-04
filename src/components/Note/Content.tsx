import { FunctionComponent } from 'react';
import { Input } from 'antd';
import { useIntl, defineMessage } from 'react-intl';
import marked from 'marked';

export type ContentProps = {
  editMode: boolean;
  value?: string;
};

const placeholderMess = defineMessage({
  defaultMessage: "Type notes or ' / ' for additional elements...",
});

const Content: FunctionComponent<ContentProps> = props => {
  const { editMode, value } = props;

  const intl = useIntl();

  return editMode ? (
    <Input.TextArea
      defaultValue={value}
      bordered={false}
      spellCheck="false"
      showCount
      autoSize={{ minRows: 4 }}
      placeholder={intl.formatMessage(placeholderMess)}
    />
  ) : (
    <div
      className="py-1 px-3"
      dangerouslySetInnerHTML={{ __html: marked(value ?? '') }}
    />
  );
};

export default Content;

import { FunctionComponent, useState } from 'react';
import { Button, Tooltip } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';

import Title from './Title';
import Content from './Content';
import Footer from './Footer';

export type NoteProps = {
  content?: string;
  title?: string;
};

export interface INoteForm {
  title: string;
  content: string;
}

const Note: FunctionComponent<NoteProps> = props => {
  const { content, title } = props;

  const intl = useIntl();

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => setEditMode(prevState => !prevState);

  const { control, handleSubmit } = useForm<INoteForm>({
    defaultValues: {
      title,
      content,
    },
  });

  const submitHandler = (data: INoteForm) => {
    console.log('🚀 ~ file: Note.tsx ~ line 37 ~ submitHandler ~ data', data);
  };

  return (
    <div className="py-3 px-3 max-w-2xl w-full rounded-lg border bg-white">
      <form onSubmit={handleSubmit(submitHandler)}>
        <div className="flex flex-row ">
          <Title control={control} editMode={editMode} />

          <Tooltip title={intl.formatMessage({ defaultMessage: 'Edit' })}>
            <Button
              className="text-gray-400"
              onClick={toggleEditMode}
              size="small"
              shape="circle"
              icon={editMode ? <PlusOutlined /> : <EditOutlined />}
            />
          </Tooltip>
        </div>
        <Content editMode={editMode} value={content} />
        <Footer editMode={editMode} onCancelBtnClick={toggleEditMode} />
      </form>
    </div>
  );
};

export default Note;

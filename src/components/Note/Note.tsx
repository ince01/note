import { FunctionComponent, useState } from 'react';
import { Button, Tooltip, notification } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useUpdateNoteMutation } from 'generated/graphql';

import Title from './Title';
import Content from './Content';
import Footer from './Footer';

export type NoteProps = {
  noteId: string;
  content?: string;
  title?: string;
};

export interface INoteForm {
  title: string;
  content: string;
}

const Note: FunctionComponent<NoteProps> = props => {
  const { noteId, content, title } = props;

  const intl = useIntl();

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode = () => setEditMode(prevState => !prevState);

  const { control, handleSubmit, reset } = useForm<INoteForm>({
    defaultValues: { title, content },
  });

  const [updateNoteMutation, { loading }] = useUpdateNoteMutation();

  const onCancel = (): void => {
    reset();
    toggleEditMode();
  };

  const submitHandler = async (data: INoteForm) => {
    try {
      await updateNoteMutation({
        variables: {
          note: {
            id: noteId,
            title: data.title,
            content: data.content,
          },
        },
      });

      toggleEditMode();

      notification.success({
        message: intl.formatMessage({
          defaultMessage: 'Update note successfully',
        }),
        placement: 'bottomRight',
      });
    } catch (error) {
      notification.error({
        message: error.message,
        placement: 'bottomRight',
      });
    }
  };

  return (
    <div className="py-3 px-3 max-w-2xl w-full rounded-lg border bg-white">
      <form id={`note-form-${noteId}`} onSubmit={handleSubmit(submitHandler)}>
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
        <Content editMode={editMode} control={control} />
        <Footer
          loading={loading}
          editMode={editMode}
          onCancelBtnClick={onCancel}
        />
      </form>
    </div>
  );
};

export default Note;

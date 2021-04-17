import { FunctionComponent, useState } from 'react';
import { notification } from 'antd';
import { useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';
import { useUpdateNoteMutation, Note as NoteType } from 'generated/graphql';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

export type NoteProps = {
  note: Pick<NoteType, 'id' | 'title' | 'icon' | 'content'>;
};

export interface INoteForm {
  title: string;
  icon: string;
  content: string;
}

const Note: FunctionComponent<NoteProps> = ({ note }) => {
  const { id, content, title, icon } = note;

  const intl = useIntl();

  const [editMode, setEditMode] = useState(false);

  const toggleEditMode: () => void = () => {
    setEditMode(prevState => !prevState);
  };

  const { control, handleSubmit, reset } = useForm<INoteForm>({
    defaultValues: { title, icon, content },
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
            id,
            title: data.title,
            icon: data.icon,
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
    <div className="py-3 px-3 max-w-2xl w-full 2xl:max-w-screen-md rounded-3xl border bg-white">
      <form id={`note-form-${id}`} onSubmit={handleSubmit(submitHandler)}>
        <Header
          control={control}
          editMode={editMode}
          onBtnClick={toggleEditMode}
        />
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

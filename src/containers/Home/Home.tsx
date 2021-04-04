import { Layout } from 'antd';
import Note from 'components/Note';
import { useGetNotesQuery } from 'generated/graphql';

const { Content } = Layout;

function Home() {
  const { data } = useGetNotesQuery({ variables: { limit: 10, offset: 0 } });

  return (
    <Content id="main" className="bg-gray-50">
      <div className="container mx-auto">
        <div className="p-4 grid grid-cols-1 gap-6 justify-items-center">
          {data?.notes.map?.(
            ({
              id,
              title,
              content,
            }: {
              id: string;
              title: string;
              content: string;
            }) => (
              <Note key={id} title={title} content={content} />
            ),
          )}
        </div>
      </div>
    </Content>
  );
}

export default Home;

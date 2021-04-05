import Note, { NoteSkeleton } from 'components/Note';
import { useGetNotesQuery } from 'generated/graphql';

const Home: React.FC = () => {
  const { data, loading } = useGetNotesQuery({
    variables: { limit: 10, offset: 0 },
  });

  return (
    <div className="container mx-auto">
      <div className="p-4 grid grid-cols-1 gap-6 justify-items-center">
        {loading ? (
          <NoteSkeleton />
        ) : (
          data?.notes.map(({ id, title, content, createdBy }) => (
            <Note
              key={id}
              noteId={id}
              title={title}
              content={content}
              createdBy={createdBy?.id}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Home;

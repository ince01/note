import Note, { NoteSkeleton } from 'components/Note';
import { useGetNotesQuery } from 'generated/graphql';
import { useParams } from 'react-router-dom';

const Home: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data, loading } = useGetNotesQuery({
    variables: { limit: 10, offset: 0, parent: parseInt(id, 10) },
  });

  return (
    <div className="container mx-auto">
      <div className="p-4 grid grid-cols-1 gap-6 justify-items-center">
        {loading ? (
          <NoteSkeleton />
        ) : (
          data?.notes.map(note => <Note key={note.id} note={note} />)
        )}
      </div>
    </div>
  );
};

export default Home;

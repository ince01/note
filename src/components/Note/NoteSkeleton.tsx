import { FunctionComponent } from 'react';
import { Skeleton } from 'antd';

type NoteSkeletonProps = {
  count?: Number;
};

const NoteSkeleton: FunctionComponent<NoteSkeletonProps> = ({ count = 3 }) => {
  const skeleton = new Array(count).fill(0);

  return (
    <>
      {skeleton.map(() => (
        <div className="py-3 px-3 max-w-2xl w-full rounded-lg border bg-white">
          <Skeleton active />
        </div>
      ))}
    </>
  );
};

export default NoteSkeleton;

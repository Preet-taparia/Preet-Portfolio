const PlaygroundHeader = () => {
  return (
    <div className='flex flex-col space-y-2 py-10 md:items-center md:justify-center'>
      <div className='flex items-center gap-3'>
        <h1 className='text-2xl font-medium'>Code Playground</h1>
      </div>
      <p className='text-neutral-600 dark:text-neutral-400'>
        A client-side sandbox for practicing with instant results.
      </p>
    </div>
  );
};

export default PlaygroundHeader;

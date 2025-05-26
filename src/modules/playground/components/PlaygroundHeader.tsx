import { SiJavascript, SiTypescript, SiPython } from 'react-icons/si';

const PlaygroundHeader = () => {
  return (
    <div className='flex flex-col space-y-2 py-10 md:items-center md:justify-center'>
      <div className='flex items-center gap-3'>
        <div className="flex items-center gap-2">
          <SiJavascript size={20} className='text-yellow-400' />
          <SiTypescript size={20} className='text-blue-400' />
          <SiPython size={20} className='text-green-400' />
        </div>
        <h1 className=' text-2xl font-medium'>Code Playground</h1>
      </div>
      <p className='text-neutral-600 dark:text-neutral-400'>
        A client-side sandbox for JavaScript, TypeScript, and Python with instant results.
      </p>
    </div>
  );
};

export default PlaygroundHeader;
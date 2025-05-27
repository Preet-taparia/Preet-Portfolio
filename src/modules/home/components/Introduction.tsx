const Introduction = () => {
  return (
    <section className='bg-cover bg-no-repeat'>
      <div className='space-y-3'>
        <div className='flex gap-2 text-2xl font-medium lg:text-3xl'>
          <h1>
            Hi, I&apos;m Preet
          </h1>
          <div className='ml-1 animate-waving-hand'>👋</div>
        </div>
        <div className='space-y-4'>
          <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
            <li>
              Based in Jaipur, India <span className='ml-1'>🇮🇳</span>
            </li>
            <li>
              IST (GMT+5:30)
            </li>
          </ul>
        </div>
      </div>

      <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        I am a Software Engineer working with Python and JavaScript to build full-stack applications. I enjoy creating dependable software and working alongside others to tackle challenges. My goal is to develop software that serves users and businesses well, while also fulfilling my own drive for learning and personal growth.
      </p>
    </section>
  );
};

export default Introduction;

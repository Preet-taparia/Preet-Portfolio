import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';``

interface GiscusComment {
  isEnableReaction?: boolean;
}

const GiscusComment = ({ isEnableReaction = false }: GiscusComment) => {
  const { theme } = useTheme();

  return (
    <div className='mb-2 mt-5'>
      <Giscus
        repo="Preet-taparia/Preet-Portfolio"
        repoId='R_kgDOMjcwcA'
        category="General"
        categoryId='DIC_kwDOMjcwcM4Cp_iL'
        mapping='pathname'
        reactionsEnabled={isEnableReaction ? '1' : '0'}
        emitMetadata='1'
        inputPosition='top'
        theme={theme === 'dark' ? 'transparent_dark' : 'light'}
        lang='en'
        loading='lazy'
      />
    </div>
  );
};

export default GiscusComment;

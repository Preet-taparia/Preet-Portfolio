import { SiJavascript, SiPython,SiTypescript } from 'react-icons/si';

import { SupportedLanguage } from './Playground';

interface LanguageSelectorProps {
  currentLanguage: SupportedLanguage;
  onLanguageChange: (language: SupportedLanguage) => void;
}

const languages = [
  {
    id: 'javascript' as const,
    name: 'JavaScript',
    icon: SiJavascript,
    color: 'text-yellow-400',
  },
  {
    id: 'typescript' as const,
    name: 'TypeScript',
    icon: SiTypescript,
    color: 'text-blue-400',
  },
  {
    id: 'python' as const,
    name: 'Python',
    icon: SiPython,
    color: 'text-green-400',
  },
];

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="flex gap-2">
      {languages.map((lang) => {
        const Icon = lang.icon;
        const isActive = currentLanguage === lang.id;
        
        return (
          <button
            key={lang.id}
            onClick={() => onLanguageChange(lang.id)}
            className={`
              flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors
              ${isActive 
                ? 'bg-neutral-700 text-white' 
                : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }
            `}
          >
            <Icon size={16} className={lang.color} />
            {lang.name}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
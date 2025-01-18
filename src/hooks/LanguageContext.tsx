'use client'
import { Dictionary, Section } from '@/constants/dictionaries/DictionaryType';
import en from '@/constants/dictionaries/en';
import pt from '@/constants/dictionaries/pt';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
// Define the type for the context props

type Language = 'en' | 'pt';

type LanguageContextProps = {
  language: Language;
  toggleLanguage: () => void;
  getMessages: (section: string) => Section;
};

// Create the context with an initial value of undefined
const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Create a provider component
type LanguageProviderProps = {
  children: ReactNode;
}

const LANGUAGE_KEY = 'app-language';

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en'); // Default initial value
  const [dictionary, setDictionary] = useState<Dictionary>(en);

  useEffect(() => {
    setDictionary(language === 'en' ? en : pt);
  }, [language]);

  const changeDictionary = (newLanguage: Language) => {
    setDictionary(newLanguage === 'en' ? en : pt);
  }

  useEffect(() => {
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY) as Language | null;
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    if (language) {
      localStorage.setItem(LANGUAGE_KEY, language);
      changeDictionary(language);
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((language === 'en' ? 'pt' : 'en'));
  };

  const getMessages = (section: string) => {
    return dictionary[section];
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, getMessages }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};

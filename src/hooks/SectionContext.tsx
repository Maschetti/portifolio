'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Define the type for the context props
type SectionContextProps = {
  section: string;
  changeSection: (newSection: string) => void;
};

// Create the context with an initial value of undefined
const SectionContext = createContext<SectionContextProps | undefined>(undefined);

// Create a provider component
type SectionProviderProps = {
  children: ReactNode;
}

const SECTION_KEY = 'section-theme';

export const SectionProvider: React.FC<SectionProviderProps> = ({ children }) => {
  const [section, setSection] = useState<string>('home'); // Default initial value

  useEffect(() => {
    const savedSection = localStorage.getItem(SECTION_KEY) as string | null;
    if (savedSection) {
      setSection(savedSection);
    }
  }, []);

  useEffect(() => {
    if (section) {
      localStorage.setItem(SECTION_KEY, section);
    }
  }, [section]);

  const changeSection = (newSection: string) => {
    setSection(newSection);
  };

  return (
    <SectionContext.Provider value={{ section, changeSection }}>
      {children}
    </SectionContext.Provider>
  );
};

// Create a custom hook for consuming the context
export const useSection = (): SectionContextProps => {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error('useSection must be used within a SectionProvider');
  }
  return context;
};

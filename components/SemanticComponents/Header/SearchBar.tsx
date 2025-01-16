"use client"

import { TextInput } from '@/components/_ui/TextInput';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const t = useTranslations('SearchBar');
  const placeHolder = t('placeHolder');
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center p-2 border border-border rounded-sm max-w-sm">
      <TextInput value={query} onChange={handleInputChange} placeholder={placeHolder}/>
      
      <Search strokeWidth={1.2}/>
    </form>
  );
};

export default SearchBar;

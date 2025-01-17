"use client"

import { Search } from 'lucide-react';
import { useState } from 'react';
import { TextInput } from './TextInput';


const SearchBar = () => {

  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSearch} className="flex items-center p-2 border border-border rounded-sm max-w-sm">
      <TextInput value={query} onChange={handleInputChange} placeholder='Pesquisar...'/>
      
      <Search strokeWidth={1.2}/>
    </form>
  );
};

export default SearchBar;
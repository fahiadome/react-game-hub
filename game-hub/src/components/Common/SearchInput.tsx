import { useState } from 'react';
import { Input, Box } from '@chakra-ui/react';

interface SearchInputProps {
  onSearch: (searchQuery: string) => void;
}
const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <Box flex={1} minWidth={0} maxWidth="full">
      <form onSubmit={handleSubmit}>
        <Input
          value={searchTerm}
          onChange={handleChange}
          borderRadius="full"
          borderColor="gray.300"
          borderWidth={1}
          paddingX={4}
          paddingY={2}
          type="text"
          placeholder="Search games..."
          width="100%"
        />
      </form>
    </Box>
  );
};

export default SearchInput;

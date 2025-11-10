import { useRef } from 'react';
import { Input } from '@chakra-ui/react';

interface SearchInputProps {
  onSearch: (searchQuery: string) => void;
}
const SearchInput = ({ onSearch }: SearchInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        if (inputRef.current) {
          onSearch(inputRef.current?.value);
        }
      }}
    >
      <Input
        ref={inputRef}
        borderRadius="full"
        borderColor="gray.300"
        borderWidth={1}
        paddingX={4}
        paddingY={2}
        marginBottom={4}
        marginTop={4}
        marginLeft={4}
        marginRight={4}
        type="text"
        placeholder="Search games..."
      />
    </form>
  );
};

export default SearchInput;

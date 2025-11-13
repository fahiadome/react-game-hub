import { Button, HStack, Text, Box } from '@chakra-ui/react';
import { useState } from 'react';

interface ErrorTesterProps {
  onThrowError: (errorType: 'render' | 'async' | 'component') => void;
}

const ErrorTester = ({ onThrowError }: ErrorTesterProps) => {
  const [shouldThrow, setShouldThrow] = useState(false);

  if (shouldThrow) {
    throw new Error('Test error: This is a simulated rendering error!');
  }

  return (
    <Box
      padding={4}
      borderWidth="2px"
      borderColor="yellow.400"
      borderRadius="md"
      backgroundColor="yellow.50"
      margin={4}
    >
      <Text fontWeight="bold" marginBottom={2} color="yellow.800">
        Error Boundary Tester
      </Text>
      <HStack gap={2} flexWrap="wrap">
        <Button
          size="sm"
          colorPalette="red"
          onClick={() => setShouldThrow(true)}
        >
          Throw Render Error
        </Button>
        <Button
          size="sm"
          colorPalette="orange"
          onClick={() => {
            throw new Error('Test error: Immediate throw!');
          }}
        >
          Throw Immediate Error
        </Button>
        <Button
          size="sm"
          colorPalette="blue"
          onClick={() => onThrowError('async')}
        >
          Simulate Async Error
        </Button>
      </HStack>
    </Box>
  );
};

export default ErrorTester;

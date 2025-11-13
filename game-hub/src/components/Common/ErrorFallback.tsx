import { Button, VStack, Heading, Text, Box, Code, Icon } from '@chakra-ui/react';
import { LuCircleAlert } from 'react-icons/lu';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  const isDevelopment = import.meta.env.DEV;

  return (
    <Box
      role="alert"
      padding={8}
      borderRadius="lg"
      borderWidth="2px"
      borderColor="red.300"
      backgroundColor="red.50"
      maxWidth="600px"
      margin="auto"
      marginTop={8}
    >
      <VStack gap={4} alignItems="flex-start">
        <VStack gap={2} alignItems="center" width="100%">
          <Icon as={LuCircleAlert} boxSize={12} color="red.500" />
          <Heading size="lg" color="red.700">
            Something went wrong
          </Heading>
        </VStack>

        <Text color="gray.700" fontSize="md">
          We encountered an unexpected error. Please try again or refresh the page.
        </Text>

        {isDevelopment && (
          <Box
            width="100%"
            padding={4}
            backgroundColor="gray.100"
            borderRadius="md"
            borderWidth="1px"
            borderColor="gray.300"
          >
            <Text fontSize="sm" fontWeight="bold" marginBottom={2} color="gray.800">
              Error Details (Development Only):
            </Text>
            <Code
              display="block"
              whiteSpace="pre-wrap"
              fontSize="xs"
              padding={2}
              backgroundColor="gray.900"
              color="red.300"
              borderRadius="sm"
              overflowX="auto"
            >
              {error.message}
              {error.stack && `\n\n${error.stack}`}
            </Code>
          </Box>
        )}

        <Button
          onClick={resetErrorBoundary}
          colorPalette="blue"
          size="lg"
          width="100%"
          marginTop={2}
        >
          Try Again
        </Button>
      </VStack>
    </Box>
  );
};

export default ErrorFallback;


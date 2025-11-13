import { Button, VStack, Text, Box, Icon } from '@chakra-ui/react';
import { LuCircleAlert } from 'react-icons/lu';

interface SectionErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const SectionErrorFallback = ({
  error,
  resetErrorBoundary,
}: SectionErrorFallbackProps) => {
  return (
    <Box
      role="alert"
      padding={6}
      borderRadius="lg"
      borderWidth="1px"
      borderColor="red.300"
      backgroundColor="red.50"
      margin={4}
    >
      <VStack gap={3} alignItems="center">
        <Icon as={LuCircleAlert} boxSize={8} color="red.500" />
        <Text color="red.700" fontWeight="semibold" textAlign="center">
          Failed to load content
        </Text>
        <Text color="gray.600" fontSize="sm" textAlign="center">
          {error.message || 'An unexpected error occurred'}
        </Text>
        <Button
          onClick={resetErrorBoundary}
          colorPalette="blue"
          size="sm"
          marginTop={2}
        >
          Retry
        </Button>
      </VStack>
    </Box>
  );
};

export default SectionErrorFallback;


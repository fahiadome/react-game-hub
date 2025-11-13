import { Button, VStack, Text, Box, Icon, HStack } from '@chakra-ui/react';
import { LuCircleAlert, LuRefreshCw } from 'react-icons/lu';
import type { ApiError as ApiErrorType } from '@/types/errors';

interface ApiErrorProps {
  error: ApiErrorType | string | null | undefined;
  onRetry?: () => void;
  compact?: boolean;
}

const ApiError = ({ error, onRetry, compact = false }: ApiErrorProps) => {
  if (!error) return null;

  const errorMessage =
    typeof error === 'string' ? error : error.message || 'An unexpected error occurred.';
  const errorType = typeof error === 'string' ? 'unknown' : error.type;

  const getIconColor = () => {
    switch (errorType) {
      case 'network':
        return 'orange.500';
      case 'api':
        return 'red.500';
      default:
        return 'red.500';
    }
  };

  const getBorderColor = () => {
    switch (errorType) {
      case 'network':
        return 'orange.300';
      case 'api':
        return 'red.300';
      default:
        return 'red.300';
    }
  };

  const getBackgroundColor = () => {
    switch (errorType) {
      case 'network':
        return 'orange.50';
      case 'api':
        return 'red.50';
      default:
        return 'red.50';
    }
  };

  if (compact) {
    return (
      <Box
        role="alert"
        padding={4}
        borderRadius="md"
        borderWidth="1px"
        borderColor={getBorderColor()}
        backgroundColor={getBackgroundColor()}
        margin={2}
      >
        <HStack gap={3} alignItems="center" justify="space-between">
          <HStack gap={2} alignItems="center">
            <Icon as={LuCircleAlert} boxSize={5} color={getIconColor()} />
            <Text color="gray.700" fontSize="sm" fontWeight="medium">
              {errorMessage}
            </Text>
          </HStack>
          {onRetry && (
            <Button onClick={onRetry} colorPalette="blue" size="sm">
              <HStack gap={2}>
                <Icon as={LuRefreshCw} boxSize={4} />
                <Text>Retry</Text>
              </HStack>
            </Button>
          )}
        </HStack>
      </Box>
    );
  }

  return (
    <Box
      role="alert"
      padding={6}
      borderRadius="lg"
      borderWidth="2px"
      borderColor={getBorderColor()}
      backgroundColor={getBackgroundColor()}
      margin={4}
      maxWidth="600px"
      marginX="auto"
    >
      <VStack gap={4} alignItems="center">
        <Icon as={LuCircleAlert} boxSize={10} color={getIconColor()} />
        <VStack gap={2} alignItems="center">
          <Text color="gray.800" fontWeight="semibold" fontSize="lg" textAlign="center">
            {errorType === 'network'
              ? 'Connection Error'
              : errorType === 'api'
                ? 'Error Loading Data'
                : 'Something Went Wrong'}
          </Text>
          <Text color="gray.600" fontSize="md" textAlign="center">
            {errorMessage}
          </Text>
        </VStack>
        {onRetry && (
          <Button onClick={onRetry} colorPalette="blue" size="lg" marginTop={2}>
            <HStack gap={2}>
              <Icon as={LuRefreshCw} boxSize={5} />
              <Text>Try Again</Text>
            </HStack>
          </Button>
        )}
      </VStack>
    </Box>
  );
};

export default ApiError;


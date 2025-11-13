import { Button, HStack, Text, Icon, Box } from '@chakra-ui/react';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useEffect } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  totalCount,
  onPageChange,
}: PaginationProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  if (totalPages <= 1) {
    return null;
  }

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 10;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <Box padding={4} marginTop={6}>
      <HStack gap={2} justify="center" align="center" flexWrap="wrap">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          variant="outline"
          size="sm"
        >
          <Icon as={LuChevronLeft} boxSize={4} />
          <Text display={{ base: 'none', md: 'inline' }} marginLeft={1}>
            Previous
          </Text>
        </Button>

        <HStack gap={1} display={{ base: 'none', md: 'flex' }}>
          {pageNumbers.map((page, index) => {
            if (page === 'ellipsis') {
              return (
                <Text key={`ellipsis-${index}`} paddingX={4} color="gray.500">
                  ...
                </Text>
              );
            }

            const pageNum = page as number;
            const isActive = pageNum === currentPage;

            return (
              <Button
                key={pageNum}
                onClick={() => onPageChange(pageNum)}
                variant={isActive ? 'solid' : 'outline'}
                colorPalette={isActive ? 'blue' : 'gray'}
                size="sm"
                minWidth="40px"
              >
                {pageNum}
              </Button>
            );
          })}
        </HStack>

        <Text
          display={{ base: 'block', md: 'none' }}
          fontSize="sm"
          color="gray.600"
          paddingX={2}
        >
          Page {currentPage} of {totalPages}
        </Text>

        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          variant="outline"
          size="sm"
        >
          <Text display={{ base: 'none', md: 'inline' }} marginRight={1}>
            Next
          </Text>
          <Icon as={LuChevronRight} boxSize={4} />
        </Button>
      </HStack>

      <Text
        fontSize="xs"
        color="gray.500"
        textAlign="center"
        marginTop={2}
        display={{ base: 'none', md: 'block' }}
      >
        Showing {(currentPage - 1) * 20 + 1}-
        {Math.min(currentPage * 20, totalCount)} of {totalCount} games
      </Text>
    </Box>
  );
};

export default Pagination;

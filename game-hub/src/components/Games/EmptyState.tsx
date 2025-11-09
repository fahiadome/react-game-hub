import { EmptyState as ChakraEmptyState, VStack } from "@chakra-ui/react"
import { LuShoppingCart } from "react-icons/lu"


    const EmptyState = () => {
  return (
    <ChakraEmptyState.Root>
      <ChakraEmptyState.Content>
        <ChakraEmptyState.Indicator>
          <LuShoppingCart />
        </ChakraEmptyState.Indicator>
        <VStack textAlign="center">
          <ChakraEmptyState.Title>No games found for your selection</ChakraEmptyState.Title>
          <ChakraEmptyState.Description>
            Explore our games and find your next favorite game
          </ChakraEmptyState.Description>
        </VStack>
      </ChakraEmptyState.Content>
    </ChakraEmptyState.Root>
  )
}
export default EmptyState;
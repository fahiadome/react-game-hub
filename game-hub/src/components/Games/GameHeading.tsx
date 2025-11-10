import { Heading } from '@chakra-ui/react'
import type { GameQuery } from '@/App'

interface GameHeadingProps {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
    const heading = `${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''} Games`
    return (
        <Heading as="h1" fontSize="4xl" marginBottom={5}>Showing {heading}</Heading>
  )
}

export default GameHeading
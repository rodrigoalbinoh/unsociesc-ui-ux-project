import {
  Box,
  Button,
  Heading,
  LinkOverlay,
  LinkBox,
  Center,
} from '@chakra-ui/react';
import { FaGamepad } from 'react-icons/fa';
import Router from 'next/router';

export function GameCard({ title, to }) {
  return (
    <LinkBox rounded="3xl" as="article" maxW="full" background="blackAlpha.800">
      <Box boxShadow="2xl">
        <Center rounded="3xl" background="blackAlpha.900" height="72">
          <FaGamepad size={102} color="#FFF" />
        </Center>
        <Box py={4} px={6}>
          <Heading color="white" size="lg" my={2}>
            <LinkOverlay href={to}>{title}</LinkOverlay>
          </Heading>
          <Button
            colorScheme="purple"
            variant="solid"
            onClick={() => Router.push(to)}
            mt={4}
            mb={2}
          >
            Jogar
          </Button>
        </Box>
      </Box>
    </LinkBox>
  );
}

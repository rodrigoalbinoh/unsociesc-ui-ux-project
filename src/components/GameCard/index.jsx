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
    <LinkBox
      as="article"
      maxW="full"
      boxShadow="2xl"
      rounded="3xl"
      background="gray.700"
    >
      <Center rounded="3xl" height="72" background="blackAlpha.700">
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
          px={6}
          rounded="3xl"
        >
          Jogar
        </Button>
      </Box>
    </LinkBox>
  );
}

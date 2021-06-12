import { Header } from '@components/Header';
import {
  Box,
  Container,
  Grid,
  Heading,
  LinkOverlay,
  LinkBox,
} from '@chakra-ui/react';
import { Ranking } from '@components/Ranking';

export default function Home() {
  return (
    <>
      <Header />
      <Container maxW="7xl" paddingTop="6">
        <Box>
          <Heading as="h2" size="lg">
            Jogos
          </Heading>
          <Grid
            gap={6}
            marginTop={6}
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
          >
            <LinkBox
              as="article"
              maxW="full"
              background="white"
              borderWidth="1px"
              rounded="md"
            >
              <Box p="5">
                <Heading size="md" my="2">
                  <LinkOverlay href="/">Jogo 1</LinkOverlay>
                </Heading>
                <Box as="a" color="teal.400" href="/" fontWeight="bold">
                  Leia mais
                </Box>
              </Box>
            </LinkBox>
            <LinkBox
              as="article"
              maxW="full"
              background="white"
              borderWidth="1px"
              rounded="md"
            >
              <Box p="5">
                <Heading size="md" my="2">
                  <LinkOverlay href="/">Jogo 2</LinkOverlay>
                </Heading>
                <Box as="a" color="teal.400" href="/" fontWeight="bold">
                  Leia mais
                </Box>
              </Box>
            </LinkBox>
            <LinkBox
              as="article"
              maxW="full"
              background="white"
              borderWidth="1px"
              rounded="md"
            >
              <Box p="5">
                <Heading size="md" my="2">
                  <LinkOverlay href="/">Jogo 3</LinkOverlay>
                </Heading>
                <Box as="a" color="teal.400" href="/" fontWeight="bold">
                  Leia mais
                </Box>
              </Box>
            </LinkBox>
          </Grid>
        </Box>
        <Box mt="9">
          <Heading as="h2" size="lg">
            Ranking dos Jogos
          </Heading>
          <Grid
            gap={6}
            marginTop={6}
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
          >
            <Box as="article" maxW="full" background="white" rounded="md">
              <Box>
                <Heading size="md" my="2">
                  Jogo 1
                </Heading>
                <Ranking
                  data={[
                    { name: 'Rodrigo Albino', points: 35 },
                    { name: 'Ramon Bezerra', points: 25 },
                    { name: 'Pedro Gomes', points: 24 },
                    { name: 'José Campos', points: 200 },
                    { name: 'Arlequina Coringa', points: 36 },
                  ]}
                />
              </Box>
            </Box>
            <Box as="article" maxW="full" background="white" rounded="md">
              <Box>
                <Heading size="md" my="2">
                  Jogo 2
                </Heading>
                <Ranking
                  data={[
                    { name: 'Rodrigo Albino', points: 35 },
                    { name: 'Ramon Bezerra', points: 25 },
                    { name: 'Pedro Gomes', points: 24 },
                    { name: 'José Campos', points: 200 },
                    { name: 'Arlequina Coringa', points: 36 },
                  ]}
                />
              </Box>
            </Box>
            <Box as="article" maxW="full" background="white" rounded="md">
              <Box>
                <Heading size="md" my="2">
                  Jogo 3
                </Heading>
                <Ranking
                  data={[
                    { name: 'Rodrigo Albino', points: 35 },
                    { name: 'Ramon Bezerra', points: 25 },
                    { name: 'Pedro Gomes', points: 24 },
                    { name: 'José Campos', points: 200 },
                    { name: 'Arlequina Coringa', points: 36 },
                  ]}
                />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

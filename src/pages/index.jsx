import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Box, Container, Grid, Heading, Flex } from '@chakra-ui/react';
import { Ranking } from '@components/Ranking';
import { GameCard } from '@components/GameCard';
import { FaCrown } from 'react-icons/fa';

export default function Home() {
  return (
    <Box background="gray.800" minHeight="100vh">
      <Header />
      <Container maxW="7xl" paddingTop="6">
        <Box>
          <Heading color="white" as="h2" size="lg">
            Jogos
          </Heading>
          <Grid
            gap={6}
            marginTop={6}
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
          >
            <GameCard title="Jogo 1" to="/game1" />
            <GameCard title="Jogo 2" to="/game2" />
            <GameCard title="Jogo 3" to="/game3" />
          </Grid>
        </Box>
        <Box mt="9">
          <Heading color="white" as="h2" size="lg">
            Ranking dos Jogos
          </Heading>
          <Grid
            gap={6}
            marginTop={6}
            templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
          >
            <Box py={6} maxW="full" background="gray.700" rounded="xl">
              <Box>
                <Flex mx={6} justifyContent="space-between" alignItems="center">
                  <Heading
                    size="lg"
                    color="whiteAlpha.900"
                    textAlign="center"
                    my={2}
                  >
                    Jogo 1
                  </Heading>
                  <FaCrown size={36} color="#FFD700" />
                </Flex>
                <Ranking gameName="Game1" />
              </Box>
            </Box>
            <Box py={6} maxW="full" background="gray.700" rounded="xl">
              <Box>
                <Flex mx={6} justifyContent="space-between" alignItems="center">
                  <Heading
                    size="lg"
                    color="whiteAlpha.900"
                    textAlign="center"
                    my={2}
                  >
                    Jogo 2
                  </Heading>
                  <FaCrown size={36} color="#FFD700" />
                </Flex>
                <Ranking gameName="Game2" />
              </Box>
            </Box>
            <Box py={6} maxW="full" background="gray.700" rounded="xl">
              <Box>
                <Flex mx={6} justifyContent="space-between" alignItems="center">
                  <Heading
                    size="lg"
                    color="whiteAlpha.900"
                    textAlign="center"
                    my={2}
                  >
                    Jogo 3
                  </Heading>
                  <FaCrown size={36} color="#FFD700" />
                </Flex>
                <Ranking gameName="Game3" />
              </Box>
            </Box>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

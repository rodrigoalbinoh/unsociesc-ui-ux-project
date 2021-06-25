import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import { Ranking } from '@components/Ranking';
import { GameCard } from '@components/GameCard';

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
            <Ranking title="Jogo 1" gameCode="Game1" />
            <Ranking title="Jogo 2" gameCode="Game2" />
            <Ranking title="Jogo 3" gameCode="Game3" />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

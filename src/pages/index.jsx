import { Box, Container, Grid, Heading } from '@chakra-ui/react';

import { Footer } from '@components/Footer';
import { GameCard } from '@components/GameCard';
import { Header } from '@components/Header';
import { Ranking } from '@components/Ranking';

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
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
            ]}
          >
            <GameCard
              title="Fabble Bird"
              to="/fabble-bird"
              image="/fabble-bird.png"
            />
            <GameCard
              title="Really Angry Bird"
              to="/really-angry-bird"
              image="/really-angry-bird.png"
            />
            <GameCard title="Up We Go" to="/up-we-go" image="/upwego.png" />
          </Grid>
        </Box>
        <Box mt="9">
          <Heading color="white" as="h2" size="lg">
            Ranking dos Jogos
          </Heading>
          <Grid
            gap={6}
            marginTop={6}
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(2, 1fr)',
              'repeat(2, 1fr)',
              'repeat(3, 1fr)',
            ]}
          >
            <Ranking title="Fabble Bird" gameCode="Game1" />
            <Ranking title="Really Angry Bird" gameCode="Game2" />
            <Ranking title="Up We Go" gameCode="Game3" />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

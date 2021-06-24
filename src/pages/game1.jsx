import { Header } from '@components/Header';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import { Ranking } from '@components/Ranking';

export default function Jogo() {
  return (
    <Box>
      <Header isSingle />
      <Container maxW="7xl" paddingTop="6">
        <Box>
          <Grid
            gap={6}
            marginTop={6}
            templateColumns={['repeat(1, 1fr)', '2fr 1fr']}
          >
            <Box>
              <Heading as="h2" size="lg">
                Jogo 1
              </Heading>
            </Box>
            <Box>
              <Heading as="h2" size="lg">
                Ranking
              </Heading>
              <Ranking gameName="Game1" />
            </Box>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

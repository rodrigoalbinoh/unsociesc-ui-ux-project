import Head from 'next/head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import { Ranking } from '@components/Ranking';
import { useEffect, useState } from 'react';

export default function Jogo() {
  const [unityInstance, setUnityInstance] = useState(undefined);
  const windowObject = typeof window !== 'undefined' && window;

  useEffect(() => {
    setUnityInstance(
      windowObject?.UnityLoader?.instantiate(
        'game',
        'games/Game1/Build/BuildJogo.json',
        { onprogress: windowObject?.UnityProgress },
      ),
    );
  }, [windowObject.UnityLoader, windowObject.UnityProgress]);

  console.log({ windowObject, unityInstance });

  return (
    <Box background="gray.800" minHeight="100vh">
      <Head>
        <link rel="shortcut icon" href="games/Game1/TemplateData/favicon.ico" />
        <link rel="stylesheet" href="games/Game1/TemplateData/style.css" />
        <script src="games/Game1/TemplateData/UnityProgress.js"></script>
        <script src="games/Game1/Build/UnityLoader.js"></script>
      </Head>
      <Header isSingle />
      <Container minHeight="calc(100vh - 180px)" maxW="7xl" paddingTop="6">
        <Box>
          <Grid
            gap={6}
            marginTop={6}
            templateColumns={['repeat(1, 1fr)', '2fr 1fr']}
          >
            <Box pt={6}>
              <Heading as="h2" size="lg" color="whiteAlpha.900">
                Jogo 1
              </Heading>
              <Box background="blackAlpha.900+" mt={7}>
                <div id="game"></div>
              </Box>
            </Box>
            <Ranking title="Ranking" gameCode="Game1" />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

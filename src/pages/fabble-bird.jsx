import Head from 'next/head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import { Ranking } from '@components/Ranking';
import { useEffect } from 'react';
import { firebaseConfig } from '@config/firebaseConfig';
import { NextSeo } from 'next-seo';

export default function FabbleBird() {
  useEffect(() => {
    // Trick to load UnityLoader after page rendered and have access to window object
    setTimeout(() => {
      window.unityInstance = window?.UnityLoader?.instantiate(
        'game',
        'games/FabbleBird/Build/FabbleBird.json',
        { onprogress: window?.UnityProgress },
      );

      // Initialize Firebase
      window.firebase.initializeApp(firebaseConfig);
    }, 5000);
  }, []);

  useEffect(
    () => () => {
      delete window.unityInstance;
    },
    [],
  );

  return (
    <Box background="gray.800" minHeight="100vh">
      <NextSeo title="Fabble Bird" />
      <Head>
        <link
          rel="shortcut icon"
          href="games/FabbleBird/TemplateData/favicon.ico"
        />
        <link rel="stylesheet" href="games/FabbleBird/TemplateData/style.css" />
        <script src="games/FabbleBird/TemplateData/UnityProgress.js"></script>
        <script src="games/FabbleBird/Build/UnityLoader.js"></script>
      </Head>
      <Header isSingle />
      <Container minHeight="calc(100vh - 180px)" maxW="7xl" paddingTop="6">
        <Box>
          <Grid
            gap={6}
            marginTop={6}
            templateColumns={[
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              'repeat(1, 1fr)',
              '2fr 1fr',
            ]}
          >
            <Box pt={6}>
              <Heading as="h2" size="lg" color="whiteAlpha.900">
                Fabble Bird
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

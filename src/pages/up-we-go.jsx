import Head from 'next/head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import { Ranking } from '@components/Ranking';
import { useEffect } from 'react';
import { firebaseConfig } from '@config/firebaseConfig';

export default function UpWeGo() {
  useEffect(() => {
    // Trick to load UnityLoader after page rendered and have access to window object
    setTimeout(() => {
      window.unityInstance = window?.UnityLoader?.instantiate(
        'game',
        'games/UpWeGo/Build/UpWeGo.json',
        { onprogress: window?.UnityProgress },
      );

      window.firebase.initializeApp(firebaseConfig);
    }, 5000);
  }, []);

  return (
    <Box background="gray.800" minHeight="100vh">
      <Head>
        <link
          rel="shortcut icon"
          href="games/UpWeGo/TemplateData/favicon.ico"
        />
        <link rel="stylesheet" href="games/UpWeGo/TemplateData/style.css" />
        <script src="games/UpWeGo/TemplateData/UnityProgress.js"></script>
        <script src="games/UpWeGo/Build/UnityLoader.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
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
                Up We Go
              </Heading>
              <Box background="blackAlpha.900+" mt={7}>
                <div id="game"></div>
              </Box>
            </Box>
            <Ranking title="Ranking" gameCode="Game3" />
          </Grid>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}

import Head from 'next/head';
import { Header } from '@components/Header';
import { Footer } from '@components/Footer';
import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import { Ranking } from '@components/Ranking';
import { useEffect, useState } from 'react';

export default function FabbleBird() {
  useEffect(() => {
    // Trick to load UnityLoader after page rendered and have access to window object
    setTimeout(() => {
      window.unityInstance = window?.UnityLoader?.instantiate(
        'game',
        'games/FabbleBird/Build/FabbleBird.json',
        { onprogress: window?.UnityProgress },
      );

      const firebaseConfig = {
        apiKey: 'AIzaSyDSgPQsM9ht-YUreNzdhZoCV1vLeUxxme4',
        authDomain: 'ui-ux-gameproject-e70cc.firebaseapp.com',
        databaseURL:
          'https://ui-ux-gameproject-e70cc-default-rtdb.firebaseio.com',
        projectId: 'ui-ux-gameproject-e70cc',
        storageBucket: 'ui-ux-gameproject-e70cc.appspot.com',
        messagingSenderId: '640652109044',
        appId: '1:640652109044:web:6a996619a2ba304d662aa1',
      };

      // Initialize Firebase
      window.firebase.initializeApp(firebaseConfig);
    }, 5000);
  }, []);

  return (
    <Box background="gray.800" minHeight="100vh">
      <Head>
        <link
          rel="shortcut icon"
          href="games/FabbleBird/TemplateData/favicon.ico"
        />
        <link rel="stylesheet" href="games/FabbleBird/TemplateData/style.css" />
        <script src="games/FabbleBird/TemplateData/UnityProgress.js"></script>
        <script src="games/FabbleBird/Build/UnityLoader.js"></script>
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

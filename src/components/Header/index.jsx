import { ArrowBackIcon } from '@chakra-ui/icons';
import { Container, Flex, Box, Grid } from '@chakra-ui/react';
import Head from 'next/head';
import NextLink from 'next/link';

export function Header({ isSingle }) {
  return (
    <Container as="header" maxW="full" borderBottom="1px solid #3333">
      <Head>
        <script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.6.5/firebase-auth.js"></script>
      </Head>
      <Grid
        maxW="7xl"
        p={3}
        templateColumns={['repeat(3, 1fr)', '1fr 1fr 1fr']}
        marginX="auto"
      >
        <Flex align="center">
          {isSingle && (
            <NextLink href="/">
              <a>
                <Box
                  color="whiteAlpha.900"
                  fontWeight="semibold"
                  lineHeight="tight"
                  isTruncated
                >
                  <ArrowBackIcon mr={2} />
                  Voltar
                </Box>
              </a>
            </NextLink>
          )}
        </Flex>
        <Flex aling="center" justify="center">
          <NextLink href="/">
            <a>
              <Box
                mt="1"
                fontWeight="semibold"
                color="whiteAlpha.900"
                as="h1"
                fontSize="2xl"
                lineHeight="tight"
                isTruncated
              >
                A3 Games
              </Box>
            </a>
          </NextLink>
        </Flex>
      </Grid>
    </Container>
  );
}

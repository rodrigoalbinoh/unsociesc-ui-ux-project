import { Container, Flex, Box, Grid } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { NextSeo } from 'next-seo';

export function Header({ isSingle }) {
  return (
    <Container as="header" maxW="full" borderBottom="1px solid #3333">
      <NextSeo title="A3 Jogos" />
      <Grid
        maxW="7xl"
        p={3}
        templateColumns={['repeat(1, 1fr)', '1fr 1fr 1fr']}
        marginX="auto"
      >
        <Flex align="center">
          {isSingle && (
            <NextLink href="/">
              <Box
                color="whiteAlpha.900"
                as="a"
                fontWeight="semibold"
                lineHeight="tight"
                isTruncated
              >
                <ArrowBackIcon />
                Voltar
              </Box>
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
                A3 Jogos
              </Box>
            </a>
          </NextLink>
        </Flex>
      </Grid>
    </Container>
  );
}

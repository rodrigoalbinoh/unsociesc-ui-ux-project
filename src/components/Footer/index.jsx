import {
  useColorModeValue,
  Box,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')} mt={12}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify="center"
        align="center"
      >
        <Text color="whiteAlpha.900" textAlign="center">
          © {currentYear} A3 Jogos. Todos os direitos reservados.
        </Text>
      </Container>
    </Box>
  );
}

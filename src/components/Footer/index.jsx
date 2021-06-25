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
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text color="whiteAlpha.900">
          © {currentYear} A3 Jogos. Todos os direitos reservados.
        </Text>
      </Container>
    </Box>
  );
}

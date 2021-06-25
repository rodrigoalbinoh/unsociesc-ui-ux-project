import {
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  useToast,
  Box,
  Heading,
  Flex,
  Center,
  Spinner,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { api } from '@services/api';
import { FaCrown } from 'react-icons/fa';

export function Ranking({ title, gameCode }) {
  const toast = useToast();
  const { data, isLoading, isFetching } = useQuery(
    ['gameRanking', gameCode],
    async () => {
      const response = await api.get(`${gameCode}`);

      if (response.data) {
        const items = Object.entries(response.data);
        return items.map(item => {
          const score = parseInt(item[1].userScore);
          return {
            id: item[0],
            name: item[1].userName,
            score,
            scoreText: score === 1 ? 'ponto' : 'pontos',
          };
        });
      }
    },
    {
      staleTime: 1000 * 60 * 5, // 5 minutes
      onError: () => {
        toast({
          title: 'Erro ao carregar o ranking',
          description:
            'Parece que houve um problema ao carregar o ranking, agora você pode se considerar em primeiro lugar!',
          status: 'error',
          isClosable: true,
          position: 'top-right',
        });
      },
    },
  );

  return (
    <Box py={6} maxW="full" background="gray.700" rounded="xl">
      <Box>
        <Flex mx={6} justifyContent="space-between" alignItems="center">
          <Heading size="lg" color="whiteAlpha.900" textAlign="center" my={2}>
            {title}
          </Heading>
          <FaCrown size={36} color="#FFD700" />
        </Flex>
        {isLoading || isFetching ? (
          <Center height="lg">
            <Spinner color="whiteAlpha.900" size="xl" />
          </Center>
        ) : (
          <Table size="md" mt={7} maxHeight="md" color="whiteAlpha.900">
            <Thead>
              <Tr>
                <Th color="whiteAlpha.900">#</Th>
                <Th color="whiteAlpha.900">Usuário</Th>
                <Th color="whiteAlpha.900">Pontuação</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item, index) => (
                <Tr key={item.id}>
                  <Td textAlign="center">#{index + 1}</Td>
                  <Td>{item.name}</Td>
                  <Td>{`${item.score} ${item.scoreText}`}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      </Box>
    </Box>
  );
}

Ranking.defaultProps = {
  title: 'Ranking',
};

Ranking.propTypes = {
  title: PropTypes.string.isRequired,
  gameCode: PropTypes.string.isRequired,
};

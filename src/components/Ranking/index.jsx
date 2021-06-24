import { Table, Thead, Tr, Th, Tbody, Td, useToast } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { api } from '@services/api';
import { useEffect } from 'react';

export function Ranking({ gameName }) {
  const toast = useToast();
  const { data, error, isError } = useQuery(
    ['gameRanking', gameName],
    async () => {
      const response = await api.get(`${gameName}`);

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
    },
  );

  useEffect(() => {
    if (isError) {
      toast({
        title: 'Erro ao carregar o ranking',
        description:
          'Parece que houve um problema ao carregar o ranking, agora você pode se considerar em primeiro lugar!',
        status: 'error',
        isClosable: true,
        position: 'top-right',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError]);

  return (
    <Table size="md" mt={7} maxHeight="md" border="1px" borderColor="gray.200">
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Usuário</Th>
          <Th>Pontuação</Th>
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
  );
}

Ranking.defaultProps = {
  data: [],
};

Ranking.propTypes = {
  data: PropTypes.array.isRequired,
};

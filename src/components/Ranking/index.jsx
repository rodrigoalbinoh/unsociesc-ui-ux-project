import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useQuery } from 'react-query';
import { api } from '@services/api';

export function Ranking({ gameName }) {
  const { data } = useQuery(
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

import { Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import { useMemo } from 'react';
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

export function Ranking({ data }) {
  const formattedData = useMemo(() => {
    return data.map(item => ({
      id: v4(),
      name: item.name,
      points: item.points,
    }));
  }, [data]);

  return (
    <Table size="md" mt={7} height="md" border="1px" borderColor="gray.200">
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Usuário</Th>
          <Th>Pontuação</Th>
        </Tr>
      </Thead>
      <Tbody>
        {formattedData.map((item, index) => (
          <Tr key={item.id}>
            <Td textAlign="center">#{index + 1}</Td>
            <Td>{item.name}</Td>
            <Td>{item.points} pontos</Td>
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

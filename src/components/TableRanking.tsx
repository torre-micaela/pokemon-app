import { Box, Heading, Table } from "@chakra-ui/react";

interface TableRankingProps {
  data: { name: string; rating: number }[];
  title: string;
  columns: string[];
}

export default function TableRanking({
  data,
  title,
  columns,
}: TableRankingProps) {
  return (
    <Box
      w="100%"
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="md"
      h={300}
    >
      <Heading size="md" mb={4}>
        {title}
      </Heading>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            {columns?.map((column) => (
              <Table.Cell key={`cell:${column}`}>{column}</Table.Cell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data?.map((item) => (
            <Table.Row key={item?.name}>
              <Table.Cell>{item?.name}</Table.Cell>
              <Table.Cell>{item?.rating} ⭐</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
}

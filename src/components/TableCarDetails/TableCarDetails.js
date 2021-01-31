import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box
} from "@chakra-ui/react"

export const TableCarDetails = ({data}) => {
    return (

        <Box  borderRadius="8px" overflow="hidden">
            <Table w="100%" bg="gray.800">
                <Thead bg="green.100">
                    <Tr>
                        <Th>Specifikationer</Th>
                        <Th>Værdier</Th>
                    </Tr>
                </Thead>
                <Tbody>

                    {Object.values(data.entities).map((item) =>
                        <Tr key={item.id} color="gray.100">
                            <Td pr={0}>{item.title}</Td>
                            <Td pr={0}><b>{item.value}</b></Td>
                        </Tr>
                    )}

                </Tbody>
            </Table>
        </Box>
    );
};

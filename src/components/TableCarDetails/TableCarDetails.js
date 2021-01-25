import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Button,
} from "@chakra-ui/react"


export const TableCarDetails = ({data}) => {
    return (
        <>
        <Table variant="striped" colorScheme="gray">
            {/*<TableCaption>Imperial to metric conversion factors</TableCaption>*/}
            <Thead>
                <Tr>
                    <Th>Specifikationer</Th>
                    <Th>Værdier</Th>
                </Tr>
            </Thead>
            <Tbody>

                {Object.values(data.entities).map((item) =>
                    <Tr key={item.id}>
                        <Td pr={0}>{item.title}</Td>
                        <Td pr={0}><b>{item.value}</b></Td>
                    </Tr>


                )}

            </Tbody>

        </Table>

    <Button w="100%"> Show Less</Button>
            </>
    );
};

import {useState} from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption, Button,Box
} from "@chakra-ui/react"

export const TableCarDetails = ({data}) => {
    const [show, setShow] = useState(true)
    return (

            <Box  h={show ? '100%' : '30%'} >



        <Table w="100%" variant="striped" colorScheme="black" >
            {/*<TableCaption>Imperial to metric conversion factors</TableCaption>*/}
            <Thead bg="green.100">
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
    {/*<Button w="100%" colorScheme="green" onClick={()=> setShow(!show)}> Show Less</Button>*/}
            </Box>
    );
};

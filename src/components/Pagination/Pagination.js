import {PaginationContainer, Item} from './styles'
import {Stack, HStack, VStack, Text} from "@chakra-ui/react"

export const Pagination = ({carsPerPage, totalCars, paginate}) => {
    let pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalCars / carsPerPage); i++) {

        pageNumbers.push(i)
    }

    return (
        <PaginationContainer>

            <HStack>
                {pageNumbers.map(number => (
                    <div key={number}>
                        <div onClick={() => paginate(number)} >
                            <Item>{number}</Item>
                        </div>
                    </div>
                ))}
            </HStack>


        </PaginationContainer>
    );
};

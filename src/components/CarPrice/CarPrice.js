import {carPrice} from "@/helper/carPrice";
import NumberFormat from "react-number-format";
import {Flex, Text} from "@chakra-ui/react";
import {CarContent} from "@/components/Cars/SingleCarElement/styles";

export const CarPrice = ({carId, children}) => {
    if (!carId) {
        return
    }

    const getPrice = carPrice(carId)
    const price = <NumberFormat value={getPrice} displayType={'text'} thousandSeparator={true}
                                prefix={'DKK '}/>

    return (
        <>
            {
                getPrice ?

                    <Flex p={2}>
                        <CarContent p={5} bg="green.500">
                            <Text color="white"> Leasing måneder Prise </Text>
                            <Text as='h4' fontSize={{base: "1.6rem", md: "2rem", lg: "2.8rem"}}
                                  color="white">
                                {price}

                            </Text>

                        </CarContent>
                    </Flex>
                    : null
            }
        </>
    )
};


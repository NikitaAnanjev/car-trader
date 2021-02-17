
// Chakra components
import {
    Button,
    Select,
    FormControl,
    Flex,
    Text,

} from "@chakra-ui/react"

// local libs
import {SearchPanelContainer, SelectInput} from './styles'
import router, {useRouter} from "next/router";
import slugify from "react-slugify";
import {useState,useEffect} from "react";


export const SearchPanel = ({data, children, isfixed}) => {
    const {query} = useRouter()

    const [make, setValue] = useState( query.make  ? query.make : '')

    // const initialValues = {
    //     make: query.make,
    //     // year: query.year ,
    // }

    const filterRetailPriceOnly = data.filter((p) => p["PriceType"] !== "Leasing")

    const getAllMakes = (val) => {
        if (!filterRetailPriceOnly) return null
        const count = {};
        let array_elements = []

        filterRetailPriceOnly.map((makes) =>
            array_elements.push(makes[val])
        )
        array_elements.sort();
        array_elements.forEach(function (i) {
            count[i] = (count[i] || 0) + 1;
        });
        return Object.entries(count)
    }

    useEffect(() => {

        router.push({
            pathname: '/',
            query: {make}
        }, undefined,{shallow: false})
        window.scrollTo(0, 0)
    },[make]);

    const handleChange = (event) => {
      setValue(event.target.value);
    };


    return (
        <SearchPanelContainer isfixed={isfixed}
                              justifyContent='flex-end'
                              borderRadius="8px"
                              overflow="hidden"
                              w="100%"
                             maxW={{base: isfixed ? "100%" : "100%", md:  isfixed ? "30%" : "100%", lg: isfixed ? "250px" : "60%"}}>
            <Flex grow={1} borderRadius="8px">
                <FormControl id="make" bg='gray.700' onChange={handleChange}>
                    <SelectInput name="make" placeholder="Vælg en bil mærke" color="white"
                            size="md" border={0}  w="100%">
                        {getAllMakes('Make').map((make, index) =>
                            <option  key={index + make[1] + make[0]}
                                    value={slugify(make[0])}>{make[0]} ( {make[1]} )</option>
                        )}
                    </SelectInput>
                </FormControl>
            </Flex>


        </SearchPanelContainer>
    );
};

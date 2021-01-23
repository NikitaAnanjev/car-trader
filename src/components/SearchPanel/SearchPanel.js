import {Field, Formik} from "formik";

// Chakra components
import {
    Button,
    Select,
    FormControl,
    Flex,
    Text
} from "@chakra-ui/react"

// local libs
import {SearchPanelContainer, FormikForm} from './styles'
import router, {useRouter} from "next/router";
import slugify from "react-slugify";


export const SearchPanel = ({data, children, isfixed}) => {
    const {query} = useRouter()

    const initialValues = {
        make: query.make,
        // year: query.year ,
    }

    const filterRetailPriceOnly =   data.filter((p) => p["PriceType"] !==  "Leasing")

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


    return (
        <SearchPanelContainer isfixed={isfixed } justifyContent='flex-end' w={{base: "100%", md: '100%', lg: isfixed ? "80%" : "60%"}}>
            <Formik initialValues={initialValues} onSubmit={(values) => {
                router.push({
                    pathname: '/',
                    query: {...values}
                }, undefined, {shallow: false})
            }}>
                {({values}) =>
                    <FormikForm name="searchForm">
                        <Flex
                            // direction="column"
                            direction={{base: 'column', md: isfixed ? 'row' : "column"}}
                              w="100%">
                            <Flex
                                mb={4}
                                // mb={{base: '1rem', md: "1rem"}}
                            >
                                {!isfixed &&  <Text color="gray.200" mr={5}>I am looking for a car</Text> }

                                {children}
                            </Flex>

                            <Flex grow={1}>
                                <FormControl id="make" bg='gray.700'  >
                                    <Field as={Select} name="make" placeholder="Select cars brand" color="white" size="lg" border={0} borderRadius="0 3px 3px 0" w="100%"
                                           // onChange={() => searchForm.submit()}
                                    >
                                        {getAllMakes('Make').map((make, index) =>
                                            <option style={{color: '#111111'}} key={index + make[1] + make[0]}
                                                    value={slugify(make[0])}>{make[0]} ( {make[1]} )</option>
                                        )}

                                    </Field>
                                </FormControl>
                                <Button type="submit" colorScheme="blue" w="150px" size="lg" borderRadius="0 3px 3px 0" > Search</Button>
                            </Flex>
                        </Flex>
                    </FormikForm>
                }
            </Formik>

        </SearchPanelContainer>
    );
};

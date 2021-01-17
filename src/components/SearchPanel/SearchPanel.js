import {Field, Formik} from "formik";

// Emotion components
import {
    Button,
    Select,
    FormControl,
    Flex
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

    const getAllMakes = (val) => {
        if (!data) return null
        const count = {};
        let array_elements = []

        data.map((makes) =>
            array_elements.push(makes[val])
        )
        array_elements.sort();
        array_elements.forEach(function (i) {
            count[i] = (count[i] || 0) + 1;
        });
        return Object.entries(count)
    }

    return (
        <SearchPanelContainer isfixed={isfixed} justifyContent='flex-end' w={{base: "100%", md: '100%', lg: "50%"}}>
            <Formik initialValues={initialValues} onSubmit={(values) => {
                router.push({
                    pathname: '/',
                    query: {...values}
                }, undefined, {shallow: false})
            }}>
                {({values}) =>
                    <FormikForm>
                        <Flex direction={{base: 'column', md: "row-reverse"}}>
                            <Flex mb={{base: '1rem', md: "0"}}>
                                {children}
                            </Flex>

                            <Flex>
                                <FormControl id="make" mr={10} bg='gray.700'>
                                    <Field as={Select} name="make" placeholder="Select cars brand" color="white">
                                        {getAllMakes('Make').map((make, index) =>
                                            <option style={{color: '#111111'}} key={index + make[1] + make[0]}
                                                    value={slugify(make[0])}>{make[0]} ( {make[1]} )</option>
                                        )}

                                    </Field>
                                </FormControl>
                                <Button type="submit" colorScheme="blue" w="150px" size="md" mr={10}> Search</Button>
                            </Flex>
                        </Flex>
                    </FormikForm>
                }
            </Formik>

        </SearchPanelContainer>
    );
};

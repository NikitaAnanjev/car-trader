import {Formik, Field} from "formik";

// Emotion components
import {
    Button,
    Select,
    FormControl,
    FormLabel,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Input
} from "@chakra-ui/react"

// local libs
import {SearchPanelContainer, FormikForm} from './styles'
import {useRouter} from "next/router";


export const SearchPanel = ({data}) => {
    const {query} = useRouter()
    const [priceValue,setPriceValue] = React.useState(  )

    const initialValues = {
        make: query.make || 'all',
        year: query.year || 'all',
        price: query.price || priceValue
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

    // const maxPrice = () => {
    //     if (!data) return null
    //     let array_elements = []
    //     data.map((makes) =>
    //         makes['PurchasePrice'] && array_elements.push(Number(makes['PurchasePrice']))
    //     )
    //     return [Math.min.apply(null, array_elements), Math.max.apply(null, array_elements)]
    // }



    return (
        <SearchPanelContainer w="100%" justifyContent='center'>
            <Formik initialValues={initialValues} onSubmit={values => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500);
            }}>

                {({values}) =>
                    <FormikForm>
                        <FormControl id="make" mr={10}>
                            <FormLabel>Make</FormLabel>
                            <Field as={Select} name="make" placeholder="Select cars brand">

                                {getAllMakes('Make').map((make, index) =>
                                    <option key={index + make[1] + make[0]}
                                            value={make[0]}>{make[0]} ( {make[1]} )</option>
                                )}

                            </Field>
                        </FormControl>


                        <FormControl id="year" mr={10}>
                            <FormLabel>Year</FormLabel>
                            <Field as={Select} name="year" placeholder="Select a year">

                                {getAllMakes('Year').map((year, index) =>
                                    <option key={index + year[1] + year[0]}
                                            value={year[0]}>{year[0]} ( {year[1]} )</option>
                                )}
                            </Field>
                        </FormControl>


                        {/*<FormControl mr={10}>*/}
                        {/*    <FormLabel >Price {priceValue}</FormLabel>*/}
                        {/*    <Slider  onChange={(value) => setPriceValue(value)} max={maxPrice()[1]} min={maxPrice()[0]}>*/}
                        {/*        <SliderTrack>*/}
                        {/*            <SliderFilledTrack/>*/}
                        {/*        </SliderTrack>*/}
                        {/*        <SliderThumb/>*/}
                        {/*    </Slider>*/}
                        {/*</FormControl>*/}

                        {/*<Field as={Input} id="price" name="price" type="text" value={priceValue} >*/}


                        {/*</Field>*/}


                        <Button type="submit" w='full' mt={7}> Search</Button>
                    </FormikForm>
                }
            </Formik>


        </SearchPanelContainer>
    );
};


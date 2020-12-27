import {Field, Formik} from "formik";

// Emotion components
import {
    Button,
    Select,
    FormControl,
    FormLabel,

} from "@chakra-ui/react"

// local libs
import {SearchPanelContainer, FormikForm} from './styles'
import router, {useRouter} from "next/router";
import slugify from "react-slugify";


export const SearchPanel = ({data}) => {
    const {query} = useRouter()

    const initialValues = {
        make: query.make ,
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
        <SearchPanelContainer w="100%" justifyContent='center'>
            <Formik initialValues={initialValues} onSubmit={(values) => {
              router.push( {pathname: '/',
                    query: {...values}} , undefined,{shallow: false})
            }}>

                {({values}) =>
                    <FormikForm>
                        <FormControl id="make" mr={10}>
                            <FormLabel>Make</FormLabel>
                            <Field as={Select} name="make" placeholder="Select cars brand">

                                {getAllMakes('Make').map((make, index) =>
                                    <option key={index + make[1] + make[0]}
                                            value={slugify(make[0])}>{make[0]} ( {make[1]} )</option>
                                )}

                            </Field>
                        </FormControl>

                        {/*<FormControl id="year" mr={10}>*/}
                        {/*    <FormLabel>Year</FormLabel>*/}
                        {/*    <Field as={Select} name="year" placeholder="Select a year">*/}

                        {/*        {getAllMakes('Year').map((year, index) =>*/}
                        {/*            <option key={index + year[1] + year[0]}*/}
                        {/*                    value={slugify(year[0])}>{year[0]} ( {year[1]} )</option>*/}
                        {/*        )}*/}
                        {/*    </Field>*/}
                        {/*</FormControl>*/}

                        <Button type="submit" w='full' mt={7}> Search</Button>
                    </FormikForm>
                }
            </Formik>
        </SearchPanelContainer>
    );
};



// export function ModelSelect({years, make, ...props }) {
//     const { setFieldValue } = useFormikContext();
//     const [field] = useField({
//         name: props.name,
//     });
//
//     const { data } = useSWR('/api/cars?make=' + make, {
//         onSuccess: (newValues) => {
//             if (!newValues.map((a) => a.years).includes(field.value)) {
//                 setFieldValue('model', 'all');
//             }
//         },
//     });
//     const newModels = data || years;
//
//     return (
//         <FormControl id="year" mr={10}>
//             <FormLabel>Make</FormLabel>
//             <Select name="year" placeholder="Select a year">
//
//                 {getAllMakes('Year').map((year, index) =>
//                     <option key={index + year[1] + year[0]}
//                             value={slugify(year[0])}>{year[0]} ( {year[1]} )</option>
//                 )}
//
//             </Select>
//         </FormControl>
//     );
// }
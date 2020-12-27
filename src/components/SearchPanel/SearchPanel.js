import {
    Box, Flex, Button, Text, Select, FormControl,
    FormLabel, Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
} from "@chakra-ui/react"
import {SearchPanelContainer, Form} from './styles'


export const SearchPanel = ({data}) => {


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


            <Form>
                <FormControl id="carMake" mr={10}>
                    <FormLabel>Make</FormLabel>
                    <Select placeholder="Select cars brand">
                        {getAllMakes('Make').map((make) =>
                            <option>{make[0]} ( {make[1]} )</option>
                        )}

                    </Select>
                </FormControl>
                <FormControl id="carYear" mr={10}>
                    <FormLabel>Year</FormLabel>
                    <Select placeholder="Select a year">
                        {getAllMakes('Year').map((make) =>
                            <option>{make[0]} ( {make[1]} )</option>
                        )}
                    </Select>
                </FormControl>
                <FormControl id="price"  mr={10}>
                    <FormLabel>Price</FormLabel>
                <Slider aria-label="slider-ex-1" defaultValue={30}>
                    <SliderTrack>
                        <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                </Slider>
                </FormControl>
                <Button type="submit" w='full' mt={7}> Search</Button>
            </Form>


        </SearchPanelContainer>
    );
};


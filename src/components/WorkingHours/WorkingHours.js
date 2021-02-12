import {
    Box, Image, Text, Heading, Divider, ListIcon,
    List, ListItem,Flex
} from "@chakra-ui/react"
import {FooterItem} from "@/components/Footer/styles";


export const WorkingHours = () => {


    const weekDaysNames = {

        1: {id: "1", day: 'Manday', time: '10 - 17'},
        2: {id: "2", day: 'Tirsdag', time: '10 - 17'},
        3: {id: "3", day: 'Onsdag', time: '10 - 17'},
        4: {id: "4", day: 'Torsdag', time: '10 - 17'},
        5: {id: "5", day: 'Fredag', time: '10 - 17'},
        6: {id: "6", day: 'Lørdag', time: 'Lukket'},
        7: {id: "0", day: 'Søndag', time: '10 - 16'},
    }


    const today = new Date()

    const todayCheck = () => {
        const currentDay = today.getDay()
        const currentTime = today.getHours()
        console.log(currentTime,currentDay)

         return  (currentDay === 6 || currentTime > 10 < 17 ) ? false : ((!(currentDay === 0 && currentTime > 10 < 16)))

    }
        const isOpenTime = todayCheck()

    return (
        <Box zIndex={10} w="200px">

                {/*<Heading as='h3' size="md" fontWeight='normal'> Åbne timer</Heading>*/}
                {/*<Divider maxW="3rem" my={3} borderColor="red.500"/>*/}

            {Object.values(weekDaysNames).map((dayInfo)=>
                <Flex my={1} key={dayInfo.id}>
                <Text w="50%" fontSize='sm'  color="gray.200">{dayInfo.day} </Text>
                    <Text  color="white" w="50%">{dayInfo.time}</Text>
                </Flex>
            )}


            <Box p={2} bg={isOpenTime ? 'green.400' :'#f80000'} mt={3} borderRadius="8px">
                {isOpenTime ? <Text color="white"> Åbent </Text> :   <Text color="white"> Vi er lukket nu </Text>  } </Box>
        </Box>
    );
};


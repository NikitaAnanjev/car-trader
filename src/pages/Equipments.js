import {EquipmentItem} from "@/components/EquipmentItem";
import {
    Box, Image, Text, Heading,Flex
} from "@chakra-ui/react"
import { Wrap, WrapItem } from "@chakra-ui/react"
import {EquipmentList} from "@/components/EquipmentItem/styles"

const equipmentsData = {

    entities: {
        1: {
            id: 1,
            header: 'Visning af bil i fugleperspektiv Med parkeringspakkens 360 graders kamera kan selv svigermor parkere bilen uden at lave skrammer.',
            title: '360 GRADERS KAMERA',
            text: 'Med 360 graders kamera får du det fulde overblik. Via kameraer placeret flere steder på bilen skabes et overbliksbillede på skærmen, der viser mulige forhindringer, hvor du skal parkere. Kombineret med Aktiv Park Assist giver bilen dig optimal mulighed for at foretage en sikker og nem parkering – også på steder, hvor pladsen kan være trang. Se mere om 360 graders kamera. (Der tages forbehold for forskelle mellem modeller)',
            img: '1.jpeg',
            url: 'https://www.youtube.com/watch?v=30o_nue0-oE&feature=emb_logo&ab_channel=Mercedes-Benz'
        },
        2: {
            id: 2,
            header: 'Visning af bil i fugleperspektiv Med parkeringspakkens 360 graders kamera kan selv svigermor parkere bilen uden at lave skrammer.',
            title: '360 GRADERS KAMERA',
            text: 'Med 360 graders kamera får du det fulde overblik. Via kameraer placeret flere steder på bilen skabes et overbliksbillede på skærmen, der viser mulige forhindringer, hvor du skal parkere. Kombineret med Aktiv Park Assist giver bilen dig optimal mulighed for at foretage en sikker og nem parkering – også på steder, hvor pladsen kan være trang. Se mere om 360 graders kamera. (Der tages forbehold for forskelle mellem modeller)',
            img: '2.jpg',
            url: 'https://www.youtube.com/watch?v=30o_nue0-oE&feature=emb_logo&ab_channel=Mercedes-Benz'
        },
        3: {
            id: 3,
            header: 'Visning af bil i fugleperspektiv Med parkeringspakkens 360 graders kamera kan selv svigermor parkere bilen uden at lave skrammer.',
            title: '360 GRADERS KAMERA',
            text: 'Med 360 graders kamera får du det fulde overblik. Via kameraer placeret flere steder på bilen skabes et overbliksbillede på skærmen, der viser mulige forhindringer, hvor du skal parkere. Kombineret med Aktiv Park Assist giver bilen dig optimal mulighed for at foretage en sikker og nem parkering – også på steder, hvor pladsen kan være trang. Se mere om 360 graders kamera. (Der tages forbehold for forskelle mellem modeller)',
            img: 'activelane.jpg',
            url: 'https://www.youtube.com/watch?v=30o_nue0-oE&feature=emb_logo&ab_channel=Mercedes-Benz'
        }

    }

}


export const Equipments = () => {
    return (
        <EquipmentList bg="gray.900">

        
            {Object.values(equipmentsData.entities).map((item) =>

                <EquipmentItem key={item.id} {...item}/>

            )}


        </EquipmentList>
    );
};




import {EquipmentItem} from "@/components/EquipmentItem";

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
            header: 'Systemet kan advare dig visuelt og akustisk om køretøjer i den blinde vinkel.',
            title: 'BLIND VINKEL ASSISTENT',
            text: 'Aktiv Blind Spot Assist hjælper føreren med at lokalisere eventuelle forhindringer, der befinder sig i den blinde vinkel. Ved hjælp af en advarselstrekant i sidespejlet gøres der opmærksom på, hvis man er ved at trække ud foran en bagfrakommende. Systemet har ligeledes mulighed for at foretage små styreindgreb. Se mere om Aktiv Blind Spot Assist. (Der tages forbehold for forskelle mellem modeller) Se mere om 360 graders kamera. (Der tages forbehold for forskelle mellem modeller)',
            img: '2.jpg',
            url: 'https://www.youtube.com/watch?time_continue=1&v=8Ddlbc4HMhg&feature=emb_logo&ab_channel=Mercedes-Benz'
        },
        3: {
            id: 3,
            header: 'Active Lane Keeping Assist sikrer at bilen holder sig indenfor linierne og ikke laver utilsigtede vognbaneskift.',
            title: 'VOGNBANEASSISTENT',
            text: 'Når din opmærksomhed vandrer under kørsel, gør din bil det også. Aktiv Lane Keeping Assist hjælper føreren med at holde sig inden for linjerne. Det gør sig både gældende ved fuldt optrukne linjer, hvor bilen vi ESP og ABS systemet automatisk kan lave små justeringer, der holder bilen i sin egen bane. Krydses stiplede linjer uden at der først er blinket af, vil rattet give små rystelser for at informere føreren, såfremt det ikke er intentionen at skifte bane. Se mere om Aktiv Lane Keeping Assist. (Der tages forbehold for forskelle mellem modeller)',
            img: 'activelane.jpg',
            url: 'https://www.youtube.com/watch?time_continue=1&v=wUK_F3Tce5o&feature=emb_logo&ab_channel=Mercedes-BenzUSA'
        },
        4: {
            id: 4,
            header: 'Active Park Assist gør det nemt og sikkert at parkere bilen, med sensorer både foran og bagpå.',
            title: 'PARKERINGSASSISTENT',
            text: 'Aktiv Park Assist gør parkeringen til en leg. Med dette system kan bilen selv parkere, såfremt sensorerne registrerer, at der er plads nok til, at bilen kan være der. Systemet indebærer parkeringssensorer både for og bag, der kan anvendes som traditionelle parkeringssensorer, som informerer om, hvor tæt man er på en genstand. Hos Mercedes-Benz har man dog videreudviklet systemet således, at det i dag selv kan parkere bilen ved hjælp af den elektroniske servo. Se en demonstration af Aktiv Park Assist. (Der tages forbehold for forskelle mellem modeller)',
            img: 'parkassist.jpg',
            url: 'https://www.youtube.com/watch?time_continue=2&v=RNhOOIojUn4&feature=emb_logo&ab_channel=Mercedes-Benz'
        },
        5: {
            id: 5,
            header: 'Undgå at lede efter bilnøglen, med Keyless Go låses bilen op og startes bare du har nøglen på dig.',
            title: 'NØGLEFRI BETJENING',
            text: 'Keyless Go er for dig, som ønsker bekvemmelighed på højeste plan. Med Keyless Go kan nøglen blive i lommen eller tasken. Via nøglen sendes der et signal til bilen, så snart du nærmer dig, og du kan nu blot tage i håndtaget og åbne. Herefter startes bilen vha. startknappen, der er monteret, hvor nøglen normalt isættes. Så snart du slukker bilen og forlader den, kan du med et let strøg på håndtaget låse bilen og forlade den aflåst. Så bliver det ikke nemmere.',
            img: 'keylessgo.jpg',

        },

        6: {
            id: 6,
            header: 'Behold bare nøglen i lommen, start bilen uden at bruge nøglen, tryk på start og du er klar.',
            title: 'START UDEN NØGLE',
            text: 'Med Keyless Start skal du ikke have nøglen op af lommen for at starte din Mercedes-Benz. Bilen låses op med nøglen, og herefter kan du blot sætte dig ind og starte bilen vha. startknappen, der er monteret, hvor nøglen normalt isættes. Nemt og bekvemt.',
            img: 'keylessstart.jpg',

        },
        7: {
            id: 7,
            header: 'Hold automatisk sikker afstand til forankørende biler ved hjælp af adaptiv fartpilot.',
            title: 'ADAPTIV FARTPILOT',
            text: 'Systemet tilbyder føreren en afslappende og rolig kørsel på såvel landevej som motorveje. Ved hjælp af lydbølger og kamera rekogniserer systemet trafikken forude og tilpasser automatisk hastigheden til forankørende. Det samme gør sig gældende ved fx kø, hvor systemet kan bremse bilen helt til standsning. Afhængigt af, hvilken model systemet er monteret i, findes også en styreassistent, hvor bilen automatisk kan følge vejens kurve. Se mere om Distronic Plus i videoen her. (Der tages forbehold for forskelle mellem modeller)',
            img: 'keylessgo.jpg',
            url: 'https://www.youtube.com/watch?v=lKhsIShqZV8&feature=emb_logo&ab_channel=Mercedes-Benz'
        },

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




import {About} from "../src/pages/About";
import {Heading, Text} from "@chakra-ui/react";


const dataAboutUs = {
    entities: {
        1: {
            id: '1',
            smallTitle: 'Hvem er vi og hvorfor er vi her?',
            title: "OM PIRALUX AUTOMOBILER",
            text: "Piralux Automobiler har specialiseret sig indenfor import, salg og leasing af biler i luksusklassen fra Tyskland. Bilerne fra Tyskland har en langt højere kvalitet, og udstyrspakken er bare større i de biler, end dem som normalt handles i Danmark. Det er den primære årsag til at vi importerer bilerne – kunden skal have fuld kvalitet og luksus for den investering de laver i deres drømmebil. Derfor er det vigtigt for os, at vi kan give en god garanti, en god pris og ikke mindst den bedste rådgivning på markedet. Vi glæder os til at kunne hjælpe dig med din næste bil.",
            image: "https://www.kudyznudy.cz/files/d8/d8676776-0cca-40da-ad59-f114053c25ef.jpg?v=20200830093914",
            reverse: false,
            light: false
        },
        2: {
            id: '2',
            smallTitle: 'Hvem er vi og hvorfor er vi her?',
            title: "OM PIRALUX AUTOMOBILER",
            text: "Piralux Automobiler har specialiseret sig indenfor import, salg og leasing af biler i luksusklassen fra Tyskland. Bilerne fra Tyskland har en langt højere kvalitet, og udstyrspakken er bare større i de biler, end dem som normalt handles i Danmark. Det er den primære årsag til at vi importerer bilerne – kunden skal have fuld kvalitet og luksus for den investering de laver i deres drømmebil. Derfor er det vigtigt for os, at vi kan give en god garanti, en god pris og ikke mindst den bedste rådgivning på markedet. Vi glæder os til at kunne hjælpe dig med din næste bil.",
            image: "https://www.kudyznudy.cz/files/d8/d8676776-0cca-40da-ad59-f114053c25ef.jpg?v=20200830093914",
            reverse: true,
            light: true
        },
        3: {
            id: '3',
            smallTitle: 'Hvem er vi og hvorfor er vi her?',
            title: "OM PIRALUX AUTOMOBILER",
            text: "Piralux Automobiler har specialiseret sig indenfor import, salg og leasing af biler i luksusklassen fra Tyskland. Bilerne fra Tyskland har en langt højere kvalitet, og udstyrspakken er bare større i de biler, end dem som normalt handles i Danmark. Det er den primære årsag til at vi importerer bilerne – kunden skal have fuld kvalitet og luksus for den investering de laver i deres drømmebil. Derfor er det vigtigt for os, at vi kan give en god garanti, en god pris og ikke mindst den bedste rådgivning på markedet. Vi glæder os til at kunne hjælpe dig med din næste bil.",
            image: "https://www.kudyznudy.cz/files/d8/d8676776-0cca-40da-ad59-f114053c25ef.jpg?v=20200830093914",
            reverse: false,
            light: false
        },
        4: {
            id: '4',
            smallTitle: 'Hvem er vi og hvorfor er vi her?',
            title: "OM PIRALUX AUTOMOBILER",
            text: "Piralux Automobiler har specialiseret sig indenfor import, salg og leasing af biler i luksusklassen fra Tyskland. Bilerne fra Tyskland har en langt højere kvalitet, og udstyrspakken er bare større i de biler, end dem som normalt handles i Danmark. Det er den primære årsag til at vi importerer bilerne – kunden skal have fuld kvalitet og luksus for den investering de laver i deres drømmebil. Derfor er det vigtigt for os, at vi kan give en god garanti, en god pris og ikke mindst den bedste rådgivning på markedet. Vi glæder os til at kunne hjælpe dig med din næste bil.",
            image: "https://www.kudyznudy.cz/files/d8/d8676776-0cca-40da-ad59-f114053c25ef.jpg?v=20200830093914",
            reverse: true,
            light: true
        },
        5: {
            id: '5',
            smallTitle: 'Rådgivningen altid gratis',
            title: "KOMPETENT RÅDGIVNING",
            text: "Der er mange spørgsmål omkring leasing, og god rådgivning er vigtig inden du beslutter dig. Hos Piralux Automobiler er rådgivningen altid gratis, og du er mere end velkommen til at få et overslag på forskellige løsninger, så er du sikker på at vælge rigtigt, uanset hvilken bil du har i tankerne og uanset hvordan financierings- og bilmarkedet ændrer sig.\n" +
                "\n" +
                "For os er det vigtigste, at du dels sparer nogle penge på dit drømmekøb og at det opfylder dine behov og ønsker. Så mangler du svar på nogle af de spørgsmål de fleste stiller, så kontakt Piralux Automobiler her – og vi vil elske at hjælpe dig med din næste bil.",  image: "https://piraluxauto.wpmudev.host/wp-content/uploads/2020/04/10-e1585113116539.jpg",
            reverse: false,
            light: false
        },
    }
}


const Omos = () => {
    return (
        <div>

            {Object.values(dataAboutUs.entities).map((item)=>
                <About {...item}/>
            )}

        </div>
    );
};

export default Omos;

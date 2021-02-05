import {Equipments} from "../src/pages/Equipments";
import {SubPageBanner} from "@/components/SubPageBanner";
import {Heading} from "@chakra-ui/react";

const Udstyr = () => {
    return (
        <>
            <SubPageBanner>
                <Heading>Udstyr</Heading>
            </SubPageBanner>
            <Equipments/>
        </>
    );
};

export default Udstyr;

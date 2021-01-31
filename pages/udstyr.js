import {Equipments} from "../src/pages/Equipments";
import {SubPageBanner} from "@/components/SubPageBanner";
import {Box,Image} from "@chakra-ui/react";

const Udstyr = () => {
    return (

        <>
            <SubPageBanner>
                <Image src="bg/drommebil.jpg"/>
            </SubPageBanner>
        <Equipments/>
        </>
    );
};

export default Udstyr;

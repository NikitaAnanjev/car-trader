import {CarouselItem} from './styles'
import {useState} from "react";
import {Button} from "@chakra-ui/react";
import {MdRingVolume} from "react-icons/md";

const CarVideo = ({video}) => {



    return (
        <>
           {/* {video &&*/}
           {/*}*/}

            {/*{showVideo &&*/}
            <CarouselItem>
                <iframe style={{margin: '0', height: '100%', width: '100%'}}
                        frameBorder="0" allowFullScreen allowTransparency="true" mozallowfullscreen
                        webkitAllowFullScreen
                        src={video}/>
            </CarouselItem>
            {/*}*/}


        </>
    );
};

export default CarVideo;

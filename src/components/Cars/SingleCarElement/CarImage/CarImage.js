import {SingleCarImgCarousel} from './styles'
import {Carousel} from 'react-responsive-carousel';
import dynamic from "next/dynamic";
import {
    Flex,
    CircularProgress,
} from "@chakra-ui/react"
import CarVideo from "@/components/Cars/SingleCarElement/CarVideo/CarVideo";

// const DynamicVideo = dynamic(() => import("../CarVideo/CarVideo"),
//     {
//         loading: () => <Flex minH="300px" w="100%" justifyContent="center" alignItems="center">
//             <CircularProgress isIndeterminate color="red.300"/></Flex>
//     })

export const CarImage = ({images, video}) => {
    return (
        <SingleCarImgCarousel>
            <Carousel showArrows={true} showThumbs={true} showIndicators={false} useKeyboardArrows={true} swipeable={false} infiniteLoop={true} style={{width: '100%'}}>

                {/*{video && <DynamicVideo video={video}/>}*/}
                { images && images.map((image, index) =>
                    image &&
                    <div key={index}>
                        <img alt={'dsa'} src={image}/>
                    </div>
                )}
            </Carousel>
      </SingleCarImgCarousel>
    );
};

// export default CarImage


import {SingleCarImgCarousel} from './styles'
import {Carousel} from 'react-responsive-carousel';
import {Image} from "@chakra-ui/react"

import Link from 'next/link'
import {CarLink} from "@/components/Cars/SingleCarElement/styles";
 const CarImage = ({images, singleElement}) => {


    return (
        <SingleCarImgCarousel>

            <Carousel showArrows={true} showThumbs={!singleElement} showIndicators={false} useKeyboardArrows={true} swipeable={false} infiniteLoop={true} style={{width: '100%'}}>
                { images && images.map((image, index) =>
                    image &&
                    <div key={index}>
                        {singleElement ?

                            <Image alt={'dsa'} src={image}/>


                        :
                            <img alt={'dsa'} src={image}/>
                        }

                    </div>
                )}
            </Carousel>
      </SingleCarImgCarousel>
    );
};
export default CarImage

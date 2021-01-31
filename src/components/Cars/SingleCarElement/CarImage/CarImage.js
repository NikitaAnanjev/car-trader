import {SingleCarImgCarousel} from './styles'
import {Carousel} from 'react-responsive-carousel';
import {Image} from "@chakra-ui/react"

import Link from 'next/link'
import {CarLink} from "@/components/Cars/SingleCarElement/styles";
 const CarImage = ({images, singleElement}) => {
     const imageSizes = () => {
         let resizedImages = []
         images.map((image) =>
             resizedImages.push(image.replace('l1600', 'l960'))
         )
         return resizedImages
     }

    return (
        <SingleCarImgCarousel>

            <Carousel showArrows={true} showThumbs={!singleElement} showIndicators={false} useKeyboardArrows={true} swipeable={false} infiniteLoop={true} style={{width: '100%'}}>
                { images && imageSizes().map((image, index) =>
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

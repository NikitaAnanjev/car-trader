import {SingleCarItem,CarouselItem} from './styles'
import {Carousel} from 'react-responsive-carousel';
import ReactPlayer from 'react-player'
import { Image } from "@chakra-ui/react"


export const CarImage = ({images, video}) => {



console.log(video)
    return (
        <SingleCarItem>

            <Carousel showArrows={true} showThumbs={true}>
                {video &&  <CarouselItem>
                    <iframe style={{margin: '0', height: '100%', width: '100%'}}
                            frameBorder="0" allowFullScreen allowTransparency="true" mozallowfullscreen
                            webkitAllowFullScreen
                            src={video}/>
                </CarouselItem> }


                {images.map((image, index)=>
                    image &&
                    <div  key={index}>
                        <Image alt={'dsa'}  src={image}/>
                    </div>
                )}
            </Carousel>

                {/*<img  src={images[0]} alt=""/>*/}


            {/*<AwesomeSlider buttons={true}>*/}

            {/*    /!*{video &&  <video src={video}></video>}*!/*/}
            {/*    {images.map((image, index)=>*/}
            {/*        image && <div  key={index} data-src={image} />*/}
            {/*    )}*/}
            {/*</AwesomeSlider>*/}




        </SingleCarItem>
    );
};




import {SingleCarImgCarousel, CarouselItem} from './styles'
import {Carousel} from 'react-responsive-carousel';

export const CarImage = ({images, video}) => {
    return (
        <SingleCarImgCarousel>
            <Carousel showArrows={true} showThumbs={true} showIndicators={false} useKeyboardArrows={true} swipeable={true} infiniteLoop={true} style={{width: '100%'}}>
                {/*{video && <CarouselItem>*/}
                {/*    <iframe style={{margin: '0', height: '100%', width: '100%'}}*/}
                {/*            frameBorder="0" allowFullScreen allowTransparency="true" mozallowfullscreen*/}
                {/*            webkitAllowFullScreen*/}
                {/*            src={video}/>*/}
                {/*</CarouselItem>}*/}
                {images.map((image, index) =>
                    image &&
                    <div key={index}>
                        <img alt={'dsa'} src={image}/>
                    </div>
                )}
            </Carousel>
      </SingleCarImgCarousel>
    );
};




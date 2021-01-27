import {SingleCarImgCarousel} from './styles'
import {Carousel} from 'react-responsive-carousel';

 const CarImage = ({images}) => {


    return (
        <SingleCarImgCarousel>
            <Carousel showArrows={true} showThumbs={true} showIndicators={false} useKeyboardArrows={true} swipeable={false} infiniteLoop={true} style={{width: '100%'}}>
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
export default CarImage

import {CarouselItem} from './styles'

const CarVideo = ({video}) => {



    return (
        <>


            <CarouselItem>
                <iframe style={{margin: '0', height: '100%', width: '100%'}}
                        frameBorder="0" allowFullScreen allowTransparency="true" mozallowfullscreen
                        webkitAllowFullScreen
                        src={video}/>
            </CarouselItem>


        </>
    );
};

export default CarVideo;

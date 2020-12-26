import {SingleCarItem} from './styles'
import AwesomeSlider from 'react-awesome-slider';



export const CarImage = ({images}) => {



    return (
        <SingleCarItem>


                {/*<img  src={images[0]} alt=""/>*/}


            <AwesomeSlider>
                {images.map((image, index)=>
                    image && <div  key={index} data-src={image} />
                )}
            </AwesomeSlider>



            {/*<img  src={images[0]} alt=""/>*/}





        </SingleCarItem>
    );
};




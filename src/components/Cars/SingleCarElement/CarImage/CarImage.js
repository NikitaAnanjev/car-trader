import {SingleCarItem} from './styles'


export const CarImage = ({images}) => {



    return (
        <SingleCarItem>
            <img  src={images[0]} alt=""/>
            {/*{images.map((image, index)=>*/}
            {/*    <img key={index} src={image} alt=""/>*/}
            
            {/*    */}
            
            {/*)}*/}

        </SingleCarItem>
    );
};




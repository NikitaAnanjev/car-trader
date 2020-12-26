import {CarList} from './styles'
import {SingleCarElement} from "./SingleCarElement";


export const Cars = ({data}) => {
    return (
        <CarList>
            {data.map((car) =>
                <SingleCarElement key={car["Id"]} car={car}/>
            )}
        </CarList>
    );
};



import {CarList} from './styles'
import dynamic from "next/dynamic";

const DynamicCars = dynamic(() => import('./SingleCarElement/SingleCarElement'))


const Cars = ({data, priceType}) => {

    //

    const getValue = ({CashPrice}) => CashPrice && +CashPrice.slice(0) || 0;
    const getLeasingValue = ({LeasingPrice}) => LeasingPrice && +LeasingPrice.slice(0) || 0;
    const filtered = data.filter((p) => p["PriceType"] !== 'Leasing' )
     const sortData = () => {
        // return data.sort((a, b) =>  getValue(b) - getValue(a));
        // return filtered.sort((a, b) => !priceType ? getLeasingValue(b) - getLeasingValue(a) : getValue(b) - getValue(a));
        return filtered.sort((a, b) => !priceType ? getLeasingValue(b) - getLeasingValue(a) : getValue(b) - getValue(a));
    }

    return (
        <CarList>
            {sortData().map((car) =>
                <DynamicCars key={car["Id"]} car={car}/>
            )}
        </CarList>
    );
};


export default Cars
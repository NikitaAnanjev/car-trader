import {CarList} from './styles'
import {SingleCarElement} from "./SingleCarElement";

export const Cars = ({data, priceType, allcars}) => {
    const getValue = ({CashPrice}) => CashPrice && +CashPrice.slice(0) || 0;
    const getLeasingValue = ({LeasingPrice}) => LeasingPrice && +LeasingPrice.slice(0) || 0;
    const filtered = data.filter((p) => p["PriceType"] !== 'Leasing' )
    // const filtered = allcars ? data : (!priceType ? data.filter((p) => p["PriceType"] === 'Leasing' ): (data.filter((p) => p["PriceType"] !== 'Leasing' )) )
    const sortData = () => {
        // return data.sort((a, b) =>  getValue(b) - getValue(a));
        return filtered.sort((a, b) => !priceType ? getLeasingValue(b) - getLeasingValue(a) : getValue(b) - getValue(a));
    }

    return (
        <CarList>
            {sortData().map((car) =>
                <SingleCarElement key={car["Id"]} car={car}/>
            )}
        </CarList>
    );
};



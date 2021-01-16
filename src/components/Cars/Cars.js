import {CarList} from './styles'
import {SingleCarElement} from "./SingleCarElement";

// export const Cars = ({data}) => {
export const Cars = ({data, priceType,allcars}) => {

    const getValue = ({CashPrice}) => CashPrice && +CashPrice.slice(0) || 0;
    const getLeasingValue = ({LeasingPrice}) => LeasingPrice && +LeasingPrice.slice(0) || 0;

    const priceTypeValue = priceType ? 'RetailPrice' : 'Leasing'

    const filtered = allcars ? data : data.filter((p) => p["PriceType"] === priceTypeValue)


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



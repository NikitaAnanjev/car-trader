// local libs
import {CarList} from './styles'
import dynamic from "next/dynamic";

const DynamicCars = dynamic(() => import('./SingleCarElement/SingleCarElement'))
const DynamicListCars = dynamic(() => import('./SingleCarListElement/SingleCarListElement'))

const Cars = ({data,view}) => {
    const getValue = ({CashPrice}) => CashPrice && +CashPrice.slice(0) || 0;
    const filtered = data.filter((p) => p["PriceType"] !== 'Leasing')
    const sortData = () => {
        return filtered.sort((a, b) => getValue(b) - getValue(a));
    }
    return (
        <CarList id="carList">
            {sortData().map((car) =>
             <React.Fragment key={car["Id"]}>
                 {view === 'grid'?  <DynamicCars  car={car}/>   :    <DynamicListCars car={car}/>}
             </React.Fragment>
            )}
        </CarList>
    );
};


export default Cars
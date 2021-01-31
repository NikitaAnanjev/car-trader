import {useState, useEffect} from "react";

// local libs
import {CarList} from './styles'
import dynamic from "next/dynamic";
// import {Pagination} from "@/components/Pagination";
import {SingleCarListElement} from './SingleCarListElement'
import {useRouter} from "next/router";
import {useDisclosure, Text, Heading} from "@chakra-ui/react";
const DynamicCars = dynamic(() => import('./SingleCarElement/SingleCarElement'))
const DynamicListCars = dynamic(() => import('./SingleCarListElement/SingleCarListElement'))


const Cars = ({data,view}) => {
    // const [currentPage, setCurrentPage] = useState(1)
    // const [carsPerPage, setCarsPerPage] = useState(6)
    // const {query} = useRouter()

    const getValue = ({CashPrice}) => CashPrice && +CashPrice.slice(0) || 0;
    // const getLeasingValue = ({LeasingPrice}) => LeasingPrice && +LeasingPrice.slice(0) || 0;
    const filtered = data.filter((p) => p["PriceType"] !== 'Leasing')
    const sortData = () => {
        // return data.sort((a, b) =>  getValue(b) - getValue(a));
        return filtered.sort((a, b) => getValue(b) - getValue(a));
        // return filtered.sort((a, b) => !priceType ? getLeasingValue(b) - getLeasingValue(a) : getValue(b) - getValue(a));
    }

    // const indexOfLastCar = currentPage * carsPerPage
    // const indexOfFirstCar = indexOfLastCar - carsPerPage
    // const currentCars = sortData().slice(indexOfFirstCar, indexOfLastCar)

    // const paginate = pageNumber => setCurrentPage(pageNumber)
    // console.log()
    return (
        <CarList id="carList">


            {sortData().map((car) =>
             <React.Fragment key={car["Id"]}>
                 {view ?  <DynamicCars  car={car}/> :    <DynamicListCars car={car}/>}
             </React.Fragment>



            )}
            {/*<Pagination carsPerPage={carsPerPage} totalCars={filtered.length} paginate={paginate}/>*/}
        </CarList>
    );
};


export default Cars
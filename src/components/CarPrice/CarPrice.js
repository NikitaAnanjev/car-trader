import {carPrice} from "@/helper/carPrice";
import NumberFormat from "react-number-format";

export const CarPrice = ({carId}) => {
    if (!carId) {
        return null
    }
    return <NumberFormat value={carPrice(carId)} displayType={'text'} thousandSeparator={true}
                         prefix={'DKK '}/>
};


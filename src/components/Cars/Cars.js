
import {CarList} from './styles'
import {SingleCarElement} from "./SingleCarElement";
import {encode} from "base-64";


const username =  process.env.BIlBASEN_API_LOGIN
const password =  process.env.BIlBASEN_API_PASS
const url = process.env.BIlBASEN_API_URL


export const getStaticProps = async () => {
    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + encode(username + ":" + password),
            'Content-Type': 'application/json'
        }),

    });
    const data = await response.json();

    return {
        props: {
            data,
        },
    };
};



export const Cars = ({data}) => {

    console.log('data',data)

    return (
        <CarList>
            {/*{cars.map((car)=>*/}
            {/*        console.log(car)*/}
            {/*    // <SingleCarElement car={car}/>*/}

            {/*)}*/}

        </CarList>
    );
};




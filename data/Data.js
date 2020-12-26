import {encode} from "base-64";

export const Data = ({cars}) => cars
export const getServerSideProps = async () => {

    const username =  process.env.BIlBASEN_API_LOGIN
    const password =  process.env.BIlBASEN_API_PASS
    const url = process.env.BIlBASEN_API_URL



    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + encode(username + ":" + password),
            'Content-Type': 'application/json'
        }),

    });
    const cars = await response.json();

    return {
        props: {
            cars,
        },
    };
};



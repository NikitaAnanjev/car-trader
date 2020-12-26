import {encode} from "base-64";

export const carsHandler = async (req, res) => {

    const {query: id } = req

    const username = process.env.BIlBASEN_API_LOGIN
    const password = process.env.BIlBASEN_API_PASS
    const url = process.env.BIlBASEN_API_URL


    const response = await fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': 'Basic ' + encode(username + ":" + password),
            'Content-Type': 'application/json'
        }),

    });
    const json = await response.json();



        res.json(json.Vehicles);
}
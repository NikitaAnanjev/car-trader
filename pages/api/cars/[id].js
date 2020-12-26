import {encode} from "base-64";

export default async function handler(req, res) {

    const {
        query: {id},
    } = req

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
    const data = await response.json();

    const filtered = data.Vehicles.filter((p) => p["Id"] === id)

    // User with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered[0])
    } else {
        res.status(404).json({ message: `User with id: ${id} not found.` })
    }
}
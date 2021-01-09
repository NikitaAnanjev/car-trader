import {encode} from "base-64";

export default async (req, res) => {
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


    const data = await response.json();
    const filtered = data.Vehicles
    // const filtered = data.Vehicles.filter((p) => p["PriceType"] === "Leasing" )
    // User with id exists
    if (filtered.length > 0) {
        res.status(200).json(filtered)
    } else {
        res.status(404).json({ message: `Car not found.` })
    }
    // res.json( json.Vehicles)
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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
    const json = await response.json();


    res.json(json.Vehicles)
}

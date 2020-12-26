// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {encode} from "base-64";

export default async (req, res) => {

  const username = 'Piralux-auto';
  const password = 'r3xiZ2tApC';
  const url = 'https://gw.bilinfo.net/listingapi/api/export'


  const response = await fetch(url, {
    method: 'GET',
    headers: new Headers({
      'Authorization': 'Basic ' + encode(username + ":" + password),
      'Content-Type': 'application/json'
    }),

  });
  const json = await response.json();


  res.json(json)
}

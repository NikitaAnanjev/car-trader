import axios from "axios";

export const CarDetails = ({car}) => {

    if(!car) {
        return <h1> Sorry, car not found!s</h1>
    }


    return <div> {JSON.stringify(car,null,2)}</div>
    // return <div> {car['Make']}</div>
}



export async function getStaticProps(context) {

    const id = context.params.id
    // 426635361

        const username =  process.env.BIlBASEN_API_LOGIN
        const password =  process.env.BIlBASEN_API_PASS
        const url = process.env.BIlBASEN_API_URL

        const response = await axios.get(url, {
            auth: {
                username: username,
                password: password
            }

        }).then((r) => {
              r.data.filter((p) => p["Id"] === id)
            })
        const {data} = await response;

    const car = data.Vehicles.filter((p) => p["Id"] === id)




    return {
        props: {data}, // will be passed to the page component as props
    }
}
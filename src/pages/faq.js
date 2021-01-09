import axios from 'axios';


export const Faq = ({data}) => {


    return (
        <div>
c            FAQ
        </div>
    );
};

export const getServerSideProps  = async () => {


    const username = 'Piralux-auto'
    const password = 'r3xiZ2tApC'
    const url = 'https://gw.bilinfo.net/listingapi/api/export'


    const res = await axios.get(url, {
        auth: {
            username: username,
            password: password
        }

    });

    const carList = await res.data

    return {
        props: {
            carList,
        },
    };
};

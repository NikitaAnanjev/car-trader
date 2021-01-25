import useSWR from "swr";
import {LoadingIconWrap} from "@/components/styles";
import {CircularProgress} from "@chakra-ui/react";
import slugify from "react-slugify";

const fetcher = (url) => fetch(url).then((res) => res.json())

export const RelatedCars = ({make}) => {



    const {data, error} = useSWR('/api/cars', fetcher)

    if (error) return <LoadingIconWrap>Failed to load</LoadingIconWrap>
    if (!data) return <LoadingIconWrap><CircularProgress isIndeterminate color="red.300"/></LoadingIconWrap>

    const filtered = make ? data.filter((p) => slugify(p["Make"]) === make) : data

    console.log('filtered',filtered)

    return (
        <div>
            Related Cars
        </div>
    );
};


import Fuse from 'fuse.js'
import {Input, InputGroup, InputRightElement, Menu, MenuButton, useBreakpointValue} from "@chakra-ui/react"
import {Search2Icon} from "@chakra-ui/icons";
import useSWR from "swr";
import {useState, useRef, useEffect, useCallback} from 'react'
import {DropDownResults} from "@/components/SearchPanel/DropDownResults";

const fetcher = (url) => fetch(url).then((res) => res.json())


export const SearchBar = () => {

    const isMobile = useBreakpointValue({base: true, sm: true, md: false})
    const [show, setShow] = useState(Boolean(false))
    /**
     * Hook that alerts clicks outside of the passed ref
     */
    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setShow(Boolean(false))
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            // document.addEventListener("mouseover", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
                // document.removeEventListener("mouseover", handleClickOutside);
            };
        }, [ref]);
    }


    const [query, setQuery] = useState('')
    const [barOpen, setBarOpen] = useState(Boolean(true))
    const wrapperRef = useRef(null);
    // const listRef = useRef(null);
    useOutsideAlerter(wrapperRef);
    // useOutsideAlerter(listRef);

    const handleOnSearch = ({currentTarget = {}}) => {
        if (!show) {
            setShow(Boolean(true))
        }
        const {value} = currentTarget
        setQuery(value)
    }
    const onClickLink = useCallback(() => {
            if (!show) {
                setShow(Boolean(false))
            }
        },
        [],
    );

    const onClickReset = () => {
        if (query.length > 0) {
            setQuery('')
        }
    }

    const {data} = useSWR('/api/cars', fetcher)
    const filtered = data.filter((p) => p["PriceType"] !== 'Leasing')
    const fuse = new Fuse(filtered, {
        keys: ['Make', 'Year', 'Model', 'Comment', 'EquipmentList'],
        includeScore: true,
        shouldSort: true,
        threshold: 0.4
    })

    const searchResults = fuse.search(query)
    const characterResults = searchResults.map(result => result.item)
    const finalResult = characterResults.slice(0, 10)

    // console.log(fuse.search('BMW'))

    return (

        <>
            <InputGroup mr={10} ref={wrapperRef}  maxW="400px" w={barOpen ? {md:"50%",lg:"100%"} : '0'} bg="gray.800">

                <Input onClick={onClickReset} bg="gray.800" type="text" placeholder="Søg..." value={query}
                       onChange={handleOnSearch}/>
                <InputRightElement
                    children={<Search2Icon color="gray.300"/>}
                />
                {show && <DropDownResults onClickLink={onClickLink} show={show} finalResult={finalResult}/>}
            </InputGroup>
        </>
    );
};

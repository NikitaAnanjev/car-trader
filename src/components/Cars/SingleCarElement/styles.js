import styled from '@emotion/styled'
import Link from 'next/link'

import {Box} from "@chakra-ui/react"

export const SingleCarItem = styled('div')`
display: flex;
margin:16px 16px 0 16px ;
flex-grow: 1;
flex-direction: column;
flex-basis: 25%;

`
export const SingleCarItemInner = styled('div')`
display: flex;
padding: 10px;
margin: 0 16px 16px 16px;
border-radius: 8px;
border: 1px solid gray;
flex-grow: 1;
flex-direction: column;
`
export const SinglePageContainer = styled('div')`
display: flex;
width: 100%;
flex-direction: row;
`


export const CarContent = styled('div')`
display: flex;
flex-direction: column;
`

export const CarImageContainer = styled('div')`
display: flex;
width: 40%;
`
export const EuroNormBadge = styled('div')`
position: absolute;
border: 1px solid black;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 60px;
width: 60px;
border-radius: 50%;
background: #ddd7d7;
right: 0;
top: 50%;
span,p {
color: black;
font-weight: bold;
}

p{
font-size: 8px;
}
`
export const CardContainer = styled(Box)`
position: relative;
&:hover{
box-shadow: rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;
transition: box-shadow 0.1s ease;
}
transition: box-shadow 0.1s ease;

`

export const CarLink = styled(Link)``
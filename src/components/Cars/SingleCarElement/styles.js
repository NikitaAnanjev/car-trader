import styled from '@emotion/styled'
import Link from 'next/link'

import {Box, Flex, IconButton} from "@chakra-ui/react"

export const SingleCarItem = styled(Flex)`
flex-grow: 1;
flex-direction: column;
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
export const SinglePageContainer = styled(Flex)`
width: 100%;
`

export const CarContent = styled(Flex)`
border-radius: 8px;
flex-direction: column;
width: 100%;
`

export const CarImageContainer = styled(Flex)`
width: 100%;
position: relative;
border-radius: 8px;
overflow: hidden;
`
export const ImgCarouselConteiner = styled.div`
width: 100%;
&:hover {
cursor: pointer;
}
`

export const EuroNormBadge = styled('div')`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 41px;
width: 41px;
background: #f52734;
left: 0;
top: 11%;
padding: 1px;
span,p {
color: white;
font-weight: bold;
}

p{
font-size: 8px;
}
`
export const CardContainer = styled(Box)`
position: relative;
&:hover{
cursor: pointer;
opacity: .9;
box-shadow: rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.3) 0 4px 6px -2px;
transition: box-shadow 0.1s ease;
}
transition: box-shadow 0.1s ease;
`

export const CarLink = styled(Link)`


`
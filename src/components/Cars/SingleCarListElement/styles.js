import styled from '@emotion/styled'
import {

    Flex,

} from "@chakra-ui/react"

export const CarListElementContainer = styled(Flex)`
width: 100%;
`

export const CarListElementWrapper = styled(Flex)`
width: 100%;
flex-direction: row;
flex: 1 2 100%;
border-radius: 8px;
`

export const ContentWrapper = styled(Flex)`

`

export const ImgWrapper = styled.div`
width: 100%;
position:relative;
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
bottom: 0;
padding: 1px;
span,p {
color: white;
font-weight: bold;
}

p{
font-size: 8px;
}
`
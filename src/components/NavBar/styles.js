import styled from '@emotion/styled'
import {Flex,Box} from "@chakra-ui/react"
import { jsx, css, keyframes } from '@emotion/react'
export const activeStroke = keyframes`
  0%   {width: 0;}
 
  100% {width: 100%;}
`

export const NavBarLogo = styled(Flex)`
display: flex;
max-width: 200px;
&:hover {
cursor: pointer;
}
`


export const ActiveIndicator = styled(Box)`

  animation-fill-mode: forwards;  
  height: 2px;
  background:red;

`

export const MenuItem = styled(Flex)`
flex-direction: column;
height: 40px;
padding: 0 0.5rem;
justify-content: center;
align-items: center;
&:hover {
color: red;
cursor: pointer;

}
`

export const NavList = styled('div')`
display: flex;
width: 100%;
`

export const SearchNavBar = styled(Box)`
display: flex;
flex-grow: 1;
justify-content: flex-end;
`

export const NavBarContainer = styled(Flex)`
background: linear-gradient(145deg, #000000, #2a3744);
z-index: 100;
width: 100%;
flex-direction: column;
`
export const NavBarWrap = styled(Flex)`
z-index: 100;
width: 100%;
color: white;
justify-content: space-between;
align-items: center;
a {
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif!important;
}
`
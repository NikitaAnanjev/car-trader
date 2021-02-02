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
export const MenuItem = styled(Flex)`
flex-direction: column;
height: 40px;
padding: 0 0.5rem;
justify-content: center;
align-items: center;
&:hover {
cursor: pointer;
}
`

export const NavList = styled('div')`
display: flex;
width: 100%;
`

export const ActiveIndicator = styled(Box)`

  animation-fill-mode: forwards;  
  height: 2px;
  background:red;

`

export const SearchNavBar = styled('div')`
display: flex;
flex-grow: 1;
margin-right: 2.5rem;
justify-content: flex-end;
`

export const NavBarContainer = styled(Flex)`
background: linear-gradient(145deg, #000000, #2a3744);
// background: ${({theme}) => theme.colors.gray["900"]};
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
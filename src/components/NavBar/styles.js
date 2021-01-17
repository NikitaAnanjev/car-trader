import styled from '@emotion/styled'
import {Flex} from "@chakra-ui/react"

export const NavBarLogo = styled(Flex)`
display: flex;
max-width: 200px;
&:hover {
cursor: pointer;
}
`
export const NavList = styled('div')`
display: flex;
`
export const SearchNavBar = styled('div')`
display: flex;
flex-grow: 1;
flex-basis: 50%;
justify-content: center;
`

export const NavBarContainer = styled(Flex)`
background: ${({theme}) => theme.colors.gray["900"]};
z-index: 100;
width: 100%;
color: white;
justify-content: space-between;
align-items: center;

`
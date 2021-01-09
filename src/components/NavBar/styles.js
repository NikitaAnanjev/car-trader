import styled from '@emotion/styled'
import {Box, Flex, Image} from "@chakra-ui/react"
export const NavBarLogo = styled('div')`
display: flex;
width: 200px;
&:hover {
cursor: pointer;
}
`
export const NavList = styled('div')`
display: flex;
`
export const SearchNavBar = styled('div')`
display: flex;
width: 100%;

justify-content: center;
`

export const NavBarContainer = styled(Flex)`
background: ${({theme})=> theme.colors.gray["900"]};
z-index: 100;
width: 100%;
color: white;
justify-content: space-between;
`
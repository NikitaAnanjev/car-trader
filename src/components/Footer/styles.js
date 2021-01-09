import styled from '@emotion/styled'

import {Box, Badge, Image, Flex, Text, Heading, Divider} from "@chakra-ui/react"

export const FooterContainer = styled(Flex)`
  padding: 4rem;
  width: 100%;
  height: 60vh;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({theme})=> theme.colors.gray['800']};
`

export const FooterItem = styled(Flex)`
flex-direction: column;
flex-grow: 1;
padding: 2rem;
color: white;
flex-basis: 15%;

span {
margin-right: 1rem;
}
`


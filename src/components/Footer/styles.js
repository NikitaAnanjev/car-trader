import styled from '@emotion/styled'

import {Flex,} from "@chakra-ui/react"

export const FooterContainer = styled(Flex)`

  width: 100%;
  min-height: 60vh;
  flex-wrap: wrap;
  background: ${({theme}) => theme.colors.gray['800']};
  
  
`

export const FooterItem = styled(Flex)`
flex-direction: column;

padding: 2rem;
color: white;

span {
margin-right: 1rem;
}
`


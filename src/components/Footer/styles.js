import styled from '@emotion/styled'

import {Flex} from "@chakra-ui/react"

export const FooterContainer = styled(Flex)`
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  background: url("/bg/car-right-piraluxauto.jpg") no-repeat center right;
  background-size: cover;
  z-index: 50;
`

export const FooterItem = styled(Flex)`
  flex-direction: column;
  padding: 2rem;
  color: white;
  z-index: 100;
span {
  margin-right: 1rem;
}
`

export const Overflow = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
   background: ${({theme}) => theme.colors.gray['800']};  
  opacity: .8;
`


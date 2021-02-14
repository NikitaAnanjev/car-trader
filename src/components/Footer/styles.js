import styled from '@emotion/styled'

import {Flex} from "@chakra-ui/react"

export const FooterContainer = styled(Flex)`
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  background: url("/bg/blck-pira.jpg") no-repeat center right;
  background-size: cover;
  z-index: 50;
  height: 100%;
  min-height: 80vh;
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
background: rgb(23,25,35);
background: linear-gradient(180deg, rgba(23,25,35,1) 10%, rgba(23,25,35,1) 18%, rgba(23,25,35,0.20211834733893552) 100%);
`


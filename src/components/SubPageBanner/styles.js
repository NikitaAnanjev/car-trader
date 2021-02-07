import styled from '@emotion/styled'

import {Box} from "@chakra-ui/react"

export const SubPageBannerContainer = styled(Box)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: url("./bg/blur.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 4rem;
  
  @media all and (max-width: 768px){

  background-position: left;
  }
`


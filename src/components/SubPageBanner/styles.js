import styled from '@emotion/styled'

import {Box} from "@chakra-ui/react"

export const SubPageBannerContainer = styled(Box)`
  
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background: url("bg/drommebil.jpg");
  //background-repeat: no-repeat;
  //background-size: cover;
  //background-position: center;
  
  @media all and (max-width: 768px){
  
  background-position: left;
  //background-size: contain;
  }
`


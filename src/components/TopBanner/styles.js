import styled from '@emotion/styled'

import {Box} from "@chakra-ui/react"

export const TopBannerContainer = styled(Box)`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: url("/piralux-r8-audi.jpg")  no-repeat center;
  background-size: cover;

  @media all and (max-width: 768px) {
  height: 45vh;
  background-position: center;
   background-size: contain;
  }
  @media all and (max-width: 640px) {
    background-size: cover;
   background: url("bg/blck-pira.jpg")  no-repeat left;
   height: 40vh;
  }

`


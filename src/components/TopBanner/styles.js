import styled from '@emotion/styled'

import {Box} from "@chakra-ui/react"

export const TopBannerContainer = styled(Box)`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: url("/piralux-r8-audi.jpg")  no-repeat center;
  background-size: cover;

  @media all and (max-width: 768px) {
   background-position: center;

  }
  @media all and (max-width: 640px) {
    background-size: cover;
  }

`


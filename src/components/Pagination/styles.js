import styled from '@emotion/styled'

import {Box} from "@chakra-ui/react"

export const PaginationContainer = styled.div`
  
  width: 100%;
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const Item = styled('div')`
background: ${({theme}) => theme.colors.gray['900'] };
width: 40px;
height: 40px;
 background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 8px;
  &:hover, &:active {
  
background: ${({theme}) => theme.colors.gray['400'] };
  }
`


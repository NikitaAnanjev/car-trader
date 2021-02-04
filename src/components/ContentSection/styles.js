import styled from '@emotion/styled'

import {Box, Flex} from "@chakra-ui/react"

export const ContentSectionContainer = styled(Box)`
display: flex;
min-height: 40vh;
width: 100%;
justify-content: center;
align-items: center;
padding: 3rem 0;

background-color:${({theme})=> theme.colors.gray['700']};
&:nth-of-type(2n) {
background-color:${({theme})=> theme.colors.gray['800']};
}
`

export const ContentSectionRow = styled(Flex)`
width: 90%;  
align-items: center;
`

import styled from '@emotion/styled'

import {Box, Flex} from "@chakra-ui/react"

export const ContentSectionContainer = styled(Box)`
display: flex;
min-height: 40vh;
width: 100%;
justify-content: center;
align-items: center;
padding: 3rem 0;
background-color: ${({light,theme})=> light ? theme.colors.gray['800'] : theme.colors.gray['700']};
`

export const ContentSectionRow = styled(Flex)`
// flex-direction: ${({reverse})=> reverse ? "row-reverse" : 'row'};
width: 90%;  
align-items: center;
`

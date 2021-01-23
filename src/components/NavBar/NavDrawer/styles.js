import styled from '@emotion/styled'
import {Box} from "@chakra-ui/react"

export const MenuItemChakra = styled(Box)`

padding: 1rem 2rem;

background:${({active, theme}) => active && theme.colors.gray['700']};
color: ${({active, theme}) => active ? theme.colors.gray['100'] :theme.colors.gray['200']  };
${({active}) => active && 'font-weight: bold;'};



&:hover, &:active, &:focus {
cursor: pointer;
font-weight: bold;
color: ${({theme}) => theme.colors.gray['100']}; 

}
`
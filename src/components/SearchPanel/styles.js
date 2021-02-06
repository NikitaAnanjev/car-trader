import styled from '@emotion/styled'
import {Box, Select} from "@chakra-ui/react"
import {Form} from "formik";

export const SearchPanelContainer = styled(Box)`
    display: flex;
    flex-flow: wrap row;
    padding: ${({isfixed}) => isfixed ? ' 0' : '1.5rem'};
    background: ${({theme, isfixed}) => !isfixed ? theme.colors.gray['800'] : 'transparent'};

`

export const SelectInput = styled(Select)`
    option {
    color: #111111;
    }
`

import styled from '@emotion/styled'
import {Box} from "@chakra-ui/react"
import {Form} from "formik";

export const SearchPanelContainer = styled(Box)`
    display: flex;
    flex-flow: wrap row;
    padding: ${({isFixed}) => isFixed ? ' 0' : '1.5rem'};
    background: ${({theme,isFixed}) => !isFixed ? theme.colors.gray['800'] : 'transparent'};
`

export const FormikForm = styled(Form)`
    display: flex;
    flex-grow: 1;
    background: ${({theme}) => theme.colors.brand};
    justify-content: flex-end;
    align-items: center;
`

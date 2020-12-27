import styled from '@emotion/styled'
import {Box} from "@chakra-ui/react"
import {Form} from "formik";
export const SearchPanelContainer = styled(Box)`
    display: flex;
    width: 100%;
    flex-flow: wrap row;
    padding: 16px;
    border: 1px solid black;
`

export const FormikForm = styled(Form)`
    display: flex;
    width: 80%;
    justify-content: space-between;
`

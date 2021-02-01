import styled from '@emotion/styled'

export const CarList = styled('div')`
display: flex;
flex-flow: wrap row;
width: 100%;
justify-content: flex-end;
padding: 40px 0;
`

export const PageLayout = styled('div')`
background: ${({theme}) => theme.colors.gray['900'] };
`
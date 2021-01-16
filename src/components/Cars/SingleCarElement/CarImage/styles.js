import styled from '@emotion/styled'

export const SingleCarItem = styled('div')`
display: flex;
padding: 16px;
flex-grow: 1;
flex-basis: 25%;
position: relative;
.thumbs-wrapper {
 max-width: 700px;
}
`
export const SingleCarItemInner = styled('a')`
display: flex;
padding: 10px;
border-radius: 8px;
border: 1px solid gray;
flex-grow: 1;
flex-direction: column;
`
export const CarouselItem = styled('div')`
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
`
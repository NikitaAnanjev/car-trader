import styled from '@emotion/styled'

export const SingleCarImgCarousel = styled('div')`
display: flex;
padding: 16px;
flex-grow: 1;
position: relative;
width: 100%;

.carousel-root {
width: 100%;
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
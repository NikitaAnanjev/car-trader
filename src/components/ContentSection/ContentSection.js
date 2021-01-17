import {ContentSectionContainer, ContentSectionRow} from './styles'

export const ContentSection = ({children, reverse, light}) => {

    return (
        <ContentSectionContainer light={light}>
            <ContentSectionRow direction={{base: 'column', md: reverse ? "row-reverse" : 'row'}}>
                {children}
            </ContentSectionRow>
        </ContentSectionContainer>
    );
};



import {ContentSectionContainer, ContentSectionRow} from './styles'

export const ContentSection = ({children, reverse, light}) => {

    return (
        <ContentSectionContainer light={light}>
            <ContentSectionRow direction={{sm: 'column', md: reverse ? "row-reverse" : 'row'}}>
                {children}
            </ContentSectionRow>
        </ContentSectionContainer>
    );
};



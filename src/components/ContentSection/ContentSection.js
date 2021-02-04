import {ContentSectionContainer, ContentSectionRow} from './styles'

export const ContentSection = ({children, reverse}) => {

    return (
        <ContentSectionContainer >
            <ContentSectionRow direction={{base: 'column', md: reverse ? "row-reverse" : 'row'}}>
                {children}
            </ContentSectionRow>
        </ContentSectionContainer>
    );
};



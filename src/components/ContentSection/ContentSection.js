import {ContentSectionContainer,ContentSectionRow} from './styles'

export const ContentSection = ({children}) => {

    return (
        <ContentSectionContainer>
        <ContentSectionRow>
            {children}
        </ContentSectionRow>
        </ContentSectionContainer>
    );
};



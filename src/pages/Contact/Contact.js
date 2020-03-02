import React, {useState, useEffect} from "react";
import { PageContainer, LeftContainer, HeaderText, ParagraphText, RightContainer, LoadingSpinner } from "components/components";
import Aux from "hoc/Aux/Aux";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1500);
    },[]);

    return(
        <PageContainer>
            {isLoading ? 
            <LoadingSpinner isLoading={isLoading}/> : 
            <Aux>
                <LeftContainer>
                    <HeaderText>Contact Me</HeaderText>
                    <ParagraphText>Contact info here</ParagraphText>
                </LeftContainer>
                <RightContainer>
                    Icons here
                </RightContainer>
            </Aux>
            }
        </PageContainer>
    )
}

export default Contact;
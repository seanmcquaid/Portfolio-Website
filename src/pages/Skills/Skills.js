import React, {useState, useEffect} from "react";
import { HeaderText, PageContainer, LeftContainer, RightContainer, ParagraphText, LoadingSpinner } from "components/components";
import Aux from "hoc/Aux/Aux";

const Skills = () => {
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
                        <HeaderText>Skills</HeaderText>
                        <ParagraphText>Text about Skills here</ParagraphText>
                    </LeftContainer>
                    <RightContainer>
                        Skills here
                    </RightContainer>
                </Aux>
            }
        </PageContainer>
    )
};

export default Skills;
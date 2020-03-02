import React, {useEffect, useState} from "react";
import { PageContainer, HeaderText, LeftContainer, RightContainer, ParagraphText, LoadingSpinner } from "components/components";
import Aux from "hoc/Aux/Aux";

const Projects = () => {
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
                        <HeaderText>Projects</HeaderText>
                        <ParagraphText>Info here</ParagraphText>
                    </LeftContainer>
                    <RightContainer>
                        Projects here
                    </RightContainer>
                </Aux>
            }
        </PageContainer>
    )
};

export default Projects;
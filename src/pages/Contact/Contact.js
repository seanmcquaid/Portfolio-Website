import React, {useState, useEffect} from "react";
import { HeaderText, ParagraphText, LoadingSpinner } from "components/components";
import Aux from "hoc/Aux/Aux";
import styled, {keyframes} from "styled-components";
import {IoLogoLinkedin, IoLogoGithub, IoIosPaper} from "react-icons/io";
import resume from "images/Sean McQuaid - Resume.pdf";

const Contact = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1500);
        return () => clearTimeout(timer);
    },[]);

    return(
        <ContactPageContainer id="contactPage" data-testid="contactPage">
            {isLoading ? 
            <LoadingSpinner isLoading={isLoading}/> : 
            <Aux>
                <LeftContainer>
                    <HeaderText id="contactPageHeader" data-testid="contactPageHeader">Contact Me</HeaderText>
                    <ParagraphText id="contactInfoText" data-testid="contactInfoText">If you would like to contact me, I would love to hear from you! Feel free to contact me through my email, check out my LinkedIn or GitHub, or even look at my Resume!</ParagraphText>
                </LeftContainer>
                <RightContainer>
                    <ContactList>
                        <ContactListItem>
                            <ContactListItemLink href="https://www.linkedin.com/in/sean-mcquaid-292b3588/" target="blank" id="linkedInLink" data-testid="linkedInLink">
                                <IoLogoLinkedin/>
                                <ContactListItemLinkLabel>LinkedIn</ContactListItemLinkLabel>
                            </ContactListItemLink>
                        </ContactListItem>
                        <ContactListItem>
                            <ContactListItemLink href="https://github.com/seanmcquaid" target="blank" id="gitHubLink" data-testid="gitHubLink">
                                <IoLogoGithub/>
                                <ContactListItemLinkLabel>GitHub</ContactListItemLinkLabel>
                            </ContactListItemLink>
                        </ContactListItem>
                        <ContactListItem>
                            <ContactListItemLink href={resume} target="blank" id="resumeLink" data-testid="resumeLink">
                                <IoIosPaper/>
                                <ContactListItemLinkLabel>Resume</ContactListItemLinkLabel>
                            </ContactListItemLink>
                        </ContactListItem>
                    </ContactList>
                </RightContainer>
            </Aux>}
        </ContactPageContainer>
    );
};

const ContactPageContainer = styled.div`
    margin : 0 auto;
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    @media (max-width : 975px){
        flex-direction : column;
        margin : auto;
    }
`;

const ContactList = styled.ul`
    display : flex;
    flex-direction : row;
    justify-content : center;
    align-items : center;
    width: 100%;
    padding: 0;
    list-style: none;
`;

const ContactListItem = styled.li`
    margin : 1.5rem
`;

const fadeInAnimation = keyframes`
    0% { 
        opacity: 0; 
    } 
    100% { 
        opacity: 1; 
    } 
`;


const ContactListItemLinkLabel = styled.span`
    font-size : 1rem;
    margin : 0.25rem;
    visibility : hidden;
`;

const ContactListItemLink = styled.a`
    text-decoration : none;
    font-size : 2.5rem;
    color : #ffffffb6;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    &:hover ${ContactListItemLinkLabel} {
        visibility : visible;
        transition : 0.25s;
        animation: ${fadeInAnimation} ease 1s; 
        animation-iteration-count: 1; 
        animation-fill-mode: forwards;
      }
`;

const LeftContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : flex-start;
    width : 100%;
    height : 100%;
    max-height : 300px;
    max-width : 550px;
    margin : 0 1rem;
    animation: ${fadeInAnimation} ease 2s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
    @media(max-width : 975px){
        justify-content : center;
        align-items : center;
        margin : 1rem 0;
    }
    @media (max-width : 520px){
        max-height : 100%;
        max-width : 100%;
    }
`;

const RightContainer = styled.div`
    display : flex;
    width : 100%;
    height : 100%;
    max-width : 300px;
    max-height : 300px;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    margin : 0 1rem;
    animation: ${fadeInAnimation} ease 1s; 
    animation-iteration-count: 1; 
    animation-fill-mode: forwards;
    @media (max-width : 975px){
        margin : 1rem 0;
    }
    @media (max-width : 520px){
        max-height : 100%;
        max-width : 100%;
    }
`;

export default Contact;
import React, {useState, useEffect} from "react";
import { PageContainer, LeftContainer, HeaderText, ParagraphText, RightContainer, LoadingSpinner } from "components/components";
import Aux from "hoc/Aux/Aux";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {IoLogoLinkedin, IoLogoGithub, IoIosPaper} from "react-icons/io";

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
                    <ParagraphText>If you would like to contact me, I would love to hear from you! Feel free to contact me through my email, check out my LinkedIn or GitHub, or even look at my Resume!</ParagraphText>
                </LeftContainer>
                <RightContainer>
                    <ContactList>
                        <ContactListItem>
                            <ContactListItemLink>
                                <IoLogoLinkedin/>
                            </ContactListItemLink>
                        </ContactListItem>
                        <ContactListItem>
                            <ContactListItemLink>
                                <IoLogoGithub/>
                            </ContactListItemLink>
                        </ContactListItem>
                        <ContactListItem>
                            <ContactListItemLink>
                                <IoIosPaper/>
                            </ContactListItemLink>
                        </ContactListItem>
                    </ContactList>
                </RightContainer>
            </Aux>
            }
        </PageContainer>
    )
};

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

const ContactListItemLink = styled(Link)`
    text-decoration : none;
    font-size : 2.5rem;
    color : #00000096;
`;

export default Contact;
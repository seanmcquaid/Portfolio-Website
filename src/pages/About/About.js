import React, {useState, useEffect} from "react";
import {PageContainer, ParagraphText, HeaderText, LeftContainer, RightContainer, Headshot, LoadingSpinner} from "components/components";
import trumpetHeadshot from "images/trumpetHeadshot.jpg";
import Aux from "hoc/Aux/Aux";

const About = () => {
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
                    <HeaderText>About</HeaderText>
                    <ParagraphText>After completing a Bachelor's Degree in Music Business and a Master's Degree in Jazz Studies, I started my career at Atlanta's largest retail music store in order to get a first-hand look at the music industry. Once I realized that I wanted to work a job that would allow me more time to perform, I decided to start working at Georgia State University as an Academic Advisor within the College of the Arts. I felt that this position would allow me the opportunity to really help students and directly impact their success. I loved helping the students but found that I was unable to exercise my creative problem-solving skills. This is when I discovered computer programming!</ParagraphText>
                    <ParagraphText>After deciding to research this field further, I discovered freeCodeCamp, a free resource designed to help people learn computer programming. I decided to pursue this further and registered for the website. I found myself studying for hours on end during all of my free time and after self-studying for nearly five months, I decided to enroll in DigitalCrafts, a coding bootcamp where I studied Full Stack Development.</ParagraphText>
                    <ParagraphText>My passion for development has only grown since starting DigitalCrafts and I am thrilled to be able to put my skills into the field, where they belong. Working at a corporation like Chick-fil-A has allowed me to dive into a massive microservice based architecture and really understand the context of how being a Software Engineer impacts business. I am still continuing to learn since the bootcamp and have picked up Java, SpringBoot, MongoDB, Cypress.io, and many other new tools!</ParagraphText>
                </LeftContainer>
                <RightContainer>
                    <Headshot src={trumpetHeadshot} alt="trumpetHeadshot"/>
                </RightContainer>
            </Aux>}
        </PageContainer>
    )
};

export default About;
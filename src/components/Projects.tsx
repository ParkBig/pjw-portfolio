import styled from "styled-components";
import { ProjectContent } from "../type/interface";
import Slider from "react-slick";

import leftArrow from "../asset/png/left-arrow.png";
import rightArrow from "../asset/png/right-arrow.png";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";


const Projects = ({prop} : {prop: ProjectContent}) => {
  const [visible, setVisible] = useState(0);

  const nextPlease = () => {
    setVisible((prev) => (prev === prop.image.length-1 ? prop.image.length-1 : prev + 1));
  };
  const prevPlease = () => {
    setVisible((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const slider = {
    initial: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: { 
        duration: 1 
      } 
    },
    exit:  {
      opacity: 0,
      transition: { 
        duration: 1
      } 
    }
  }

  return (
    <Wrap>
      <UpperName>
        <ProjectName>
          {prop.name}
        </ProjectName>
        <SubName>
          {prop.subName}
        </SubName>
      </UpperName>
      <UpperImg>
        <SlideBtn left={true} onClick={prevPlease}>
          <Arrow src={leftArrow}/>
        </SlideBtn>
        <AnimatePresence>
          <UpperImag>
            <Imag src={prop.image[visible]} />
          </UpperImag>
        </AnimatePresence>
        <SlideBtn left={false} onClick={nextPlease}>
          <Arrow src={rightArrow}/>
        </SlideBtn>
      </UpperImg>
      <UpperDescription>
        <Description left={true}>
          {prop.explain}
        </Description>
        <Description left={false}>
          <UpperContent>
            <ContentName>
              주요기능
            </ContentName>
            <Content>
              {prop.mainFuc}
            </Content>
          </UpperContent>
          <UpperContent>
            <ContentName>
              Tech Stack
            </ContentName>
            <Content>
              {prop.stack}
            </Content>
          </UpperContent>
          <UpperContent>
            <ContentName>
              GitHub
            </ContentName>
            <Content>
              <a href={prop.github}>
                {prop.github}
              </a>
            </Content>
          </UpperContent>
          {(prop.url !== "") &&
            <UpperContent>
              <ContentName>
                Url
              </ContentName>
              <Content>
                <a href={prop.url.split(" ")[1] ? "" : prop.url }>
                  {prop.url}
                </a>
              </Content>
            </UpperContent>
          }
          {(prop.deployment !== "") &&
            <UpperContent>
              <ContentName>
                Deployment
              </ContentName>
              <Content>
                {prop.deployment}
              </Content>
            </UpperContent>
          }
        </Description>
      </UpperDescription>
    </Wrap>
  )
}

export default Projects;

const Wrap = styled.div`
  height: 1000px;
  width: 100%;
  padding: 0 40px 40px 40px;
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 30px;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 1024px) {
    height: 1200%;
  }
`;
const UpperName = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const ProjectName = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  font-size: 5em;
`;
const SubName = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2em;
  color: gray;
`;
const UpperImg = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid gray;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.6);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;
const SlideBtn = styled.button<{ left: boolean}>`
  width: 5%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border: none;
  border-top-right-radius:  ${prop => prop.left && "20px"};
  border-bottom-right-radius:  20px;
  border-top-left-radius:  ${prop => !prop.left && "20px"};
  border-bottom-left-radius: 20px;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #FFF4E0;
  }
`;
const Arrow = styled.img`
  width: 80%;
`;
const UpperImag = styled(motion.div)`
  width: 90%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.6s;
`;
const Imag = styled(motion.img)`
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpperDescription = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 1024px) {
    height: 450px;
  }
`;
const Description = styled.div<{ left: boolean }>`
  height: 90%;
  width: 48%;
  padding: ${prop => prop.left ? "0 10px 0 0" : "0 0 0 10px"};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-right: ${prop => prop.left ? "1px solid gray" : null};
  text-align: left;
  font-size: 1.5em;
`;
const UpperContent = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentName = styled.div`
  width: 25%;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;
  font-weight: bold;
`;
const Content = styled.div`
  width: 75%;
  display: flex;
  justify-content: left;
  align-items: center;
  text-align: left;

  a {
    &:hover {
      color: tomato;
    }
  }
`;

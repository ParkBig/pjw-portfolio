import styled from "styled-components";
import { Link } from 'react-scroll';
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const traceScroll = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(false);

  const handleScroll = () => {
      if(window.scrollY >= 71){
        setScrollHeight(true);
      }else{
        setScrollHeight(false);
      }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, [])

  return (
    <Wrap ref={traceScroll} scrollHeight={scrollHeight}>
      <Title>
        <Link to="home" spy={true} smooth={true}>
          PJW's Portfolio
        </Link>
      </Title>
      <UpperNavigation>
        <Navigation>
          <Link to="home" spy={true} smooth={true}>
            Me
          </Link>
        </Navigation>
        <Navigation>
          <Link to="sec" spy={true} smooth={true}>
            Skills
          </Link>
        </Navigation>
        <Navigation>
          <Link to="thr" spy={true} smooth={true}>
            Project
          </Link>
        </Navigation>
      </UpperNavigation>
    </Wrap>
  )
};

export default NavBar;

const Wrap = styled.div<{ scrollHeight: boolean }>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${prop => prop.scrollHeight ? "#F7F1E5" : "transparent"};
  position: fixed;
  box-shadow: ${prop => prop.scrollHeight ? "0px 1px 1px rgba(0, 0, 0, 0.6)" : null};
  color: ${prop => prop.scrollHeight ? "#40513B" : "#E7B10A"};
  font-size: 3em;
  font-weight: 600;

  -webkit-text-stroke: ${prop => prop.scrollHeight ? null : "0.5px #E7B10A"};
`;
const Title = styled.div`
  height: 100%;
  width: 40%;
  margin-left: 5%;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  a {
    padding: 10px;
  }
`;
const UpperNavigation = styled.div`
  height: 100%;
  width: 40%;
  margin-right: 5%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1%;
`;
const Navigation = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  a {
    padding: 10px;
  }
`;
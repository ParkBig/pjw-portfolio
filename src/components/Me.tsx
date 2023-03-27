import styled from "styled-components";
import myPhoto2 from "../asset/png/myPhoto2.png"
import paint from "../asset/png/paint.png"
import Summary from "./Summary";

const Me = ({ scrollId, scrollId2 }: { scrollId: string, scrollId2: string }) => {
  return (
    <>
      <Wrap id={scrollId}>
        <UpperDescription>
          <UpperMainInfo>
            <Name>
              박종원
            </Name>
            <Description>
              프론트엔드 개발자
            </Description>
            <SubDescription>
              개인의 실력뿐 아닌, <br/>
              팀 전체의 실력을 위해 노력하는 개발자입니다.
            </SubDescription>
          </UpperMainInfo>
        </UpperDescription>
        <LowerDescription>
          <Center>
            <Summary />
          </Center>
        </LowerDescription>
      </Wrap>
      <Spare id={scrollId2}></Spare>
    </>
  );
}

export default Me;

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFF1DC;
`;
const UpperDescription = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: left;
  align-items: center;
  background: url(${paint});
  background-size: cover;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 1024px) {
    justify-content: center;
  }
`;
const UpperMainInfo = styled.div`
  width: 45%;
  margin: 10% 0 0 5%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-shadow: 1px 5px 5px #2C3333;

  font-family: 'Black Han Sans', sans-serif;

  @media screen and (max-width: 1024px) {
    width: 90%;
    align-items: center;
    text-align: center;
  }
`;
const Center = styled.div`
  height: 90%;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 90%
  }
`;
const LowerDescription = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Name = styled.div`
  margin-bottom: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: white;
  font-size: 5em;
`;
const Description = styled.div`
  margin-bottom: 6%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-size: 3em;
`;
const SubDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  color: #FEFAE0;
  font-size: 1.7em;

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;
const Spare = styled.div`
  height: 5vh;
  display: flex;
  justify-content: center;
  background: linear-gradient(#FFF1DC, #EDF1D6);
`;

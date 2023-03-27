import styled from "styled-components";
import myPhoto2 from "../asset/png/myPhoto2.png"

const Home = () => {
  return (
    <Wrap>
        <Img src={myPhoto2}/>
        {/* <UpperDescription>
          <Info>
            프론트엔드 개발자 박종원
          </Info>
          <KeyWord>
            My-KeyWord &rarr; 탐구, 학습, 적용, 개발, 무아지경
          </KeyWord>
          <KeyWord>
            Stack &rarr; Javascript, Typescript, React, Express, NestJs, Git
          </KeyWord>
          <Description>
            안녕하세요.
            다수의 팀프로젝트에서 리드의 경험을 가지고 있으며, 이를 통해 의사소통, 정보공유의 중요함을 알고 있습니다.
            또한 프로젝트의 효율성과 더 좋은 사용 경험을 위해, 기술을 탐구하며, 학습하고 적용 할 수 있습니다.
          </Description>
          <UpperSummary>
            <Summary>
              Email: enfantgu@gmail.com
            </Summary>
            <Summary>
              Phone: 010-4336-5210
            </Summary>
            <Summary>
              GitHub: https://github.com/ParkBig
            </Summary>
          </UpperSummary>
        </UpperDescription> */}
      </Wrap>
  );
}

export default Home;

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(0, 238, 155), rgb(238, 178, 0));
`;
const Img = styled.img`
  height: 600px;
  width: auto;
  border-radius: 20%;
  margin-left: 50px;
`;
const UpperDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Info = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const KeyWord = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Description = styled.div`
  width:500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpperSummary = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
`;
const Summary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

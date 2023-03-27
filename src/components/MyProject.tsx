import styled from "styled-components";
import Projects from "./Projects";

import project from "../asset/png/project.png";
import reverseProject from "../asset/png/reverseProject.png";
import { ProjectContent } from "../type/interface";

import chess1 from "../asset/png/chess1.png";
import chess2 from "../asset/png/chess2.png";
import chess3 from "../asset/png/chess3.png";
import chess4 from "../asset/png/chess4.png";

import num1 from "../asset/png/num1.png";
import num2 from "../asset/png/num2.png";

import moa1 from "../asset/png/moa1.png";
import moa2 from "../asset/png/moa2.png";
import moa3 from "../asset/png/moa3.png";

import gall1 from "../asset/png/gall1.png";
import gall2 from "../asset/png/gall2.png";
import gall3 from "../asset/png/gall3.png";

import instar1 from "../asset/png/instar1.png";
import instar2 from "../asset/png/instar2.png";
import instar3 from "../asset/png/instar3.png";
import instar4 from "../asset/png/instar4.png";

const data: ProjectContent[] = [
  {
    name: "Chess-Game",
    subName: "개인프로젝트 / 2023.02 ~ 3주",
    image: [chess1, chess2, chess3, chess4],
    explain: "지인과 체스를 즐길 수 있는 체스 게임입니다.  방이름을 입력하여 생성하거나, 이미 만들어진 방에 입장이 가능합니다.  알람기능을 적용하여 상대방이 입장하거나, 게임 시작, 체스말이 잡힐때, 게임이 끝날때 등 알람을 띄우고 자동으로 사라집니다.  게임중 누구의 차례인지 시각적으로 확인할 수 있습니다.  게임이 종료되면 재매치 혹은 방을 나갈수 있습니다.",
    mainFuc: "소켓을 통해 방생성 후 체스게임, 체스 알고리즘, 채팅 기능",
    github: "https://github.com/ParkBig/chess-game.git",
    url: "https://chess-instant.site",
    stack: "TypeScript, React, Express, Socket.io, Styled-Components",
    deployment: "AWS (S3, Route53, ELB)"
  },
  {
    name: "Num-Comparator",
    subName: "개인프로젝트 / 2023.01 ~ 2주",
    image: [num1, num2],
    explain: "비교를 원하는 데이터를 입력하여 그래프를 통해 시각적으로 결과를 확인할 수 있는 프로그램입니다.  그룹을 이뤄 전체 값을 확인할 수 있고, CSV로 추출이 가능합니다. PWA를 사용하여 웹앱으로 사용이 가능합니다.",
    mainFuc: "수를 입력하고 분석, 그래프를 통한 시각적 확인, 그룹별로 비교, CSV추출 가능, PWA적용",
    github: "https://github.com/ParkBig/num-comparator.git",
    url: "https://num-comparator.vercel.app",
    stack: "TypeScript, React, React-Hook_Form, Victory Styled-Components",
    deployment: "Vercel"
  },
  {
    name: "Moa",
    subName: "팀프로젝트 / 2022.11 ~ 7주",
    image: [moa1, moa2, moa3],
    explain: "개인의 일정 관리 및 지인과 실시간으로 채팅을 치며 계획을 작성할 수 있는 일정관리 서비스입니다.  실제로 광고를 하며 배포하여 유저 피드백까지 받아 정정한 팀 프로젝트입니다. 팀 리더를 맡아 FE, BE의 원할한 의사소통을 주재 하였으며, 팀의 전체적인 일정관리 및 기술 적용을 주도하였습니다.",
    mainFuc: "생동적인 모션을 통해 일정확인 가능, 일정에 지도를 통해 장소 저장가능, 그룹일정시 실시간으로 채팅치며 생성가능",
    github: "https://github.com/99-Moa/99-MOA-F.git",
    url: "https://moa99.site / deprecate",
    stack: "React, Redux, React-Query, Framer-Motion, React-Hook-Form, Styled-Components, Axios",
    deployment: "AWS (S3, Route53)"
  },
  {
    name: "InstarGram-Clone",
    subName: "팀프로젝트 / 2022.10 ~ 1주",
    image: [instar1, instar2, instar3, instar4],
    explain: "Instargram 클론코딩입니다.  FE리더로서 뼈대, 주요기능, 일정 등을 리드했습니다.",
    mainFuc: "Instargram의 대부분의 기능.",
    github: "https://github.com/ParkBig/week7-clone-coding-instargram.git",
    url: "https://week7-clone-coding-instargram-ef2l.vercel.app / deprecate",
    stack: "React, Redux, React-Query, React-Hook-Form, Styled-Components, Axios",
    deployment: "Vercel"
  },
  {
    name: "Gallagher",
    subName: "개인프로젝트 / 2022.09 ~ 1주",
    image: [gall1, gall2, gall3],
    explain: "Canvas, 생성자 함수, this등을 공부하며 숙련하기 위해 만든 갤러거 게임입니다.",
    mainFuc: "키보드 조작을 통해 갤러거 게임 가능, 적군이 바닥에 닿으면 게임 종료",
    github: "https://github.com/ParkBig/gallagher-game.git",
    url: "",
    stack: "Javascript",
    deployment: ""
  },
  // {
  //   name: "Calendar",
  //   subName: "개인프로젝트 / 2022.07 ~ 1주",
  //   image: [],
  //   explain: "개발자로서 공부를 시작하고 처음 Javascript를 다루며 만들어본 달력입니다. 윤년까지 계산되었습니다.",
  //   mainFuc: "달력!",
  //   github: "https://github.com/ParkBig/calendar.git",
  //   url: "",
  //   stack: "Javascript",
  //   deployment: ""
  // }
]

const MyProject = ({ scrollId3 }: { scrollId3: string }) => {
  return (
    <Wrap id={scrollId3}>
      <Center>
        <UpperTitle>
          <MainIcon src={project}/>
          <Title>
            Project
          </Title>
          <MainIcon src={reverseProject}/>
        </UpperTitle>
        {data.map(prop => <Projects key={prop.name} prop={prop}/>)}
      </Center>
    </Wrap>
  )
}

export default MyProject;

const Wrap = styled.div`
/* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #898121;
`;
const Center = styled.div`
  width: 60%;
  margin-top: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
`;
const UpperTitle = styled.div`
  width: 100%;
  height: 90px;
  margin: 5% 0 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainIcon = styled.img`
  height: 50%;
  margin: 0 20px 0 20px;
`;
const Title = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 4em;
  font-weight: 700;
  border-bottom: 1px solid white;
`;



import styled from "styled-components";
import SkillDivision from "./SkillDivision";

import chain from "../asset/png/chain.png";
import reverseChain from "../asset/png/reverseChain.png";
import front from "../asset/png/front.png";
import deploy from "../asset/png/deploy.png";
import db from "../asset/png/db.png";
import communication from "../asset/png/communication.png";
import version from "../asset/png/version.png";
import frontIcon from "../asset/png/frontImg.png";
import deployIcon from "../asset/png/deployImg.png";
import dbIcon from "../asset/png/dbImg.png";
import communicationIcon from "../asset/png/communicationImg.png";
import versionsIcon from "../asset/png/versionsImg.png";

const Skills = () => {
  return (
    <>
      <Wrap>
        <Center>
          <UpperTitle>
            <MainIcon src={chain}/>
            <Title>
              skills
            </Title>
            <MainIcon src={reverseChain}/>
          </UpperTitle>
          <UpperContent>
            <SkillContent>
              <SkillDivision name="Frontend" img={front} icon={frontIcon}/>
            </SkillContent>
            <SkillContent>
              <SkillDivision name="Deploy" img={deploy} icon={deployIcon}/>
              <SkillDivision name="DataBase" img={db} icon={dbIcon}/>
            </SkillContent>
            <SkillContent>
              <SkillDivision name="Communication" img={communication} icon={communicationIcon}/>
              <SkillDivision name="Version Control" img={version} icon={versionsIcon}/>
            </SkillContent>
          </UpperContent>
        </Center>
      </Wrap>
      <Spare></Spare>
    </>
  )
}

export default Skills;

const Wrap = styled.div`
  height: 110vh;
  display: flex;
  justify-content: center;
  background-color: #EDF1D6;
`;
const Center = styled.div`
  width: 65%;
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
  border-bottom: 1px solid gray;
`;
const UpperContent = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SkillContent = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5%;
`;
const Spare = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  background-color: #EDF1D6;
`;

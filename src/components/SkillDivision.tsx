import styled from "styled-components";

const SkillDivision = ({name, img, icon}: {name: string, img: string, icon: string}) => {
  return (
    <Wrap>
      <SkillName>
        <Icon src={icon}/>
        {name}
      </SkillName>
      <UpperImg>
        <Img src={img}/>
      </UpperImg>
    </Wrap>
  )
}

export default SkillDivision;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  border-radius: 30px;
  background-color: white;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.6);
`;
const SkillName = styled.div`
  width: 80%;
  height: 55px;
  margin: 5% 0 5% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.5em;
  font-weight: 600;
  border-bottom: 1px solid gray;
`;
const Icon = styled.img`
  height: 90%;
  margin-right: 10px;
`;
const UpperImg = styled.div`
  width: 100%;
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Img = styled.img`

  max-height: 100%;
  max-width: 50%;
`;

import styled from "styled-components";

import i from "../asset/png/i.png";
import reverseI from "../asset/png/reverseI.png";
import address from "../asset/png/address.png";
import calendar from "../asset/png/calendar.png";
import featurePhone from "../asset/png/featurePhone.png";
import mail from "../asset/png/mail.png";
import pencil from "../asset/png/pencil.png";
import github from "../asset/png/github.png";

const Summary = () => {
  return (
    <>
      <UpperTitle>
        <MainIcon src={i}/>
        <Title>
          About Me
        </Title>
        <MainIcon src={reverseI}/>
      </UpperTitle>
      <WrapSummary>
        <UpperSummary>
          <UpperContent>
            <img src={calendar} />
          </UpperContent>
          <UpperContent width={50}>
            <ContentName>
              생년월일
            </ContentName>
            <Content>
              95.12.05
            </Content>
          </UpperContent>
        </UpperSummary>
        <UpperSummary>
          <UpperContent>
            <img src={address} />
          </UpperContent>
          <UpperContent width={50}>
            <ContentName>
              주소지
            </ContentName>
            <Content>
              Incheon
            </Content>
          </UpperContent>
        </UpperSummary>
        <UpperSummary>
          <UpperContent>
            <img src={featurePhone} />
          </UpperContent>
          <UpperContent width={50}>
            <ContentName>
              Phone
            </ContentName>
            <Content>
              010-4336-5210
            </Content>
          </UpperContent>
        </UpperSummary>
        <UpperSummary>
          <UpperContent>
            <img src={mail} />
          </UpperContent>
          <UpperContent width={50}>
            <ContentName>
              Email
            </ContentName>
            <Content>
              enfantgu@gmail.com
            </Content>
          </UpperContent>
        </UpperSummary>
        <UpperSummary>
          <UpperContent>
            <img src={pencil} />
          </UpperContent>
          <UpperContent width={50}>
            <ContentName>
              학력
            </ContentName>
            <Content>
              숭실대학교
            </Content>
          </UpperContent>
        </UpperSummary>
        <UpperSummary>
          <UpperContent>
            <img src={github} />
          </UpperContent>
          <UpperContent width={50}>
            <ContentName>
              GitHub
            </ContentName>
            <Content>
              <a href="https://github.com/ParkBig">
                github.com/ParkBig
              </a>
            </Content>
          </UpperContent>
        </UpperSummary>
      </WrapSummary>
    </>
  )
}

export default Summary;

const UpperTitle = styled.div`
  width: 100%;
  height: 90px;
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
const WrapSummary = styled.div`
  width: 100%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  align-items: center;
`;
const UpperSummary = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpperContent = styled.div<{ width?: number }>`
  height: 100%;
  width: ${prop => prop.width ? `${prop.width}%` : null};
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
`;
const ContentName = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  font-size: 2em;
  font-weight: 700;
`;
const Content = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 1.5em;

  a {
    &:hover {
      color: tomato;
    }
  }
`;

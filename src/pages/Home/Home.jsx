import styled from "styled-components";
import { TextLink, Text } from "../../components";

import { VscFolderActive } from "react-icons/vsc";

const Home = () => {
  return (
    <Container>
      <Content>
        <Text text="react hook form" title Icon={VscFolderActive} reverse />
        <TextLink to="/start" text="get started" />
      </Content>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

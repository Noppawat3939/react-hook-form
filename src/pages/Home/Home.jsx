import styled from "styled-components";
import { TextLink, Text } from "../../components";
import { STYLES } from "../../constants";

const Home = () => {
  return (
    <Container>
      <Text text="react hook form" title />
      <TextLink to="/start" text="get started" />
    </Container>
  );
};

export default Home;

const Container = styled.section`
  text-align: center;
`;

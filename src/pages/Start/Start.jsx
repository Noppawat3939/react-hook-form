import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TextLink, Text } from "../../components";
import { STYLES } from "../../constants";

const Start = () => {
  return (
    <Container>
      <Text text="all lessons" fontSize={STYLES.FS_3XL} />
      <TextLink to="/start/module1" text="module1" />
    </Container>
  );
};

export default Start;

const Container = styled.section`
  align-self: center;
`;

import { useId } from "react";
import styled from "styled-components";
import { TextLink, Text } from "../../components";
import { STYLES } from "../../constants";
import { VscFileSubmodule } from "react-icons/vsc";

const Start = () => {
  const modules = [
    {
      text: "module 1",
    },
    {
      text: "module 2",
    },
    {
      text: "module 3",
    },
  ];

  return (
    <Container>
      <Text
        text="all lesson"
        Icon={VscFileSubmodule}
        fontSize={STYLES.FS_3XL}
        title
      />
      <Text
        text={`choose 1 module from ${modules.length} modules`}
        fontSize={STYLES.FS_XS}
        des
      />
      <ul>
        {modules.map((module, index) => (
          <TextLink
            to={`module${index + 1}`}
            text={module.text}
            key={useId()}
          />
        ))}
      </ul>
    </Container>
  );
};

export default Start;

const Container = styled.section`
  align-self: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 5% 0;

  > ul {
    max-height: 80%;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }
`;

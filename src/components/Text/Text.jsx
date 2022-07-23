import styled from "styled-components";
import { STYLES } from "../../constants";

const Text = (props) => {
  const { text, fontSize, title } = props;
  return (
    <TextContainer title={title} fontSize={fontSize}>
      {text}
    </TextContainer>
  );
};

export default Text;

const handleFontSize = (props) => {
  if (props.title) return STYLES.FS_MEGA;

  if (props.fontSize) return props.fontSize;

  return STYLES.FS_BASE;
};

const TextContainer = styled.h1`
  font-size: ${(props) => handleFontSize(props)};
  font-weight: 500;
  text-transform: capitalize;
`;

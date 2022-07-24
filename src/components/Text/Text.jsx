import styled from "styled-components";
import { STYLES } from "../../constants";

const Text = (props) => {
  const { Icon, reverse, text, fontSize, title, error, des } = props;
  return (
    <Container reverse={reverse}>
      {Icon && <Icon />}
      <TextContainer title={title} fontSize={fontSize} error={error} des={des}>
        {text}
      </TextContainer>
    </Container>
  );
};

export default Text;

const handleFontSize = (props) => {
  if (props.title) return STYLES.FS_MEGA;

  if (props.error) return STYLES.FS_XS;

  if (props.fontSize) return props.fontSize;

  return STYLES.FS_BASE;
};

const handleColor = (props) => {
  if (props.error) return STYLES.CAR_PINK;

  if (props.des) return STYLES.CADET_BLUE;
  return STYLES.WHITE;
};

const Container = styled.span`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  align-items: center;
  column-gap: 10px;

  > svg {
    font-size: ${`${STYLES.FS_3XL}`};
    color: ${`${STYLES.RUBER}`};
  }
`;

const TextContainer = styled.h1`
  font-size: ${(props) => handleFontSize(props)};
  color: ${(props) => handleColor(props)};
  text-transform: ${(props) => (props.title ? "capitalize" : "inherit")};
  font-weight: 500;
`;

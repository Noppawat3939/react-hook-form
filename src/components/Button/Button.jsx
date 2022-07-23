import styled from "styled-components";
import { STYLES } from "../../constants";

const Button = (props) => {
  const { title, type, onClick } = props;
  return (
    <ButtonContainer type={type} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button`
  cursor: pointer;
  color: ${STYLES.WHITE};
  background: ${STYLES.JAZZ_JAM};
  text-transform: uppercase;
  border: 0;
  border-radius: 30px;
  padding: 10px 20px;
`;

import styled from "styled-components";
import { STYLES } from "../../constants";

const DEFAULT = { TYPE: "button" };

const Button = (props) => {
  const { title, type = DEFAULT.TYPE, onClick, disabled, pri } = props;
  return (
    <ButtonContainer
      type={type}
      onClick={onClick}
      disabled={disabled}
      pri={pri}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;

const handleBackground = (props) => {
  if (props.disabled) return STYLES.AME_SILVER;

  if (props.pri) return "transparent";

  return STYLES.JAZZ_JAM;
};

const ButtonContainer = styled.button`
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  color: ${(props) => (props.pri ? `${STYLES.JAZZ_JAM}` : `${STYLES.WHITE}`)};
  background: ${(props) => handleBackground(props)};
  border: 1px solid
    ${(props) => (props.pri ? `${STYLES.JAZZ_JAM}` : "transparent")};
  text-transform: uppercase;
  border-radius: 6px;
  padding: 8px 15px;
`;

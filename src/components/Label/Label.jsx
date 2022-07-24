import styled from "styled-components";
import { Text } from "../Text";

const Label = (props) => {
  const { htmlFor, label, required } = props;

  return (
    <LabelContainer htmlFor={htmlFor} required={required}>
      {required && <Text text="*" error />}
      {label}
    </LabelContainer>
  );
};

export default Label;

const LabelContainer = styled.label`
  text-transform: capitalize;
  display: flex;
  align-items: center;
  column-gap: 5px;
`;

import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button, Text, TextLink } from "../../../components";

const Module3 = () => {
  const DEFAULTS_VALUES = { FIRST_NAME: "John", LAST_NAME: "Doe" };

  const {
    register,
    setValue,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      yourDetails: {
        firstname: "",
        lastname: "",
      },
    },
  });

  // const onSubmit = (data) => {};

  console.log("errors", errors);
  return (
    <ModuleContainer>
      <Text text="module3" title />
      <Text text="learning setValue" des />
      <Input
        {...register("yourDetails.firstname", { required: true, maxLength: 5 })}
        placeholder="firstname"
      />
      <Input {...register("yourDetails.lastname")} placeholder="lastname" />
      <Button title="setvalue" />
      <TextLink text="back" to="/start" />
    </ModuleContainer>
  );
};

export default Module3;

const ModuleContainer = styled.section`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  padding: 6px;
  outline: none;
  font-size: 16px;
  margin-bottom: 10px;
`;

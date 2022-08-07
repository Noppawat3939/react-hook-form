import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect, useId } from "react";
import { Button, Label, Text, TextLink } from "../../../components";

const Module2 = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitSuccessful, isValid },
  } = useForm({ mode: "onClick" });

  //? >>> isSubmitSuccessful : when form success return Boolean
  //? >>> isValid : when user is typing on keyboard return Boolean

  useEffect(() => {
    console.clear();
  }, []);

  const Valids = [
    {
      label: "username",
      validate: register("username", {
        required: { value: true, message: "Username is required" },
      }),
    },

    {
      label: "password",
      validate: register("password", {
        minLength: { value: 5, message: "Password not less than 5 characters" },
        required: { value: true, message: "Password is required" },
      }),
    },
  ];

  const onhandleSubmit = async (data) => {
    console.log(data);
  };

  return (
    <ModuleContainer>
      <Text title text="module2" />
      <Text des text="register" />
      {Valids.map((val) => (
        <div key={useId()}>
          <span>
            <Label htmlFor={val.label} label={val.label} required />
            <input {...val.validate} placeholder={val.label} />
          </span>
          {errors[val.label] && <Text error text={errors[val.label].message} />}
        </div>
      ))}
      <Buttons>
        <Button title="submit" onClick={handleSubmit(onhandleSubmit)} />
        <Button title="clear errors" onClick={() => clearErrors()} pri />
      </Buttons>
      <TextLink to="/start" text="back" />
    </ModuleContainer>
  );
};

export default Module2;

const ModuleContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Buttons = styled.div`
  display: flex;
  column-gap: 10px;
  margin: 20px 0;
`;

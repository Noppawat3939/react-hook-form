import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useEffect, useId } from "react";
import { Button, Label, Text, TextLink } from "../../../components";

const Module2 = () => {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();

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

  const onhandleSubmit = (data) => {
    console.log(data);
  };

  return (
    <ModuleContainer>
      <Text title text="module2" />
      <Text des text="register" />
      <form onSubmit={handleSubmit(onhandleSubmit)}>
        {Valids.map((val) => (
          <>
            <div key={useId()}>
              <Label htmlFor={val.label} label={val.label} required />
              <input {...val.validate} />
            </div>
            {errors[val.label] && (
              <Text error text={errors[val.label].message} />
            )}
          </>
        ))}
        <Button type="submit" title="submit" />
        <Button title="clear errors" onClick={() => clearErrors()} pri />
      </form>
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

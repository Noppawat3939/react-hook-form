import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Label, Text, TextLink } from "../../../components";

const Module1 = () => {
  const lists = [
    {
      id: useId(),
      label: "First name",
      placeHolder: "your first name",
      type: "text",
      maxLength: 6,
    },
    {
      id: useId(),
      label: "Last name",
      placeHolder: "your last name",
      type: "text",
    },
    {
      id: useId(),
      label: "Email",
      placeHolder: "your email",
      type: "email",
      pattern:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },
    {
      id: useId(),
      label: "Age",
      placeHolder: "your age",
      type: "number",
      min: 1,
      max: 100,
    },
  ];

  const [updateData, setUpdetData] = useState(null);

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm();

  const onFormSubmit = (data) => {
    console.clear();
    setUpdetData(data);
    reset();
  };

  return (
    <ModuleContainer>
      <Text title text="module 1" />
      <Form onSubmit={handleSubmit(onFormSubmit)}>
        {lists.map((list) => (
          <FormControl key={list.id}>
            <Label htmlFor={list.label} label={list.label} required />
            <input
              type={list.type}
              placeholder={list.placeHolder}
              {...register(`${list.label}`, {
                required: `${list.label} is required`,
                maxLength: {
                  value: `${list.maxLength}`,
                  message: `your ${list.label} exceeded the max length (${list.maxLength} characters)`,
                },
                min: {
                  value: `${list.min}`,
                  message: `your ${list.label} must more than ${list.min}`,
                },
                max: {
                  value: `${list.max}`,
                  message: `your ${list.label} must more than ${list.max}`,
                },
                pattern: {
                  value: `${list.pattern}`,
                  message: `your ${list.label} is not ${list.label} format`,
                },
              })}
            />
            {errors[list.label] && (
              <Text text={errors[list.label].message} error />
            )}
          </FormControl>
        ))}
        <Buttons>
          <Button title="submit" type="submit" />
          <Button title="clear error" onClick={() => clearErrors()} pri />
        </Buttons>
        <br />
        {updateData && (
          <pre>
            <Text des text={JSON.stringify(updateData)} />
          </pre>
        )}
      </Form>
      <TextLink to="/start" text="back" />
    </ModuleContainer>
  );
};

export default Module1;

const ModuleContainer = styled.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form = styled.form`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  flex-direction: column;
  width: 100%;
`;

const FormControl = styled.div`
  width: 100%;

  > input {
    width: 100%;
    padding: 5px;
    margin: 5px 0;
  }
`;

const Buttons = styled.span`
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

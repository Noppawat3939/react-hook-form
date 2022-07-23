import { useId } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../../components";

const Module1 = () => {
  const lists = [
    {
      id: useId(),
      label: "first name",
      placeHolder: "your first name",
      type: "text",
      maxLength: 6,
    },
    {
      id: useId(),
      label: "last name",
      placeHolder: "your last name",
      type: "text",
    },
    {
      id: useId(),
      label: "email",
      placeHolder: "your email",
      type: "email",
      pattern:
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    },
    {
      id: useId(),
      label: "age",
      placeHolder: "your age",
      type: "number",
      min: 1,
      max: 100,
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="Module1_Container">
      <h2>module 1</h2>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        {lists.map((list) => (
          <div key={list.id}>
            <label htmlFor={list.label}>{list.label}: </label>
            <input
              type={list.type}
              placeholder={list.placeHolder}
              {...register(`${list.label}`, {
                required: `${list.label} is required`,
                maxLength: {
                  value: `${list.maxLength}`,
                  message: `your ${list.label} exceeded the max length`,
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
            {errors[list.label] && <p>{errors[list.label].message}</p>}
          </div>
        ))}
        <Button title="submit" type="submit" />
      </form>
    </div>
  );
};

export default Module1;

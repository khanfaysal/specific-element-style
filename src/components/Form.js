import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().integer().required(),
  password: yup.string().min(4).max(15).required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const submitForm = (data) => {
    console.log("result", data);
    reset();
  };
  return (
    <section className="form">
      <h1>React with yup hook form</h1>
      <h2>sign up validate form YUP</h2>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            {...register("firstName")}
            type="text"
            name="firstName"
            placeholder="First Name"
          />
          <p>{errors.firstName?.message}</p>
          <input
            {...register("lastName")}
            type="text"
            name="lastName"
            placeholder="Last Name"
          />
          <p>{errors.lastName?.message}</p>
          <input
            {...register("email")}
            type="text"
            name="email"
            placeholder="Your Email"
          />
          <p>{errors.email?.message}</p>
          <input
            {...register("age")}
            type="number"
            name="age"
            placeholder="Your Age"
          />
          <p>{errors.age?.message}</p>
          <input
            {...register("password")}
            type="text"
            name="password"
            placeholder="Your Password"
          />
          <p>{errors.password?.message}</p>
          <input
            {...register("confirmPassword")}
            type="text"
            name="confirmPassword"
            placeholder="Your Password"
          />
          <p>{errors.confirmPassword && "password should match !"}</p>
          <input type="submit" id="submit" />
        </form>
      </div>
    </section>
  );
};

export default Form;

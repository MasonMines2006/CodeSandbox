import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  age: z.number().int().min(18).positive("Age must be a positive integer"),
});

interface FormData {
  name: string;
  age: number;
}

const FormAlt = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => {
    console.log("Submitted:", data);
    console.log(errors);
  };
  return (
    <>
      <h1>Page Header</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            {...(register("name"), { required: true, minLength: 3 })}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age")}
            id="age"
            type="number"
            className="form-control"
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <p> {register("age").name}</p>
      <p> {register("name").name}</p>
      {errors.name?.type == "required" && (
        <p className="text-danger">Please submit somethign required</p>
      )}
    </>
  );
};

export default FormAlt;

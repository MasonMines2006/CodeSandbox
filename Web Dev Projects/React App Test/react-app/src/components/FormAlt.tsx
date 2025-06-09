import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  age: z
    .number({ invalid_type_error: "Age field is reqiured" })
    .int()
    .min(18)
    .positive("Age must be a positive integer"),
});

type FormData = z.infer<typeof schema>;

const FormAlt = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
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
            {...register("name")}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <p className="text-danger">{errors.name && errors.name.message}</p>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            {...register("age", { valueAsNumber: true })}
            id="age"
            type="number"
            className="form-control"
          />
          <p className="text-danger">{errors.age && errors.age.message}</p>
          <button disabled={!isValid} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormAlt;

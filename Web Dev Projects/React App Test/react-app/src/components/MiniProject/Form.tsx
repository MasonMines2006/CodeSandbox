import React from "react";
import { z } from "zod";
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const categories = ["Groceries", "Utilities", "Entertainment"];
const categoryOptions = categories.map((categories) => {
  <li key={categories}>{categories}</li>;
});

const schema = z.object({
  description: z.string(),
  amount: z
    .number({ invalid_type_error: "Age field is reqiured" })
    .int()
    .positive("Age must be a positive integer"),
  category: z.string().refine((value) => categories.includes(value), {
    message: "Category must be one of the predefined categories",
  }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        {/* Description */}
        <label htmlFor="description" className="form-label">
          Name
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        <p className="text-danger">
          {errors.description ? errors.description.message : "No errors"}
        </p>
      </div>
      <div className="mb-3">
        {/* Amount */}
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount")}
          id="amount"
          type="number"
          className="form-control"
        />
        <p className="text-danger">
          {errors.amount ? errors.amount.message : "No errors"}
        </p>
      </div>
      <div className="mb-3">
        {/* Category */}
        <label htmlFor="category" className="form-label">
          Category
        </label>

        <input
          {...register("category")}
          id="category"
          type="radio"
          className="form-control"
          value="Groceries"
        />
        <p className="text-danger">
          {errors.category ? errors.category.message : "No errors"}
        </p>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

import React from "react";
import { z } from "zod";
import { useForm, type FieldValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const categories = ["Groceries", "Utilities", "Entertainment"] as [
  string,
  ...string[]
];

const categoryOptions = categories.map((category) => {
  return (
    <div>
      <a className="dropdown-item" key={category} href="#">
        Action
      </a>
    </div>
  );
});

interface Props {
  data?: FieldValues;
  onSubmit: (data: FieldValues) => void;
}

const schema = z.object({
  description: z.string().min(1, "Input a name"),
  amount: z
    .number({ invalid_type_error: "Amount is reqiured" })
    .positive("Amount must be a positive integer"),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category field is required" }),
  }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ onSubmit, data }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const internalSubmit = (formData: FormData) => {
    console.log("Submitted locally:", formData);
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit(internalSubmit)}>
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
          {...register("amount", { valueAsNumber: true })}
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

        <select
          {...register("category")}
          id="category"
          className="form-control"
          defaultValue=""
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

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

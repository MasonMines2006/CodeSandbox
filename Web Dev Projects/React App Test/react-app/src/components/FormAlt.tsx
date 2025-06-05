import { useState } from "react";
import type { FormEvent, ChangeEvent } from "react";

const FormAlt = () => {
  const [person, setPerson] = useState({ name: "", age: 0 });
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log("Submitted:", person);
  };
  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, name: event.target.value });
  };
  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, age: parseInt(event.target.value) });
  };
  return (
    <>
      <h1>Page Header</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={handleNameChange}
            id="name"
            type="text"
            className="form-control"
            value={person.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={handleAgeChange}
            id="age"
            type="text"
            className="form-control"
            value={person.age}
          />
        </div>
      </form>
      <p> {person.age}</p>
      <p> {person.name}</p>
    </>
  );
};

export default FormAlt;

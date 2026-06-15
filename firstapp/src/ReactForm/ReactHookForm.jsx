import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import "./formStyle.css";
import "react-datepicker/dist/react-datepicker.css";

export default function ReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const CalendarIcon = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
      <DatePicker showIcon selected={selectedDate} onChange={setSelectedDate} />
    );
  };

  const onSubmit = (data) => console.log(data);
  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
      {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input defaultValue="" {...register("example")} />
        {/* include validation with required or other standard HTML validation rules */}
        <input {...register("exampleRequired", { required: "true" })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <CalendarIcon />
    </div>
  );
}

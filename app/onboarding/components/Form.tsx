"use client";

import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  age: Number;
};

const Form = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  function onHandleSubmit(data: FormValues) {
    console.log(data);
  }
  return (
    <div>
      <form className="space-y-6" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="flex flex-col gap-1">
          <label htmlFor="age" className="text-white">
            How old are you?
          </label>
          <input
            id="age"
            type="text"
            placeholder="Age"
            className="h-11 px-4 border-b-2 border-gray-600 rounded-lg"
            {...register("age")}
          />
        </div>
        <div className="flex justify-end my-8">
          <button className="h-11 px-6 bg-blue-600 text-white font-semibold rounded-3xl">
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

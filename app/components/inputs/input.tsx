"use client";

import React from 'react';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
    label: string;
    placeholder?: string;
    id: string;
    type?: string;
    required?: boolean;
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
    disabled?: boolean;
    
}

const Input: React.FC<InputProps> = ({
    label,
    placeholder,
    id,
    type,
    required,
    register,
    errors,
    disabled
}) => {
  return (
    <div>
        <label 
        className='block
                   text-md
                   font-medium
                   leading-6
                   text-gray-700'

        htmlFor={id}> {label} </label>

        <div className='mt-2'>
            <input 
               id={id}
               placeholder={placeholder}
               type={type}
               autoComplete={id}
               disabled={disabled}
               {...register(id, { required })}
               className={clsx("form-input block w-full rounded-lg border-0 py-1.5 px-2 text-gray-600 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-500 sm:text-sm sm:leading-6", 
               errors[id] && "focus:ring-rose-500", disabled && "opacity-50 cursor-default")}
            />

        </div>
    </div>
  )
}

export default Input;
"use client";

import useConversation from "../../../../../app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { HiPaperAirplane } from "react-icons/hi2";
import { CldUploadButton } from "next-cloudinary";
import {Image} from "@phosphor-icons/react"


const Form = () => {
  const { conversationId } = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: {
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues: {
      message: ''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {

    setValue('message', '', {shouldValidate: true});

    axios.post('/api/messages/', {
      ...data,
      conversationId
    })
  };

  const handleUpload = (result: any) => {
    axios.post('/api/messages/', {
      image: result?.info?.secure_url,
      conversationId
    })
  }


  return (
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4 w-full">

      <CldUploadButton
          options={{ maxFiles: 1}}
          onUpload={handleUpload}
          uploadPreset="yiowgur6"
          >
           <Image size={32} color="plain"/>
      </CldUploadButton>


      <form onSubmit={handleSubmit(onSubmit)}
            className="flex items-center gap-2 lg:gap-4 w-full">

              <MessageInput 
                id="message"
                register={register}
                errors={errors}
                required
                placeholder="Send a message"
              />
              <button type="submit"
                      className="
                            rounded-full
                            p-2
                            bg-sky-600
                            cursor-pointer
                            hover:bg-sky-700
                            transition
                      ">

                        <HiPaperAirplane size={18} className="text-white"/>

              </button>

      </form>
    </div>
  )
}

export default Form
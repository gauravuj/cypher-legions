"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

const Onboarding = () => {
  const { watch, register } = useForm();
  const [formStep, setFormStep] = React.useState(0);
  const completeFormStep = () => {
    setFormStep(formStep + 1);
  };
  const backFormStep = () => {
    setFormStep(formStep - 1);
  };
  const router = useRouter();
  const renderButton = () => {
    if (formStep > 3) {
      return undefined;
    } else if (formStep === 3) {
      return (
        <div>
          <button
            onClick={backFormStep}
            type="button"
            className="mt-6 p-3 text-gray-200 font-bold rounded-2xl disabled:bg-gray-200"
          >
            Previous
          </button>
          <button
            onClick={() => router.push("/conversations")}
            type="button"
            className="mt-6 p-2 bg-blue-600 text-white font-bold rounded-2xl disabled:bg-gray-200"
          >
            Submit
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <button
            onClick={backFormStep}
            type="button"
            className="mt-6 p-3 text-gray-200 font-bold rounded-2xl disabled:bg-gray-200"
          >
            Previous
          </button>
          <button
            onClick={completeFormStep}
            type="button"
            className="mt-6 p-3 bg-blue-600 text-white font-bold rounded-2xl disabled:bg-gray-200"
          >
            Next
          </button>
        </div>
      );
    }
  };

  return (
    <div className="bg-[#151515] h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex flex-col h-96 w-6/12 bg-[#202020] border border-[#121316] items-center justify-center shadow-lg rounded-2xl backdrop-blur-md">
        <div className="max-w-2xl h-full items-center justify-center rounded-3xl">
          <form>
            {formStep === 0 && (
              <section>
                <h3 className="text-white font-semibold m-7">
                  Tell us something about yourself?
                </h3>
                <input
                  type="text"
                  id="intro"
                  placeholder="Write something"
                  className="text-gray-800 space-x-2 rounded-md p-2"
                  required
                  {...register("intro")}
                />
              </section>
            )}

            {formStep === 1 && (
              <section>
                <h3 className="text-white font-semibold m-7">
                  How old are you?
                </h3>
                <input
                  type="text"
                  id="age"
                  placeholder="Age"
                  className="text-gray-800 space-x-2 rounded-md p-2"
                  required
                  {...register("age")}
                />
              </section>
            )}

            {formStep === 2 && (
              <section>
                <h3 className="text-white font-semibold m-7">
                  What is your gender?
                </h3>
                <input
                  type="text"
                  id="age"
                  placeholder="Gender"
                  className="text-gray-800 space-x-2 rounded-md p-2"
                  required
                />
              </section>
            )}

            {formStep === 3 && (
              <section>
                <h3 className="text-white font-semibold m-7">
                  What's your personality type?
                </h3>
                <input
                  type="text"
                  id="age"
                  placeholder="Personality Type"
                  className="text-gray-800 space-x-2 rounded-md p-2"
                  required
                />
              </section>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

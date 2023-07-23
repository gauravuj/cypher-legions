"use client";

import axios from "axios";
import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/input";
import React, { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import AuthSocialButton from "./AuthSocialButton";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Select from "react-select";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const session = useSession();
  const router = useRouter();
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const options = [
    {
      value: "ENTJ",
      label: "ENTJ",
    },
    {
      value: "ENTP",
      label: "ENTP",
    },
    {
      value: "ENFJ",
      label: "ENFJ",
    },
    {
      value: "ESFP",
      label: "ESFP",
    },
    {
      value: "ESTJ",
      label: "ESTJ",
    },
    {
      value: "ESFJ",
      label: "ESFJ",
    },
    {
      value: "ESTP",
      label: "ESTP",
    },
    {
      value: "ESFP",
      label: "ESFP",
    },
    {
      value: "INTJ",
      label: "INTJ",
    },
    {
      value: "INTP",
      label: "INTP",
    },
    {
      value: "INFJ",
      label: "INFJ",
    },
    {
      value: "INFP",
      label: "INFP",
    },
    {
      value: "ISTJ",
      label: "ISTJ",
    },
    {
      value: "ISFJ",
      label: "ISFJ",
    },
    {
      value: "ISTP",
      label: "ISTP",
    },
    {
      value: "ISFP",
      label: "ISFP",
    },
  ];

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/conversations");
    }
  }, [session?.status, router]);

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === "REGISTER") {
      toast.loading("Signing up...", { id: "1" });
      axios
        .post("/api/register", data)
        .then(() =>
          signIn("credentials", {
            ...data,
            redirect: false,
          })
        )
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials!");
          }

          if (callback?.ok) {
            toast.success(<b>Successfully registered!</b>, { id: "1" });
            reset();
            router.push("/conversations");
          }
        })
        .catch((err) => {
          toast.error(<b>{err.response.data || "Something went wrong!"}</b>, {
            id: "1",
          });
        })
        .finally(() => setIsLoading(false));
    }

    if (variant === "LOGIN") {
      toast.loading("Signing in...", { id: "1" });
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid Credentials", { id: "1" });
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Successfully logged in!", { id: "1" });
            reset();
            router.push("/conversations");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials!");
        }

        if (callback?.ok) {
          router.push("/conversations");
        }
      })
      .finally(() => setIsLoading(false));
  };

  const types = watch("personality");

  return (
    <div
      className="
        mt-1
        sm: mx-auto
        sm: w-full
        sm: max-w-md
      "
    >
      <div
        className="
             bg-white
             relative
             z-2
             shadow-5xl
             border
             border-r-0
             border-b-0
             border-slate-300/30
             px-5
             py-8
             sm: rounded-2xl
           "
      >
        <h2
          className="
                  text-center
                  text-2xl
                  font-bold
                  tracking-tight
                  text-gray-600
                  mb-10
               "
        >
          {variant === "LOGIN" ? "Sign in to Account" : "Create an Account"}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {variant === "REGISTER" && (
            <>
              <Input
                id="name"
                label="Full Name"
                placeholder="Enter your full name"
                required
                register={register}
                errors={errors}
                disabled={isLoading}
              />

              {/* <Select
                isLoading={isLoading}
                placeholder="Personality Type"
                value={types}
                onChange={(value) =>
                  setValue("personality", value, {
                    shouldValidate: true,
                  })
                }
                options={options}
                menuPortalTarget={document.body}
                styles={{
                  menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                }}
                classNames={{
                  control: () => "text-sm",
                }}
              /> */}
            </>
          )}

          <Input
            id="email"
            label="Email Address"
            placeholder="example@gmail.com"
            required
            type="email"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <Input
            id="password"
            label="Password"
            required
            placeholder="Enter your password"
            type="password"
            register={register}
            errors={errors}
            disabled={isLoading}
          />

          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign In" : "Sign Up"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div
              className="absolute
                                   inset-0
                                   flex
                                   items-center"
            >
              <div className="w-full border-t border-gray-400" />
            </div>

            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <AuthSocialButton
              icon={FcGoogle}
              onClick={() => socialAction("google")}
            />

            <AuthSocialButton
              icon={GrGithub}
              onClick={() => socialAction("github")}
            />
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "Don't have an account?"
              : "Already have an account?"}
          </div>

          <div
            onClick={toggleVariant}
            className="text-blue-600 underline cursor-pointer hover:text-blue-500"
          >
            {variant === "LOGIN" ? "Sign Up" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

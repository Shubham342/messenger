"use client";
import { useCallback, useState } from "react";
import {
  FieldValue,
  FieldValues,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import Input from "@/app/components/inputs/input";

type Variant = "LOGIN" | "REGISTER";
const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setLoading] = useState(false);
  const toogleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setLoading(true);
    if (variant === "REGISTER") {
    } else {
    }
  };
  const socialAction = (action: string) => {
    setLoading(true);
  };
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div
        className="bg-white px-4 py-8 shadow sm-rounded-lg sm:px-10"
      >
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input label="Email"/>
        </form> 
      </div>
    </div>
  );
};

export default AuthForm;

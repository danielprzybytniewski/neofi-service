import { type SubmitHandler, useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "sonner";
import sendImg from "@/assets/images/send.svg";
import { Button } from "@/components/ui/button";

type Input = {
  email: string;
};

export default function FooterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Input>({ mode: "onChange" });

  const onSubmit: SubmitHandler<Input> = (data) => {
    toast.success(`Confirmation sent to ${data.email}`);
    reset();
  };

  return (
    <div className="flex flex-col gap-4">
      <form
        noValidate
        className="flex w-full items-center border-b border-[#999]/50 pb-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          type="email"
          placeholder="Your email address"
          autoComplete="off"
          className="placeholder:text-primary-foreground flex-1 border-none bg-transparent text-sm font-normal focus:ring-0 focus:outline-none"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        <Button
          type="submit"
          className="cursor-pointer p-0 transition-transform duration-200 hover:scale-110"
        >
          <motion.img src={sendImg} alt="Send" whileTap={{ scale: 0.9 }} />
        </Button>
      </form>
      {errors.email && (
        <span className="text-xs text-red-500">{errors.email.message}</span>
      )}
    </div>
  );
}

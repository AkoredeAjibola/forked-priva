"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Custom hook for form management
export default function useFormHook<T extends z.ZodType>(
  schema: T,
  onSubmitHandler: (data: z.infer<T>) => Promise<void>
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const methods = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  const handleSubmit: SubmitHandler<z.infer<T>> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await onSubmitHandler(data);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    ...methods,
    isSubmitting,
    submitError,
    setSubmitError,
    handleSubmit: methods.handleSubmit(handleSubmit),
  };
}

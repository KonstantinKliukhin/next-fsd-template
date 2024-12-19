"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import * as React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { APP_ROUTES } from "@/shared/config/app-routes";
import { cn } from "@/shared/lib/ui/cn";
import { Button } from "@/shared/ui/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  GeneralFormMessage,
} from "@/shared/ui/Form";
import { Input } from "@/shared/ui/Input";

import { useSendForgotPasswordEmail } from "../../api/query-hooks";
import { FORGOT_PASSWORD_SCHEMA } from "../../model/form-schema";
import type { ForgotPasswordFormType } from "../../model/types";

export const ForgotPasswordForm: FC = () => {
  const form = useForm<ForgotPasswordFormType>({
    resolver: zodResolver(FORGOT_PASSWORD_SCHEMA),
  });
  const { setError } = form;
  const { push } = useRouter();
  const { mutateAsync: sendForgotPasswordEmail } = useSendForgotPasswordEmail();

  const onSubmit = useCallback(
    async (data: ForgotPasswordFormType) => {
      try {
        await sendForgotPasswordEmail(data.email);
        push(APP_ROUTES.RESET_PASSWORD);
      } catch (error) {
        setError("root", {
          message: error instanceof Error ? error.message : "Unknown error occurred",
        });
      }
    },
    [push, sendForgotPasswordEmail, setError]
  );

  return (
    <div className={cn("grid gap-6")}>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="email"
                    placeholder="john.doe@mail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit" loading={form.formState.isSubmitting}>
            Continue
          </Button>
          <GeneralFormMessage />
        </form>
      </Form>
    </div>
  );
};

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import * as React from "react";
import { memo, useCallback } from "react";
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

import { useResetPassword } from "../../api/query-hooks";
import { RESET_PASSWORD_SCHEMA } from "../../model/form-schema";
import type { ResetPasswordFormType } from "../../model/types";

type ResetPasswordFormProps = {
  code: string;
};

export const ResetPasswordForm = memo<ResetPasswordFormProps>(function ResetPasswordForm({
  code,
}) {
  const { mutateAsync: resetPassword } = useResetPassword();
  const form = useForm<ResetPasswordFormType>({
    resolver: zodResolver(RESET_PASSWORD_SCHEMA),
  });
  const { setError } = form;
  const { push } = useRouter();

  const onSubmit = useCallback(
    async (data: ResetPasswordFormType) => {
      try {
        await resetPassword({ ...data, resetPasswordCode: code });

        push(APP_ROUTES.SIGN_IN);
      } catch (error) {
        setError("root", {
          message: error instanceof Error ? error.message : "Unknown error occurred",
        });
      }
    },
    [push, setError, resetPassword, code]
  );

  return (
    <div className={cn("grid gap-6")}>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="new-password"
                    type="password"
                    placeholder="••••••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="new-password"
                    type="password"
                    placeholder="••••••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" loading={form.formState.isSubmitting}>
            Reset password
          </Button>
          <GeneralFormMessage />
        </form>
      </Form>
    </div>
  );
});

"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import type { FC } from "react";
import * as React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { APP_ROUTES } from "@/shared/config/app-routes";
import { hardNavigate } from "@/shared/lib/routing/hard-navigate";
import { cn } from "@/shared/lib/ui/cn";
import { Button } from "@/shared/ui/Button";
import { Form } from "@/shared/ui/form/Form";
import { FormControl } from "@/shared/ui/form/FormControl";
import { FormField } from "@/shared/ui/form/FormField";
import { FormItem } from "@/shared/ui/form/FormItem";
import { FormLabel } from "@/shared/ui/form/FormLabel";
import { FormMessage } from "@/shared/ui/form/FormMessage";
import { GeneralFormMessage } from "@/shared/ui/form/GeneralFormMessage";
import { Input } from "@/shared/ui/Input";

import { useAuth } from "@/entities/auth";

import { logIn } from "../api/services";
import { SIGN_IN_SCHEMA } from "../model/form-schema";
import type { SignInFormType } from "../model/types";

export const SignInForm: FC = () => {
  const form = useForm<SignInFormType>({
    resolver: zodResolver(SIGN_IN_SCHEMA),
  });
  const { setError } = form;

  const { setIsAuthenticated } = useAuth();

  const onSubmit = useCallback(
    async (data: SignInFormType) => {
      try {
        await logIn(data);

        setIsAuthenticated(true);

        hardNavigate(APP_ROUTES.DASHBOARD);
      } catch (error) {
        setError("root", {
          message: error instanceof Error ? error.message : "Unknown error occurred",
        });
      }
    },
    [setError, setIsAuthenticated]
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
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    autoComplete="password"
                    placeholder="••••••••••"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="w-full" type="submit" loading={form.formState.isSubmitting}>
            Sign in
          </Button>
          <GeneralFormMessage />
          <div className="flex items-center justify-between gap-y-2 max-540:flex-col">
            <Link href={APP_ROUTES.FORGOT_PASSWORD}>
              <Button variant="link">Forgot your password?</Button>
            </Link>
            <Link href={APP_ROUTES.SIGN_UP}>
              <Button variant="link">Don't have account yet?</Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

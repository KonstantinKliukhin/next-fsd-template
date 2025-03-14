"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import type { FC } from "react";
import * as React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { APP_ROUTES } from "@/shared/config/app-routes";
import { useAuthNavigate } from "@/shared/lib/routing/use-auth-navigate";
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

import { useSignUp } from "../api/query-hooks";
import { SIGN_UP_SCHEMA } from "../model/form-schema";
import type { SignUpFormType } from "../model/types";

export const SignUpForm: FC = () => {
  const push = useAuthNavigate();

  const form = useForm<SignUpFormType>({
    resolver: zodResolver(SIGN_UP_SCHEMA),
  });
  const { setError } = form;

  const { setIsAuthenticated } = useAuth();

  const { mutateAsync: signUp } = useSignUp();

  const onSubmit = useCallback(
    async (data: SignUpFormType) => {
      try {
        await signUp(data);

        setIsAuthenticated(true);

        push(APP_ROUTES.DASHBOARD);
      } catch (error) {
        setError("root", {
          message: error instanceof Error ? error.message : "Unknown error occurred",
        });
      }
    },
    [push, setError, setIsAuthenticated, signUp]
  );

  return (
    <div className="grid gap-6">
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
            Continue
          </Button>
          <GeneralFormMessage />
          <Link href={APP_ROUTES.SIGN_IN}>
            <Button variant="link" size="sm">
              Already have an account?{" "}
              <span className="pl-0.5 font-medium"> Sign In</span>
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
};

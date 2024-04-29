"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import * as React from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { appRoutes } from "@/shared/config/app-routes";
import { Button } from "@/shared/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  GeneralFormMessage,
} from "@/shared/ui/form";
import { Input } from "@/shared/ui/input";

import { signUpSchema } from "../../model/form-schema";
import { SignUpFormType } from "../../model/types";

export function SignUpForm() {
  const form = useForm<SignUpFormType>({
    resolver: zodResolver(signUpSchema),
  });
  const { setError } = form;
  const { push } = useRouter();

  const onSubmit = useCallback(
    async (data: SignUpFormType) => {
      const res = await signIn("sign-up-credentials", { ...data, redirect: false });
      if (!res?.ok) {
        setError("root", {
          message: res?.error || "Unknown error occurred",
        });
      } else {
        push(appRoutes.dashboard);
      }
    },
    [push, setError]
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
          <Link href={appRoutes.signIn}>
            <Button variant="link" size="sm">
              Already have an account?{" "}
              <span className="pl-0.5 font-medium"> Sign In</span>
            </Button>
          </Link>
        </form>
      </Form>
    </div>
  );
}

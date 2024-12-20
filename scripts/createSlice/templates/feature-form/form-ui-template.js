const { toCamelCase } = require("../../utils");

module.exports = (slice, component) => `"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback, type FC } from "react";
import { useForm } from "react-hook-form";

import { Form } from "@/shared/ui/Form";

import { ${toCamelCase(slice)}Schema } from "../model/form-schema";
import type { ${component}Type } from "../model/types";

type ${component}Props = {

}

export const ${component}: FC<${component}Props> = (props) => {
  const {} = props;

  const form = useForm<${component}Type>({
    resolver: zodResolver(${toCamelCase(slice)}Schema)
  })
  
  const onSubmit = useCallback(() => {
    
  }, [])
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      
      </form>
    </Form>
  )
}
`;

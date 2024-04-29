const firstCharUpperCase = require("../../firstCharUpperCase");

module.exports = (slice) => `
"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { memo, useCallback } from "react"
import { useForm } from "react-hook-form";

import {
  Form,
  GeneralFormMessage,
} from "@/shared/ui/form";
import { ${slice}Schema } from "../../model/form-schema"

type ${firstCharUpperCase(slice)}FormProps = {

}

export const ${firstCharUpperCase(slice)}Form = memo<${firstCharUpperCase(slice)}FormProps>(function ${firstCharUpperCase(slice)}Form(props) {
  const {} = props;

  const form = useForm({
    resolver: zodResolver(${slice}Schema)
  })
  
  const onSubmit = useCallback(() => {
    
  }, [])
  
  
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
      
      <GeneralFormMessage/>
      </form>
    </Form>
  )
})

`;

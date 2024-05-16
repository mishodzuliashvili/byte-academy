"use client";

import updateUser from "@/actions/users/update-user";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

type UserSettingsProps = {
  user: User;
};

import { zodResolver } from "@hookform/resolvers/zod";
import { User } from "@prisma/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "სახელი უნდა იყოს 2 სიმბოლოზე მეტი",
    })
    .max(50, {
      message: "სახელი უნდა იყოს 50 სიმბოლოზე ნაკლები",
    }),
});

export default function UserSettings({ user }: UserSettingsProps) {
  const [loading, setLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: user.name,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setLoading(true);
    await updateUser(user.id, values);
    setLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>სახელი</FormLabel>
              <FormControl>
                <Input placeholder="მიშო ძულიაშვილი" {...field} />
              </FormControl>
              <FormDescription>ეს არის თქვენი საჯარო სახელი</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">შეცვლა</Button>
      </form>
    </Form>
  );
}

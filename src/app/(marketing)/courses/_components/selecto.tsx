"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTransition } from "react";
import useCustomParams from "@/hooks/use-custom-params";

type SelectoProps = {};

export default function Selecto({}: SelectoProps) {
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();
  // const [isPending, startTransition] = useTransition();

  // const value = searchParams.get("sortedBy") || undefined;
  const { add, value, isPending } = useCustomParams({
    type: "single",
    name: "sortedBy",
  });
  return (
    <Select
      disabled={isPending}
      onValueChange={(v) => {
        add(v);
      }}
      value={value as string}
    >
      <SelectTrigger className="w-[114px]">
        <SelectValue placeholder="დაალაგე" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="registrationDate">დრო</SelectItem>
          <SelectItem value="difficulty">სიმარტივე</SelectItem>
          <SelectItem value="priceInMonth"> თანხა</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

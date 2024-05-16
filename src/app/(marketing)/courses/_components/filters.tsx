"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import useCustomParams from "@/hooks/use-custom-params";
type FiltersProps = {};

export default function Filters({}: FiltersProps) {
  const { add, value, isPending, remove } = useCustomParams({
    type: "multiple",
    name: "time",
  });

  function onChange(_value: string) {
    return (checked: boolean) => {
      if (!_value) return;
      console.log(checked);
      if (checked) {
        add(_value);
      } else {
        remove(_value);
      }
    };
  }

  function isChecked(_value: string) {
    return value?.includes(_value);
  }

  console.log(value);

  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">დრო</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 p-3">
          <div className="flex items-center gap-3">
            <Checkbox
              disabled={isPending}
              checked={isChecked("not-started")}
              onCheckedChange={onChange("not-started")}
            />
            <span>მიმდინარეობს რეგისტრაცია</span>
          </div>
          <div className="flex items-center gap-3">
            <Checkbox
              disabled={isPending}
              checked={isChecked("started")}
              onCheckedChange={onChange("started")}
            />
            <span>პროცესშია</span>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

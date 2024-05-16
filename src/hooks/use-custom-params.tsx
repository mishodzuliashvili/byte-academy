import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

type useCustomParamsProps = {
  type: "multiple" | "single";
  name: string;
};

export default function useCustomParams({ type, name }: useCustomParamsProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [value, setValue] = useState(() =>
    type === "single"
      ? searchParams.get(name) || undefined
      : searchParams.getAll(name) || []
  );
  //   TODO: debounce
  //   TODO: default value on here and server should be same?? or whateevr man for example orderBy
  const [isPending, startTransition] = useTransition();

  function add(_value: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (type === "multiple") {
      const values = current.getAll(name);
      if (!values.includes(_value)) {
        values.push(_value);
        current.append(name, _value);
      }
      setValue(values);
    } else if (type === "single") {
      setValue(_value);
      current.set(name, _value);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";

    startTransition(() => {
      router.push(`${pathname}${query}`);
    });
  }

  function remove(_value: string) {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    if (type === "multiple") {
      let values = current.getAll(name);
      values = values.filter((v) => v !== _value);
      current.delete(name);
      values.forEach((v) => current.append(name, v));
      setValue(values);
    } else if (type === "single") {
      setValue(undefined);
      current.delete(name);
    }
    const search = current.toString();
    const query = search ? `?${search}` : "";

    startTransition(() => {
      router.push(`${pathname}${query}`);
    });
  }

  return {
    add,
    remove,
    value,
    isPending,
  };
}

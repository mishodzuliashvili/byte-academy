"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

type PriceFilterProps = {};

export default function PriceFilter({}: PriceFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set(name, value);
    const search = current.toString();
    const query = search ? `?${search}` : "";
    router.push(`${pathname}${query}`);
  };
  return (
    <div className="relative">
      <details className="group [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
          <span className="text-sm font-medium"> ფასი </span>

          <span className="transition group-open:-rotate-180">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </summary>

        <div className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2">
          <div className="w-96 rounded-lg border border-gray-200 bg-white">
            <header className="flex items-center justify-between p-4">
              <span className="text-sm text-gray-700">
                {" "}
                უმაღლესი ფასია $600{" "}
              </span>

              <button
                type="button"
                onClick={() => {
                  const current = new URLSearchParams(
                    Array.from(searchParams.entries())
                  );
                  current.delete("priceFrom");
                  current.delete("priceTo");
                  const search = current.toString();
                  const query = search ? `?${search}` : "";
                  router.push(`${pathname}${query}`);
                }}
                className="text-sm text-gray-900 underline underline-offset-4"
              >
                რესეტი
              </button>
            </header>

            <div className="border-t border-gray-200 p-4">
              <div className="flex justify-between gap-4">
                <label
                  htmlFor="FilterPriceFrom"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="priceFrom"
                    name="priceFrom"
                    placeholder="საიდან"
                    defaultValue={parseInt(
                      searchParams.get("priceFrom") || "0"
                    )}
                    onChange={handleFilterChange}
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>

                <label
                  htmlFor="FilterPriceTo"
                  className="flex items-center gap-2"
                >
                  <span className="text-sm text-gray-600">$</span>

                  <input
                    type="number"
                    id="priceTo"
                    name="priceTo"
                    placeholder="სადამდე"
                    onChange={handleFilterChange}
                    defaultValue={
                      searchParams.get("priceTo")
                        ? parseInt(searchParams.get("priceTo") || "0")
                        : undefined
                    }
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </details>
    </div>
  );
}

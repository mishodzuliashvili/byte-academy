import { Button } from "@/components/ui/button";
import CourseCard from "./_components/course-card";
import { IoFilter } from "react-icons/io5";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Selecto from "./_components/selecto";
import prisma from "@/lib/prisma";
import Filters from "./_components/filters";
import PriceFilter from "./_components/price-filter";
import { z } from "zod";
import {
  validateArrayParam,
  validateNumberParam,
  validateParam,
} from "@/lib/validation/params";

type CoursesPageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export const dynamic = "force-dynamic";

export default async function CoursesPage({
  params,
  searchParams,
}: CoursesPageProps) {
  const time = validateArrayParam(searchParams["time"], [
    "not-started",
    "started",
    "ended",
  ]);
  const priceTo = validateNumberParam(searchParams["priceTo"], [0, 100000]);
  const priceFrom = validateNumberParam(searchParams["priceFrom"], [0, 100000]);
  const sortedBy = validateParam(searchParams["sortedBy"], [
    "difficulty",
    "priceInMonth",
    "registrationDate",
  ]);

  const currentTime = new Date();
  const courses = await prisma.course.findMany({
    where: {
      status: "PUBLISHED",
      ...(time && {
        OR: [
          ...(time.includes("not-started")
            ? [
                {
                  registrationDate: {
                    gt: currentTime,
                  },
                },
              ]
            : []),
          ...(time.includes("started")
            ? [
                {
                  registrationDate: {
                    lte: currentTime,
                  },
                  finishDate: {
                    gt: currentTime,
                  },
                },
              ]
            : []),
          ...(time.includes("ended")
            ? [
                {
                  finishDate: {
                    lte: currentTime,
                  },
                },
              ]
            : []),
        ],
      }),
      ...(priceFrom &&
        !priceTo && {
          priceInMonth: {
            gte: priceFrom,
          },
        }),
      ...(priceTo &&
        !priceFrom && {
          priceInMonth: {
            lte: priceTo,
          },
        }),
      ...(priceFrom &&
        priceTo && {
          priceInMonth: {
            gte: priceFrom,
            lte: priceTo,
          },
        }),
    },
    orderBy: {
      ...(sortedBy && {
        [sortedBy]: "asc",
      }),
    },
    include: {
      authors: true,
    },
  });

  return (
    <div className="mb-20">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 w-fit">
            <Filters />
            <div className="flex gap-8">
              <PriceFilter />
            </div>
            {/* <div className="relative">
              <Input type="search" placeholder="ძიება" className="pl-10" />
              <CiSearch className="absolute top-[50%] translate-y-[-50%] left-2 text-2xl" />
            </div> */}
          </div>
          <div className="relative">
            <Selecto />
          </div>
        </div>
        <div className="p-6 mt-5 py-12 rounded-lg mb-5 from-primary bg-gradient-to-r to-violet-600 text-gray-50">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <h2 className="text-center text-6xl tracking-tighter font-bold">
                {/* <br className="sm:hidden" /> */}
                10% ფასდაკლება
              </h2>
              <div className="space-x-2 text-center py-2 lg:py-0">
                <span>ნებისმიერ კურსზე</span>
                {/* <span className="font-bold text-lg">MAMBA</span> */}
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        {/* <header className="mb-5">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            კურსები
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            მიმდინარეობს კურსების დამატება, შეიძინეთ სასურველი კურსი
          </p>
        </header> */}
        <div>
          {courses.length === 0 && (
            <div className="text-center text-2xl font-bold text-gray-800">
              კურსები არ მოიძებნა
            </div>
          )}
        </div>
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}

          <div className="opacity-40">{/* <CourseCard /> */}</div>
          <div className="opacity-40">{/* <CourseCard /> */}</div>
        </div>
      </div>
    </div>
  );
}

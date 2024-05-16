import GridBackground from "@/app/_components/grid-background";
import { Button } from "@/components/ui/button";
import { Prisma } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { FaLariSign } from "react-icons/fa6";
import { IoPersonOutline, IoPersonSharp } from "react-icons/io5";
import { TbCurrencyLari } from "react-icons/tb";

type CourseCardProps = {
  course: Prisma.CourseGetPayload<{
    include: {
      authors: true;
    };
  }>;
};

export default function CourseCard({ course }: CourseCardProps) {
  const currentDate = new Date();

  return (
    <Link
      href={`/courses/${course.id}`}
      className="relative block overflow-hidden rounded-lg  border-0 shadow-lg"
    >
      <GridBackground />
      <div className="p-4 sm:p-6 lg:p-8">
        <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-primary  to-ternary"></span>

        <div className="sm:flex sm:justify-between sm:gap-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
              {course.title}
            </h3>

            <p className="mt-1 text-xs font-medium text-gray-600">
              {course.authors[0].name}
            </p>
          </div>

          <div className="hidden sm:block sm:shrink-0">
            <img
              alt=""
              src={course.authors[0].profileImage}
              className="size-16 rounded-lg object-cover shadow-sm"
            />
          </div>
        </div>

        <div className="mt-4">
          <p className="text-pretty text-sm text-gray-500">{course.heading}</p>
        </div>

        <dl className="mt-6 flex gap-4 sm:gap-6">
          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">
              {course.registrationDate.getTime() > currentDate.getTime() &&
                "რეგისტრაცია მიმდინარეობს"}
              {course.registrationDate.getTime() < currentDate.getTime() &&
                course.finishDate.getTime() > currentDate.getTime() &&
                "კურსი მიმდინარეობს"}
              {course.finishDate.getTime() < currentDate.getTime() &&
                "კურსი დასრულდა"}
            </dt>
            <dd className="text-xs text-gray-500">
              {course.registrationDate.toDateString()}
            </dd>
          </div>

          <div className="flex flex-col-reverse">
            <dt className="text-sm font-medium text-gray-600">ხანგრძლივობა</dt>
            <dd className="text-xs text-gray-500">
              {course.durationInWeeks} კვირა
            </dd>
          </div>
        </dl>
      </div>
    </Link>
  );
}

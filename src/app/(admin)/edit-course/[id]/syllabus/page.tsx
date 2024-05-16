import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import SyllabusEditForm from "../_components/syllabus-edit-form";

type EditCourseSyllabusProps = {
  params: {
    id: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function EditCourseSyllabus({
  params: { id },
  searchParams,
}: EditCourseSyllabusProps) {
  const course = await prisma?.course.findUnique({
    where: {
      id: id,
    },
    include: {
      syllabus: {
        include: {
          sections: {
            include: {
              elements: true,
            },
          },
        },
      },
    },
  });
  if (!course) {
    notFound();
  }

  return (
    <>
      <div className="container">
        <h3 className="text-2xl mb-10 font-bold">სილაბუსი: {course.title}</h3>
        <SyllabusEditForm course={course} courseId={course.id} />
      </div>
    </>
  );
}

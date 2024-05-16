import { notFound } from "next/navigation";
import EditForm from "./_components/edit-form";
import prisma from "@/lib/prisma";

type EditCourseProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function EditCourse({
  params: { id },
  searchParams,
}: EditCourseProps) {
  const course = await prisma?.course.findUnique({
    where: {
      id: id,
    },
    include: {
      authors: true,
      whatYouNeed: true,
      whatYouWillLearn: true,
      whoIsThisCourseFor: true,
    },
  });
  if (!course) {
    notFound();
  }

  return (
    <>
      <div className="container">
        <EditForm courseId={id} course={course} />
      </div>{" "}
    </>
  );
}

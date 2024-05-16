import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
type CreateNewCourseProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CreateNewCourse({
  params,
  searchParams,
}: CreateNewCourseProps) {
  const newCourse = await prisma.course.create({
    data: {
      title: "New Course",
      description: "New Course Description",
      ageFrom: 1,
      difficulty: "BEGINNER",
      durationInHoursPerWeek: 1,
      durationInWeeks: 1,
      heading: "New Course Heading",
      imgUrl:
        "https://media.licdn.com/dms/image/C4D03AQEZiSIlto-hsA/profile-displayphoto-shrink_200_200/0/1655225827593?e=2147483647&v=beta&t=ZCIFt-KQeR3b0B1_pLQuKlhEHDuY_o98uef6_oMk1dw",
      maxStudents: 1,
      priceInMonth: 1,
      registrationDate: new Date(),
      status: "DRAFT",
      finishDate: new Date(),
      syllabus: { create: {} },
    },
  });

  return redirect(`edit-course/${newCourse.id}`);
}

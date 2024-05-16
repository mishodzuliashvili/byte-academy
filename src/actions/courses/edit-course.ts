"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(3),
  heading: z.string().min(3),
  description: z.string().min(3),
  imgUrl: z.string().url(),
  priceInMonth: z.number().int().positive(),
  ageFrom: z.number().int().positive(),
  maxStudents: z.number().int().positive(),
  durationInWeeks: z.number().int().positive(),
  durationInHoursPerWeek: z.number().int().positive(),
  status: z.enum(["DRAFT", "PUBLISHED", "ARCHIVED"]),
  registrationDate: z.date(),
  finishDate: z.date(),
  authors: z.array(z.string()),
  whatYouNeed: z.array(z.string()),
  whatYouWillLearn: z.array(z.string()),
  whoIsThisCourseFor: z.array(z.string()),
});

export default async function editCourse(
  id: string,
  values: z.infer<typeof formSchema>
) {
  await prisma.course.update({
    where: {
      id: id,
    },
    data: {
      ...values,
      authors: {
        set: [],
        connect: values.authors.map((author) => ({
          id: author,
        })),
      },
      whatYouNeed: {
        set: [],
        connectOrCreate: values.whatYouNeed.map((item) => ({
          where: {
            value: item,
          },
          create: { value: item },
        })),
      },
      whatYouWillLearn: {
        set: [],
        connectOrCreate: values.whatYouWillLearn.map((item) => ({
          where: { value: item },
          create: { value: item },
        })),
      },
      whoIsThisCourseFor: {
        set: [],
        connectOrCreate: values.whoIsThisCourseFor.map((item) => ({
          where: { value: item },
          create: { value: item },
        })),
      },
    },
  });
}

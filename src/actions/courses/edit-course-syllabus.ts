"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";

const formSchema = z.object({
  sections: z.array(
    z.object({
      value: z.string(),
      order: z.number(),
      elements: z.array(
        z.object({
          value: z.string(),
          order: z.number(),
        })
      ),
    })
  ),
});

export default async function editCourseSyllabus(
  id: string,
  syllabusId: string,
  values: z.infer<typeof formSchema>
) {
  await prisma.course.update({
    where: {
      id: id,
    },
    data: {
      syllabus: {
        create: {
          sections: {
            create: values.sections.map((section) => ({
              value: section.value,
              order: section.order,
              elements: {
                create: section.elements.map((element) => ({
                  value: element.value,
                  order: element.order,
                })),
              },
            })),
          },
        },
      },
    },
  });
}

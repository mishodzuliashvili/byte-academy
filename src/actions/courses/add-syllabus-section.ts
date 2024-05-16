"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function addSyllabusSection(
  syllabusId: string,
  value: string,
  order: number
) {
  await prisma.syllabusSection.create({
    data: {
      value,
      order,
      syllabus: {
        connect: {
          id: syllabusId,
        },
      },
    },
  });
}

// async function editSyllabusSection(
//   syllabusSectionId: string,
//   elements: { value: string; order: number }[],
//   value: string,
//   order: number
// ) {
//   await prisma.syllabusSection.update({
//     where: {
//       id: syllabusSectionId,
//     },
//     data: {
//       value,
//       order,
//       elements: {
//         create: elements.map((element) => ({
//           value: element.value,
//           order: element.order,
//         })),
//       },
//     },
//   });
// }

"use server";
import prisma from "@/lib/prisma";

export default async function searchWhoIsCourseForByValue(pattern: string) {
  const users = await prisma.whoIsThisCourseFor.findMany({
    take: 5,
    where: {
      OR: [
        {
          value: {
            contains: pattern,
          },
        },
      ],
    },
  });
  return users;
}

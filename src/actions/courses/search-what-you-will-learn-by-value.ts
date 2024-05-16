"use server";
import prisma from "@/lib/prisma";

export default async function searchWhatYouWillLearnByValue(pattern: string) {
  const users = await prisma.whatYouWillLearn.findMany({
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

"use server";
import prisma from "@/lib/prisma";

export default async function searchWhatYouNeedByValue(pattern: string) {
  const users = await prisma.whatYouNeed.findMany({
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

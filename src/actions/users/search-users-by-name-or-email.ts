"use server";
import prisma from "@/lib/prisma";

export default async function searchUsersByNameOrEmail(pattern: string) {
  const users = await prisma.user.findMany({
    take: 5,
    where: {
      OR: [
        {
          name: {
            contains: pattern,
          },
        },
        {
          email: {
            contains: pattern,
          },
        },
      ],
    },
  });
  return users;
}

"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { User } from "@prisma/client";

export default async function updateUser(
  userId: string,
  userData: Partial<Omit<User, "id">>
) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      ...userData,
    },
  });
}

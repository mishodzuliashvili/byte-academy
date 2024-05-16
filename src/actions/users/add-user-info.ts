"use server";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default async function addUserInfo(
  userId: string,
  givenName: string,
  familyName: string,
  bio: string
) {
  await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      name: `${givenName} ${familyName}`,
      role: "BASIC",
      bio: bio,
    },
  });

  //   do redirect
  redirect("/dashboard");
}

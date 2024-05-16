import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

type layoutProps = {
  children: React.ReactNode;
};

export default async function layout({ children }: layoutProps) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    notFound();
  }

  const dbUser = await prisma?.user.findUnique({
    where: {
      id: user.id,
    },
  });

  // TODO: maybe admins also should acess this pages
  if (!dbUser || dbUser.role !== "TUTOR") {
    notFound();
  }

  return <>{children}</>;
}

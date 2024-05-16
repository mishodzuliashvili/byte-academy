import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";

type layoutProps = {
  children: React.ReactNode;
};

export const dynamic = "force-dynamic";

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

  if (!dbUser || dbUser.role !== "ADMIN") {
    notFound();
  }

  return <>{children}</>;
}

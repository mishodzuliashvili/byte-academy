import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound } from "next/navigation";

type layoutProps = {
  children: React.ReactNode;
};

export default async function layout({ children }: layoutProps) {
  const { isAuthenticated } = getKindeServerSession();
  const iaAuth = await isAuthenticated();

  if (!iaAuth) {
    notFound();
  }

  return <>{children}</>;
}

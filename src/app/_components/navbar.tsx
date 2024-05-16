import { Button } from "@/components/ui/button";
import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import prisma from "@/lib/prisma";
import TLink from "./t-link";
type NavbarProps = {};

export const dynamic = "force-dynamic";

export default async function Navbar({}: NavbarProps) {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  let dbUser = null;

  if (user) {
    dbUser = await prisma.user.findUnique({
      where: {
        id: user.id,
      },
    });
  }

  const lastCourse = await prisma.course.findFirst({});

  return (
    <div className="w-full fixed top-0 left-0 px-4 bg-background z-[100]">
      {/* <Announcement /> */}
      <nav className="py-6 w-full flex justify-between rounded-lg container">
        <div className="flex gap-5 items-center">
          <Logo />
          {/* <Link
          href="/courses"
          className="text-primary font-semibold underline hover:text-primary"
        >
          მთავარი
        </Link> */}
          <TLink
            // href="/courses/clvr8uepp00006rk0f5eupeaj"
            href={`/courses/${lastCourse?.id}`}
            className="hover:text-primary duration-300"
          >
            საბაზისო კურსი
          </TLink>
          {/* <Input /> */}
        </div>
        <div className="flex items-center gap-1">
          <Button variant="circle" size="icon" asChild>
            <Link href="">
              <Image width={24} height={24} src="/assets/Bell.svg" alt="" />
            </Link>
          </Button>
          {/* <Button variant="circle" size="icon" asChild>
            <Link href="">
              <Image width={24} height={24} src="/assets/Heart.svg" alt="" />
            </Link>
          </Button> */}
          <Button variant="circle" size="icon" asChild>
            <Link href="">
              <Image
                width={24}
                height={24}
                src="/assets/ShoppingCartSimple.svg"
                alt=""
              />
              {/* <PiGraduationCapLight className="text-2xl " /> */}
            </Link>
          </Button>
          <div className="flex items-center gap-3 ml-2">
            {!(await isAuthenticated()) ? (
              <>
                <Button variant="ghost" asChild className="font-bold">
                  <RegisterLink
                    authUrlParams={{
                      connection_id:
                        process.env.NEXT_PUBLIC_KINDE_CONNECTION_GOOGLE || "",
                    }}
                  >
                    <span>ლოგინი</span>
                  </RegisterLink>
                </Button>
                {/* <Button asChild className="font-bold">
                  <LoginLink>ლოგინი</LoginLink>
                </Button> */}
              </>
            ) : (
              <Button
                asChild
                variant="circle"
                className="p-1 cursor-pointer w-10"
              >
                <TLink href="/dashboard">
                  <Image
                    width={40}
                    height={40}
                    className="rounded-full"
                    src={dbUser?.profileImage || ""}
                    alt="user profile avatar"
                    referrerPolicy="no-referrer"
                  />
                  {/* <ProfilePicture name={user?.given_name || ""} size={40} /> */}
                </TLink>
              </Button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

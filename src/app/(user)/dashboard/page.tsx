import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "@/lib/prisma";
import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImLeaf } from "react-icons/im";
import CourseCard from "@/app/(marketing)/courses/_components/course-card";
import { Demo } from "./demo";
import { LiaCookieBiteSolid } from "react-icons/lia";
import {
  IoBookOutline,
  IoNewspaperSharp,
  IoSettingsOutline,
  IoTimeOutline,
} from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import { LuLeafyGreen } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { PiCoinsLight, PiCoinsThin } from "react-icons/pi";
import UserSettings from "./_components/user-settings";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IoMdLeaf } from "react-icons/io";
export const dynamic = "force-dynamic";

export default async function Dashboard() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();
  const dbUser = await prisma.user.findUnique({
    where: {
      id: user?.id,
    },
  });

  if (!dbUser) {
    return <div>მომხმარებელი ვერ მოიძებნა</div>;
  }

  const data = [
    {
      data: {
        battery: 0.7,
        design: 0.8,
        useful: 0.1,
      },
      meta: { color: "#3f76ed" },
    },
    {
      data: {
        battery: 0.8,
        design: 0.2,
        useful: 0.8,
      },
      meta: { color: "purple" },
    },
  ];

  const captions = {
    battery: "ალგორითმები",
    design: "ლოგიკა",
    useful: "სკილები",
  };

  return (
    <div>
      <div className="container relative mb-20">
        {/* <h3 className="text-3xl font-semibold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent">
          გამარჯობა,
        </h3> */}
        {/* <p className="text-2xl"> {dbUser?.name.split(" ")[0]}!</p> */}
        <Tabs defaultValue="missions" className="">
          <TabsList>
            <TabsTrigger value="missions" className="flex items-center gap-2">
              <LuLeafyGreen />
              მისიები
            </TabsTrigger>
            {/* <TabsTrigger value="password">მიმდინარე დავალებები</TabsTrigger> */}
            {/* <TabsTrigger value="password">ჩემი კურსები</TabsTrigger> */}
            {/* <TabsTrigger value="password">მიღწევები</TabsTrigger> */}
            <TabsTrigger value="settings" className="flex items-center gap-2">
              {" "}
              <FiSettings />
              სეთინგები
            </TabsTrigger>
          </TabsList>
          <TabsContent value="missions">
            <div className="flex gap-5">
              <div className="border-2 rounded-lg p-5 w-full flex items-center justify-center flex-col gap-4">
                <div className="p-5 bg-gray-100 rounded-full text-3xl border-8">
                  <GrTask />
                </div>
                <h3>დაწერე მიმდინარე დავალება</h3>
                <div className="max-w-44 mx-auto w-full flex items-center gap-2">
                  <div className="bg-gray-200 w-full h-4 rounded-full"></div>
                  <span>0/1</span>
                </div>
                <Button size="sm" className="">
                  დაწერე
                </Button>
              </div>
              <div className="border-2  rounded-lg p-5 relative w-full max-w-xl h-full">
                <div className="duration-200 ease-in-out h-full select-none">
                  <div className="flex flex-col gap-4 md:gap-8">
                    <div className="flex flex-row justify-between items-baseline">
                      <div>
                        <p className="text-sm text-base-content/60 leading-tight">
                          შენ ხარ
                        </p>
                        <div
                          className="card-title font-extrabold tracking-tight m-0"
                          // style="margin-bottom: 0px;"
                        >
                          0 დღე სტრაიკზე
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 items-end gap-4 md:gap-6">
                      <div className="flex flex-col justify-center items-center space-y-4 cursor-not-allowed">
                        <span className="text-3xl duration-200  saturate-0 opacity-80 ">
                          <div className="scale-110 md:scale-125">📦</div>
                        </span>
                        <div className="text-sm px-2 py-1 text-center rounded-lg transition-all duration-200 font-semibold ">
                          <span className="flex flex-col justify-center items-center gap-1">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="circle-check"
                              className="svg-inline--fa fa-circle-check w-5 h-5 text-primary"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                              ></path>
                            </svg>
                            <span className="text-xs  text-primary">დღე 1</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-4 cursor-not-allowed">
                        <span className="text-3xl duration-200   saturate-[0.5]">
                          <div className="scale-110 md:scale-125">📦</div>
                        </span>
                        <div className="text-sm px-2 py-1 text-center rounded-lg transition-all duration-200 font-semibold ">
                          <span className="flex flex-col justify-center items-center gap-1">
                            <svg
                              className="w-5 h-5 opacity-50 fill-base-content"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                            </svg>
                            <span className="text-xs  text-base-content/60">
                              დღე 2
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-4 cursor-not-allowed">
                        <span className="text-4xl duration-200   saturate-[0.5]">
                          <div className="scale-110 md:scale-125">🎒</div>
                        </span>
                        <div className="text-sm px-2 py-1 text-center rounded-lg transition-all duration-200 font-semibold ">
                          <span className="flex flex-col justify-center items-center gap-1">
                            <svg
                              className="w-5 h-5 opacity-50 fill-base-content"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                            </svg>
                            <span className="text-xs text-base-content/60">
                              დღე 3
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-4 cursor-not-allowed">
                        <span className="text-3xl duration-200   saturate-[0.5]">
                          <div className="scale-110 md:scale-125">📦</div>
                        </span>
                        <div className="text-sm px-2 py-1 text-center rounded-lg transition-all duration-200 font-semibold ">
                          <span className="flex flex-col justify-center items-center gap-1">
                            <svg
                              className="w-5 h-5 opacity-50 fill-base-content"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path d="M243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path>
                            </svg>
                            <span className="text-xs  text-base-content/60">
                              დღე 4
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2 md:gap-4 text-sm">
                      <span className="text-lg drop-shadow">💡</span>
                      <p className="text-base-content/80">
                        ყოველდღე მიიღე სასაჩუქრები და გაიზიარე შენი სტრაიკი. რაც
                        მეტი სტრაიკი, მეტი სასაჩუქრები!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="account">
            <div className="max-w-[85rem] mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 border rounded-lg border-gray-200 dark:border-neutral-800">
                <div className="p-4 md:p-5 overflow-hidden lg:rounded-l-lg relative before:absolute before:top-0 before:start-0 before:w-full before:h-px sm:before:w-px sm:before:h-full before:bg-gray-200 before:first:bg-transparent dark:before:bg-neutral-800">
                  <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-orange-500  to-orange-500/10"></span>

                  <IoBookOutline className="flex-shrink-0 size-5 text-orange-500 dark:text-neutral-500" />

                  <div className="mt-3">
                    <div className="flex items-center gap-x-2">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                        ამოხსნილი დავალებები
                      </p>
                    </div>
                    <div className="mt-1 lg:flex lg:justify-between lg:items-center">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                        11
                      </h3>
                      <a
                        className="mt-1 lg:mt-0 min-h-[24px] inline-flex items-center gap-x-1 py-0.5 px-2 text-gray-800 bg-gray-200/70 hover:bg-gray-200 rounded-md dark:bg-neutral-700 dark:hover:bg-neutral-800 dark:text-neutral-200"
                        href="#"
                      >
                        <svg
                          className="inline-block size-3 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                        </svg>
                        <span className="inline-block text-xs font-semibold">
                          12.5%
                        </span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-5 relative before:absolute before:top-0 before:start-0 before:w-full before:h-px sm:before:w-px sm:before:h-full before:bg-gray-200 before:first:bg-transparent dark:before:bg-neutral-800">
                  <div>
                    <span className="rounded-bl-none sm:rounded-bl-lg lg:rounded-bl-none absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-purple-500  to-purple-500/10"></span>

                    <IoTimeOutline className="flex-shrink-0 size-5 text-purple-500 dark:text-neutral-500" />

                    <div className="mt-3">
                      <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                        ლექციებზე გატარებული დრო
                      </p>
                      <div className="mt-1 lg:flex lg:justify-between lg:items-center">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                          33 სთ
                        </h3>
                        <a
                          className="mt-1 lg:mt-0 min-h-[24px] inline-flex items-center gap-x-1 py-0.5 px-2 text-gray-800 bg-gray-200/70 hover:bg-gray-200 rounded-md dark:bg-neutral-700 dark:hover:bg-neutral-800 dark:text-neutral-200"
                          href="#"
                        >
                          <svg
                            className="inline-block size-3 self-center"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                          </svg>
                          <span className="inline-block text-xs font-semibold">
                            2.25%
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 relative before:absolute before:top-0 before:start-0 before:w-full before:h-px sm:before:w-px sm:before:h-full before:bg-gray-200 before:first:bg-transparent dark:before:bg-neutral-800">
                  <div>
                    <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-blue-500  to-blue-500/10"></span>

                    <LiaCookieBiteSolid className="flex-shrink-0 size-5 text-blue-500 dark:text-neutral-500" />
                    <div className="mt-3">
                      <div className="flex items-center gap-x-2">
                        <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                          ბიტების ოდენობა
                        </p>
                        <div className="hs-tooltip">
                          <div className="hs-tooltip-toggle">
                            <svg
                              className="size-3.5 text-gray-500 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                            </svg>
                            <span
                              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                              role="tooltip"
                            >
                              The average number of click rate
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-1 lg:flex lg:justify-between lg:items-center">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                          5.4 მბ
                        </h3>
                        <a
                          className="mt-1 lg:mt-0 min-h-[24px] inline-flex items-center gap-x-1 py-0.5 px-2 text-primary bg-primary/10 hover:bg-primary rounded-md dark:bg-green-700 dark:hover:bg-green-800 dark:text-primary"
                          href="#"
                        >
                          <svg
                            className="inline-block size-3 self-center"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                          </svg>
                          <span className="inline-block text-xs font-semibold">
                            კარგი შედეგია
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 md:p-5 lg:rounded-r-lg relative before:absolute before:top-0 before:start-0 before:w-full before:h-px sm:before:w-px sm:before:h-full before:bg-gray-200 before:first:bg-transparent dark:before:bg-neutral-800">
                  <span className="rounded-bl-lg sm:rounded-bl-none rounded-br-lg absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-500  to-green-500/10"></span>

                  <PiCoinsLight className="flex-shrink-0 size-5 text-green-500 dark:text-neutral-500" />
                  <div className="mt-3">
                    <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
                      ქულები
                    </p>
                    <div className="mt-1 lg:flex lg:justify-between lg:items-center">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                        92,913
                      </h3>
                      <a
                        className="mt-1 lg:mt-0 min-h-[24px] inline-flex items-center gap-x-1 py-0.5 px-2 text-orange-700 bg-orange-200/70 hover:bg-orange-200 rounded-md dark:bg-orange-700 dark:hover:bg-orange-800 dark:text-orange-100"
                        href="#"
                      >
                        <svg
                          className="inline-block size-3 self-center"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <span className="inline-block text-xs font-semibold">
                          ნუ აცდენ
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-6">
              <article className="border rounded-lg mt-5">
                {/* <article className=" mt-5 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 transition"> */}
                <div className="rounded-[10px] bg-white p-4">
                  <RadarChart
                    options={{
                      captionProps: () => ({
                        className: "caption",
                        textAnchor: "middle",
                        fontSize: 14,
                        fontFamily: "sans-serif",
                      }),
                    }}
                    captions={captions}
                    data={data}
                    size={450}
                  />
                </div>
              </article>
              <div className="border-gray-200 border rounded-lg mt-5 w-full">
                <Demo />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="settings">
            <div className="p-5 border-2 rounded-lg">
              <h3 className="text-2xl font-bold">პროფილის პარამეტრები</h3>
              <p className="text-gray-600 text-sm mb-5">
                შეცვალე სეთინგები და განაახლე შენი პროფილი
              </p>
              <UserSettings user={dbUser} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { FaDotCircle } from "react-icons/fa";
import { FaCheckDouble } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { PiDotsSix } from "react-icons/pi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";

type CoursePageProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CoursePage({
  params: { id },
  searchParams,
}: CoursePageProps) {
  const course = await prisma.course.findUnique({
    where: {
      id: id,
    },
    include: {
      authors: true,
      whatYouWillLearn: true,
      whatYouNeed: true,
      whoIsThisCourseFor: true,
      syllabus: {
        include: {
          sections: {
            include: {
              elements: true,
            },
          },
        },
      },
    },
  });
  if (!course) notFound();
  // console.log(course);
  return (
    <div>
      <div className="container mb-20 grid grid-cols-3 gap-10">
        <div className="text-left space-y-4 md:space-y-6 sticky">
          {/* <p className="font-semibold text-primary md:-mb-2">
            სწავლის გემიფიკაცია
          </p>
          <h3 className="font-extrabold text-4xl tracking-tight">
            დაძლიე სიზარმაცე
          </h3>
          <p className="opacity-80">
            გემიფიკაცია არის სწავლების პროცესის გასასწორებლად და მისი
            გასასწორებლად სტუდენტების მოტივაციას არ სჭირდებს.
          </p> */}
          <Button className="w-full py-6">დაჯავშნა</Button>
          <div className="text-sm text-base-content/80 flex items-center">
            <span className="relative inline-flex h-3 w-3 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="font-semibold text-base-content">15</span>
            <span className="ml-0.5">კაცი უკვე დარეგისტრირდა</span>
          </div>
          <video
            poster="/homepage/streakPoster.png"
            className="rounded-lg aspect-square w-full sm:w-96 lg:w-[28rem] border-0 dark:border-2 border-base-content/20 dark:shadow-lg mb-8"
            autoPlay
            loop
            playsInline
            controls
            width="500"
            height="500"
          >
            <source
              src="https://d279kcxbcggtq3.cloudfront.net/streakVideo.mp4"
              type="video/mp4"
            />
          </video>
          <div className="text-left space-y-4 md:space-y-6">
            <p className="font-semibold text-primary md:-mb-2">
              დააკვირდი პროგრესს
            </p>
            <h3 className="font-extrabold text-3xl md:text-4xl tracking-tight">
              იყავი პროდუქტიული
            </h3>
            <p className="text-base-content/80">
              {" "}
              მიიღე ყოველდღე რემაინდერები რომ შეასრულო დავალებები და არასოდეს
              დაგავიწყდეს ისინი. გაიზარდე და დარჩი მოტივირებული, არ გაწყვიტო
              ჯაჭვი!
            </p>

            <div className="text-sm text-base-content/80 flex items-center">
              <span className="text-lg saturate-[0.75] mr-2">🔥</span>
              <span className="mr-3">გახდი საუკეთესო</span>
              <span>
                <span className="text-base-content">💊 მიიღე ჯილდო</span>
              </span>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-4xl font-semibold">{course.title}</h2>
          <p className="text-gray-600">{course.heading}</p>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex -space-x-4 rtl:space-x-reverse">
              {course.authors.map((author) => (
                <img
                  key={author.id}
                  className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                  src={author.profileImage || ""}
                  alt=""
                />
              ))}
            </div>
            <div>
              <h3 className="text-sm text-gray-600">
                {course.authors.length > 1 ? "ავტორები" : "ავტორი"}
              </h3>
              <p>
                {course.authors.map((author, index) => author.name).join(" . ")}
              </p>
            </div>
          </div>
          {/* <img className="mt-4 rounded-lg" src={course.imgUrl} alt="" /> */}

          <Tabs defaultValue="review" className=" mt-5">
            <TabsList>
              <TabsTrigger value="review">მიმოხილვა</TabsTrigger>
              <TabsTrigger value="syllabus">სილაბუსი</TabsTrigger>
              {/* <TabsTrigger value="instructors">ინსტრუქტორები</TabsTrigger> */}
            </TabsList>
            <TabsContent value="syllabus" className="mt-3">
              <Accordion type="multiple" className="rounded-lg border px-4">
                {course.syllabus?.sections
                  .toSorted((a, b) => a.order - b.order)
                  .map((section) => (
                    <AccordionItem value={section.id} key={section.id}>
                      <AccordionTrigger>{section.value}</AccordionTrigger>
                      <AccordionContent>
                        <ul className="flex flex-col gap-2">
                          {section.elements
                            .toSorted((a, b) => a.order - b.order)
                            .map((element) => (
                              <li
                                key={element.id}
                                className="flex items-center gap-3"
                              >
                                <FaDotCircle className="text-primary" />
                                <p>{element.value}</p>
                              </li>
                            ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
              </Accordion>
            </TabsContent>

            <TabsContent value="instructors" className="mt-3">
              <div className="overflow-hidden grid mb-8 border border-gray-200 rounded-lg dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
                {course.authors.map((author) => (
                  <figure
                    key={author.id}
                    className="flex flex-col items-center justify-center p-8 text-center bg-white border-b-0 border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700"
                  >
                    <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
                      <p className="my-4">{`"${author.bio}"`}</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center ">
                      <img
                        className="rounded-full w-9 h-9"
                        src={author.profileImage || ""}
                        // src="https://media.licdn.com/dms/image/C4E03AQHROXxD9slu8Q/profile-displayphoto-shrink_400_400/0/1651577543446?e=1719446400&v=beta&t=cjxvVrqvjaYC6js7-gtmwPnrArY8QqABmlAPdLFt_DI"
                        alt="profile picture"
                      />
                      <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                        <div>{author.name}</div>
                      </div>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="review" className="mt-3">
              <h3 className="text-3xl font-semibold mb-2">აღწერა</h3>
              <p>{course.description}</p>

              <section className="mt-5">
                <h2 className="text-2xl font-bold">რას ისწავლი ამ კურსში</h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {course.whatYouWillLearn.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <FaCheckDouble className="text-primary" />
                      <p>{item.value}</p>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-5">
                <h2 className="text-2xl font-bold">ვისთვის არის ეს კურსი</h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {course.whoIsThisCourseFor.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <FaCheckDouble className="text-primary" />
                      <p>{item.value}</p>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="mt-5">
                <h2 className="text-2xl font-bold">
                  რა გვჭირდება კურსზე მოსახვედრად
                </h2>
                <ul className="mt-4 flex flex-col gap-2">
                  {course.whatYouNeed.map((item) => (
                    <li key={item.id} className="flex items-center gap-3">
                      <FaCheckDouble className="text-primary" />
                      <p>{item.value}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </TabsContent>
          </Tabs>
          <div className="text-left flex flex-col md:flex-row md:gap-12 mt-5">
            {/* <video
              poster="/homepage/gamificationPoster.png"
              className="rounded-3xl aspect-square w-full sm:w-96 lg:w-[28rem] border-0 dark:border-2 border-base-content/20 dark:shadow-lg mb-8"
              autoPlay
              loop
              playsInline
              controls
              width="500"
              height="500"
            >
              <source
                src="https://d279kcxbcggtq3.cloudfront.net/gamificationVideo.mp4"
                type="video/mp4"
              />
            </video> */}
          </div>
        </div>

        {/* <div className="min-w-[350px] p-4 bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            დარჩენილი 15 დღე
          </h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">₾</span>
            <span className="text-5xl font-extrabold tracking-tight">
              {course.priceInMonth}
            </span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /თვეში
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7">
            <li className="flex items-center">
              <svg
                className="flex-shrink-0 w-4 h-4 text-primary dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {course.maxStudents} კაცი მაქსიმუმ ერთ გუნდში
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-primary dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                {course.difficulty === "BEGINNER" && "დამწყები"}
                {course.difficulty === "INTERMEDIATE" && "ინთერმედიეთი"}
                {course.difficulty === "ADVANCED" && "მაღალი ედვენსდ"}
              </span>
            </li>
            <li className="flex">
              <svg
                className="flex-shrink-0 w-4 h-4 text-primary dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                ასაკი {course.ageFrom}+
              </span>
            </li>
          </ul>

          <Button className="mt-4 w-full">დაჯავშნე</Button>
        </div> */}
      </div>
    </div>
  );
}

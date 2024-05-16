import HappySVG from "@/assets/happy-svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type BecomeTutorProps = {};

export default function BecomeTutor({}: BecomeTutorProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center justify-between py-8 md:grid md:grid-cols-5 container">
        <div className="mt-4 md:mt-0 col-span-3">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            დაამაქსიმაიზე შენი სკილები და მიაღწიე ახალ საფეხურებს
          </h2>
          <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            ბაიტის პლათფორმა ეხმარება სტუდენტებს მარტივად და სწრაფად აითვისონ
            ახალა მასალა გაიღმავონ ცოდნა რაც ხელს შეუწყობს მათ კარერულ წინსვლას.
          </p>
          <Button size="lg" asChild>
            <Link href="#">
              დაიწყე
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </Button>
        </div>
        <div className="col-span-2">
          <HappySVG color="--primary" />
        </div>
      </div>
    </section>
  );
}

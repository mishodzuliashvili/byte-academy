import { FaCheckCircle, FaCrown } from "react-icons/fa";
import { FaBoltLightning } from "react-icons/fa6";
import { PiCrownSimpleBold, PiCrownSimpleFill } from "react-icons/pi";
import GridBackground from "./grid-background";

type FeatureSectionProps = {};

export default function FeatureSection({}: FeatureSectionProps) {
  return (
    <section className="bg-[#f9fafb] py-20 my-10 dark:bg-gray-900">
      <div className="py-8 container">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            მოსწავლეებზე მორგებული პლათფორმა
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            ჩვენ ვფოკუსირდებით რაც შეიძლება მარტივი და მოსახერხებელი გავხადოთ
            ტუტორების და მოსწავლეების ურთიერთკავშირი
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className="">
            <div className="text-xl flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary text-white lg:h-12 lg:w-12">
              {/* <PiCrownSimpleFill /> */}
              <FaCrown />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">მარტივი</h3>
            <p className="text-gray-500 dark:text-gray-400">
              პლათფორმა მაქსიმულაურად უმარტივებს მოსწავლეებს კურსების ყიდვას და
              სწავლას. დავალებების ჩაბარება და ქულების სისტემა ეხმარებათ
              მარტივად დაძლიონ სწავლების პროცესი.
            </p>
          </div>
          <div className="">
            <div className="text-xl flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary text-white lg:h-12 lg:w-12">
              <FaBoltLightning />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">სწრაფი</h3>
            <p className="text-gray-500 dark:text-gray-400">
              მოსწავლეები ხვდებიან თავვიანთ ტავის დროზე და ყველაფერი
              დამენჯმენტებულია დროები და ასე შემდეგ.
            </p>
          </div>
          <div className="">
            <div className="text-xl flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary text-white lg:h-12 lg:w-12">
              <FaCheckCircle />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">ხარისხი</h3>
            <p className="text-gray-500 dark:text-gray-400">
              დავალებები მორგებულია კურსზე და სტუდენტის დონეზე, რეალურად კურსები
              დაყწობილი დონეების მიმართ რაც საშუალებას აძლევს სტუდენტებს
              ისწავლონ უკეთესად.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

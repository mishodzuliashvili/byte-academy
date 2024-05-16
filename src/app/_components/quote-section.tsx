import LessonSVG from "@/assets/lesson-svg";

type QuoteSectionProps = {};

export default function QuoteSection({}: QuoteSectionProps) {
  return (
    <section className="">
      <div className="py-8 container grid grid-cols-5 justify-start items-center">
        {/* <div className="col-span-2">
          <LessonSVG color="--primary" />
        </div> */}
        <figure className="max-w-screen-md col-span-3">
          <svg
            className="h-12  mb-3 text-gray-400 dark:text-gray-600"
            viewBox="0 0 24 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
              fill="currentColor"
            />
          </svg>
          <blockquote>
            <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
              {`"ბაიტის სკოლა აძლევს სტუდენტებს არაერთ გასაქანს პატარა ასაკიდან აითვისონ ბევრი რამე რაც დაეხმარებათ სამომავლო განვითარებაშეი, სწავლაშია კარიერაში."`}
            </p>
          </blockquote>
          <figcaption className="flex items-center mt-6 space-x-3">
            {/* <img
              className="w-6 h-6 rounded-full"
              src="https://media.licdn.com/dms/image/C4E03AQHROXxD9slu8Q/profile-displayphoto-shrink_800_800/0/1651577543446?e=1718841600&v=beta&t=egOOKiUMMzk9kGKj5i_392Y0JLb-99apTx1GbzOSZqY"
              alt="profile picture"
            /> */}
            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <div className="pr-3 font-medium text-gray-900 dark:text-white">
                არჩილ მელიქიძე
              </div>
              <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                ბაიტის ტუტორი
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

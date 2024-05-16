type FAQSectionProps = {};

export default function FAQSection({}: FAQSectionProps) {
  return (
    <section className=" bg-[#f9fafb] py-10 my-20">
      <div className="py-8 container">
        <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          ხშირად დასმული კითხვები
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                როგორი სახის დავალებები იქნება?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                დავალებები იქნება სრული Figma პროექტის გადმოწერა, რომელშიც შედის
                ყველა გვერდი, კომპონენტები, რესპონსივ გვერდები, ასევე ხატები,
                ილუსტრაციები და სურათები.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                კურსები ვიდეობი არის თუ რეალურად სასწავლო კურსები?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                კურსები არის სრული სასწავლო კურსები, რომელიც შედგება ვიდეობიდან,
                სავარჯიშოებიდან, პრაქტიკული დავალებებიდან და სხვ.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                შემიძლია რამდენიმე კურსი გავიარო პარალელურად?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                დიახ, შენ შეგიძლია გაიარო რამდენიმე კურსი პარალელურად, თუ შენ
                გაქვს მსგავსი რესურსები და დრო.
              </p>
            </div>
          </div>
          <div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                რას ნიშნავს ქოინები საიტზე?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                ქოინები ნიშნავს საიტზე განათლების სტატუსს, რომელიც შეგიძლია
                გამოიყენო სასწავლო მასალაში.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                რას ნიშნავს ქოინები საიტზე?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                ქოინები ნიშნავს საიტზე განათლების სტატუსს, რომელიც შეგიძლია
                გამოიყენო სასწავლო მასალაში.
              </p>
            </div>
            <div className="mb-10">
              <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-primary"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                რას ნიშნავს ქოინები საიტზე?
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                ქოინები ნიშნავს საიტზე განათლების სტატუსს, რომელიც შეგიძლია
                გამოიყენო სასწავლო მასალაში.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

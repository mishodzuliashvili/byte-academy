type SocialProofProps = {};

export default function SocialProof({}: SocialProofProps) {
  return (
    <section className="mt-10">
      <div className="py-8 container">
        <dl className="flex w-fit gap-14 flex-wrap">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">50+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              მოსწავლე
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">10+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              ტუტორი
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">40+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              სკოლა
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

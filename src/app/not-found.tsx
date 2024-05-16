import { Button } from "@/components/ui/button";
import Link from "next/link";

type NotFoundPageProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function NotFoundPage({
  params,
  searchParams,
}: NotFoundPageProps) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-16 container text-center flex items-center justify-center">
        <div className="max-w-screen-sm">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            მსგავსი გვერდი არ არსებობს
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            სამწუხაროდ გვერდი ვერ მოიძებნა
          </p>

          <Button size="lg" asChild className="font-semibold">
            <Link href="/">მთავარი გვერდი</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

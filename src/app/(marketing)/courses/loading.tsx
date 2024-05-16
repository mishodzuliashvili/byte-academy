type LoadingProps = {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function Loading({ params, searchParams }: LoadingProps) {
  //   return <>Loading... Pls Waait</>;
  return (
    <div className="container">
      {/* just loading text */}
      <p className="text-2xl font-bold text-center mt-10">დაელოდეთ...</p>
    </div>
  );
}

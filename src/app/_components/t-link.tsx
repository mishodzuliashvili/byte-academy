"use client";
import useNavigation from "@/hooks/use-navigation";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children?: React.ReactNode;
  className?: string;
};

const TLink = ({ href, children, className }: Props) => {
  const { push } = useNavigation();

  const handleClick = () => push(href);

  return (
    <div className={cn(className, "cursor-pointer")} onClick={handleClick}>
      {children}
    </div>
  );
};

export default TLink;

import LogoSVG from "@/assets/logo-svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import TLink from "./t-link";

type LogoProps = {
  textSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  imgSize?: number;
};

export default function Logo({}: LogoProps) {
  return (
    <span className="underline text-primary">
      <TLink
        href="/"
        className="flex items-center gap-3 underline text-primary"
      >
        {/* <LogoSVG color="--primary" /> */}
        <h1 className={cn("font-semibold", `text-md`, "underline")}>ბაიტი</h1>
      </TLink>
    </span>
  );
}

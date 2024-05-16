import LessonSVG from "@/assets/lesson-svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { CiVideoOn } from "react-icons/ci";
import { FaArrowRight, FaVideo } from "react-icons/fa";
import { GoArrowRight, GoVideo } from "react-icons/go";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoMdVideocam } from "react-icons/io";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import SimpleGame from "./simple-game";
import prisma from "@/lib/prisma";
type HeroProps = {};

export default async function Hero({}: HeroProps) {
  const users = await prisma.user.findMany({
    take: 5,
  });
  return (
    <>
      <div className="hidden absolute left-[41%] translate-x-[-50%] top-24 text-sm lg:flex flex-col gap-1 items-center animate-opacity">
        <p className="text-base-content-secondary/80">იყავი პირველი</p>
        <svg
          className="w-10 h-10 fill-base-content-secondary"
          viewBox="0 0 130 130"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M60.9866 102.011C75.5791 112.188 92.2457 119.614 108.76 118.142C114.825 117.601 120.44 115.34 126.202 113.089C126.708 112.891 126.959 112.318 126.761 111.813C126.564 111.307 125.991 111.055 125.486 111.253C119.899 113.436 114.463 115.655 108.587 116.178C92.3221 117.629 75.9409 110.146 61.6177 100.05C61.6659 99.904 61.7161 99.7581 61.7664 99.6122C62.8717 96.4058 62.1703 91.7303 60.3636 86.8178C57.7429 79.686 52.8573 72.0229 48.4641 67.7902C46.4383 65.8366 44.4768 64.6098 42.8751 64.3519C41.5406 64.1357 40.3951 64.5004 39.5108 65.5345C38.7833 66.3888 38.3673 67.4776 38.2447 68.7539C38.0819 70.4574 38.4477 72.5256 39.2174 74.7761C42.0652 83.1034 50.4316 94.0615 54.9675 97.5779C56.3884 98.6797 57.8334 99.7607 59.3045 100.818C59.0111 101.74 58.7277 102.621 58.38 103.433C57.8696 104.626 57.2244 105.663 56.1352 106.411C54.1255 107.791 51.7158 108.026 49.2519 107.666C45.3068 107.093 41.2271 105.009 38.2186 103.222C21.2968 93.1733 12.9424 75.7346 8.44871 58.2386C3.90274 40.5446 3.30786 22.7699 1.96336 12.2859C1.89302 11.7467 1.39863 11.3638 0.860028 11.4341C0.321425 11.5018 -0.0604183 11.9968 0.00791197 12.5359C1.36045 23.0773 1.9714 40.9432 6.53948 58.7283C11.1598 76.7114 19.8197 94.5877 37.2137 104.918C40.4152 106.817 44.7703 109.005 48.9685 109.617C51.9369 110.047 54.8289 109.698 57.2486 108.036C58.6594 107.067 59.5316 105.749 60.1908 104.21C60.4862 103.519 60.7394 102.78 60.9866 102.011ZM59.9436 98.8516C60.8761 95.976 60.1144 91.8475 58.5147 87.4976C55.9965 80.6445 51.3179 73.2757 47.0975 69.2071C45.6827 67.8449 44.3382 66.8577 43.1504 66.4487C42.2923 66.1518 41.5426 66.1883 41.0101 66.8134C40.3971 67.5323 40.166 68.5143 40.176 69.6604C40.1861 70.981 40.5217 72.5048 41.0824 74.1405C43.8136 82.1266 51.8243 92.6498 56.1734 96.0203C57.4113 96.9788 58.6694 97.9244 59.9436 98.8516Z"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M127.814 110.052C127.747 110.502 127.522 111.075 127.263 111.677C126.678 113.039 125.846 114.493 125.476 115.196C125.225 115.678 125.41 116.274 125.892 116.527C126.375 116.78 126.97 116.592 127.223 116.11C127.673 115.251 128.774 113.323 129.365 111.727C129.669 110.906 129.832 110.151 129.799 109.606C129.765 109.072 129.548 108.713 129.239 108.458C128.913 108.189 128.409 108.03 127.735 108.051C126.996 108.075 125.941 108.309 124.781 108.395C123.808 108.468 122.745 108.437 121.779 107.952C121.292 107.707 120.699 107.903 120.456 108.39C120.213 108.874 120.408 109.468 120.894 109.71C122.707 110.622 124.765 110.424 126.391 110.19C126.875 110.119 127.476 110.073 127.814 110.052Z"
          ></path>
        </svg>
      </div>
      <div className="container mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          <div className="flex items-start flex-col lg:col-span-2 w-full">
            <h1
              className="group w-full lg:text-6xl text-4xl mb-8 lg:mb-10 font-bold tracking-tight"
              style={{}}
            >
              შექმენი{" "}
              <span className="relative mr-2 lg:backdrop:mr-3">
                <span className="">აზროვნება</span>
                <span className="absolute top-0 -translate-y-1/3 translate-x-1/2 right-0 drop-shadow-md scale-75 saturate-[0] group-hover:rotate-6 group-hover:saturate-100 group-hover:scale-[0.9] duration-150">
                  📚
                </span>
              </span>{" "}
              <br />
              <span className="inline-block relative whitespace-nowrap">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50.6 52.4"
                  className="absolute top-3 translate-x-full -right-2 w-5 fill-[#05c46b] group-hover:rotate-[30deg] duration-150"
                >
                  <path d="M50.6 26.7a3.3 3.3 0 0 0-4-2.7l-1.2.2c-4.1.9-7.3 1.1-10 0-2.8-1.1-4.9-3.6-7-7.8-1.5-3-1.7-5.7-2.2-9l-.5-3-.2-1.6-.3-1C24.4.4 23.2 0 22.4 0s-1.5.1-2.2.6c-.4.2-1 .7-1.4 2-.9 3.3-1.3 6.9-2.1 10.3-.6 2.6-1.5 5-3.8 7a21 21 0 0 1-6.8 3.5l-2.7.2c-.7.2-1.4.5-2 1a3.7 3.7 0 0 0-1 4.6c.3.5.9 1.4 2.3 2 1 .4 3.7 1.1 4 1.1 2.4 1 4.4 2.7 5.9 4.9 1.8 2.4 3.3 4.2 4 7.2l1.2 3.6v1.5c0 .6.4 1.1.7 1.5a3 3 0 0 0 2 1.3c.5.2 1.2.2 2 0a8.9 8.9 0 0 0 3.9-3.3c1.7-2.5 3.4-6.1 4.6-7.5 4.2-4.9 9.7-8.5 15.8-10.6l1.1-.2a3.3 3.3 0 0 0 2.7-4ZM25.9 37.1c-.8.9-1.8 2.7-3 4.6-1-3.3-2.6-5.6-4.7-8.5a19.1 19.1 0 0 0-5.3-5.3c1.6-.8 3.1-1.8 4.4-2.9 2.2-1.8 3.7-4 4.7-6.3l.4.8c3 6 6.4 9.4 10.4 11h.2c-2.6 1.9-5 4.2-7.1 6.6Z"></path>
                </svg>
                <svg
                  className="absolute bottom-1 -left-0 w-7 -translate-x-full translate-y-full fill-[#05c46b] -rotate-[85deg] group-hover:-rotate-[95deg] duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 67 73.4"
                >
                  <path d="M22.4 68.5A132 132 0 0 0 2.8 65c-1.4-.2-2.7.8-2.8 2.2-.2 1.4.8 2.6 2.1 2.8 6.3.8 12.8 1.7 18.9 3.4 1.3.4 2.7-.4 3.1-1.7.4-1.3-.4-2.7-1.7-3.1Zm19.4-25.4c-10.3-10.5-21.9-19.7-32-30.5-.9-1-2.5-1.1-3.5-.1-1 .9-1.1 2.5 0 3.5 10.1 10.8 21.7 20 32 30.6 1 1 2.6 1 3.6 0 .9-1 1-2.6 0-3.5ZM61.1 2.6l.9 18c0 1.4 1.2 2.4 2.6 2.4 1.4 0 2.4-1.2 2.4-2.6l-.9-18.1a2.6 2.6 0 0 0-2.7-2.4c-1.3 0-2.4 1.3-2.3 2.6Z"></path>
                </svg>
                <svg
                  className="absolute bottom-0 left-[40%]  w-40 md:w-48 translate-y-full fill-[#05c46b] group-hover:scale-110 duration-150"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 665 40.7"
                >
                  <path d="M220.5 3.6c-73.4-.8-147 2.2-218 15.2-1.3.2-1.8.7-1.9.8-.6.6-.6 1.3-.6 1.8 0 .3.4 1.7 2.1 1.8l12.7-.7c15.1-.8 30.3-2 45.4-3.3 34.2-3 68.4-5.6 102.7-8 19.3-1.3 38.5-2.4 57.8-3.3 46.3.5 92.5 2.7 137.8 4.8l-48.3 3a2308.8 2308.8 0 0 0-105 7.9l-5.7.5a3 3 0 0 0-1.3.3 2 2 0 0 0-1.4 2c0 .3 0 2 2.2 2.3 98.1 15.1 200.5-2.5 299 12.2 1.2.2 2.2-.6 2.4-1.8.2-1.2-.6-2.2-1.8-2.4-92.8-13.9-189 1-281.9-9.9a1842.6 1842.6 0 0 1 93.6-6.8c23.3-1.2 54.7-3.6 87.6-5.2l84.7 4.8 35.7 1.8c4.9.3 17.5 1.4 19.3.9 1.4-.3 1.8-1.3 1.8-1.8 0-.6 0-1.2-.6-1.9-.2-.2-.8-.6-2-1-33.2-9.5-87.6-9.4-138.5-7.1l-32.9-1.7c-25.1-1.2-50.5-2.4-76-3.4a5008 5008 0 0 1 215.8 0c30.2.5 111.6 3.8 143.7 6.7-.4.4-.6 1-.6 1.6a2 2 0 0 0 2.2 2c6.6-.3 10.4-.7 12-1.1.9-.2 1.5-.6 1.7-.9.6-.6.7-1.3.6-1.9 0-.4-.3-.8-.7-1.2a5 5 0 0 0-2.1-1c-12.6-3.1-120.8-7.7-156.7-8.3C410.4-.5 315.4-.9 220.5 3.6Z"></path>
                </svg>
                <span className="text-[black] text-wrap">
                  რომელიც გამოგადგება
                </span>
              </span>
            </h1>
            <p className="text-lg paragraph max-w-xl mt-5 text-gray-700">
              ისწავლე ექსპერტებთან ნებისმიერი ადგილიდან და მიიღე ცოდნა და
              განათლება სასურველ სფეროში. მიაღწიე ახალ საფეხურებს.
            </p>
            {/* <ul className="hidden md:block text-base-content-secondary leading-relaxed space-y-1.5 mt-10">
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#05c46b"
                  className="w-[18px] h-[18px] text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                ისწავლე საფუძვლები
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#05c46b"
                  className="w-[18px] h-[18px] text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                გაიუმჯობესე აზროვნება
              </li>
              <li className="flex items-center justify-center lg:justify-start gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#05c46b"
                  className="w-[18px] h-[18px] text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="relative">
                  <p>გააკეთე დავალებები</p>
                </div>
              </li>
            </ul> */}
            <div className="flex items-center gap-5 mt-10 flex-wrap">
              <Button
                size="lg"
                asChild
                className="font-bold sm:w-[200px] rounded-lg py-6 w-full"
              >
                <Link href="/courses">დაიწყე სწავლა</Link>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="font-bold w-full sm:w-[200px] rounded-lg py-6"
              >
                <Link href="/courses">დარეგისტრირდი</Link>
              </Button>
            </div>
            <div className="flex gap-5 flex-row items-start mt-10">
              <div className="flex -space-x-4 rtl:space-x-reverse">
                {users.map((user) => (
                  <img
                    key={user.id}
                    className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                    src={user.profileImage}
                    alt=""
                  />
                ))}
              </div>
              {/* <div className="">
                <div className="flex flex-col justify-center gap-1 ">
                  <div className="rating flex gap-2 rating-sm gap-0.5">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-6 h-6 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-6 h-6 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-6 h-6 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-6 h-6 text-yellow-500"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      ></path>
                    </svg>
                    <div className="relative w-6 h-6">
                      <div className="absolute w-4 h-6 z-10 overflow-hidden">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="star"
                          className="svg-inline--fa fa-star w-6 h-6 text-yellow-500"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                        >
                          <path
                            fill="currentColor"
                            d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                          ></path>
                        </svg>
                      </div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="star"
                        className="svg-inline--fa fa-star w-6 h-6 text-yellow-500"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path
                          fill="currentColor"
                          d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-left text-sm">
                    <span className="opacity-80">საუკეთესო ხარისხი</span>
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="text-center mt-30">
          <h2 className="font-extrabold text-4xl md:text-5xl tracking-tight mb-4 md:mb-6">
            ისწავლე ხალისით, მარტივად და ავტომატურად
          </h2>
          <p className="md:text-lg opacity-90">
            Exercise more, read daily, and meditate consistently!
          </p>
        </div> */}
          </div>
          <div className="self-center justify-self-end lg:col-span-1 w-full h-full">
            {/* <LessonSVG color="--primary" /> */}
            {/* <SimpleGame /> */}
            <video
              poster="/homepage/gamificationPoster.png"
              className="rounded-lg aspect-square w-full sm:w-96 lg:w-[28rem] border-0 dark:border-2 border-base-content/20 dark:shadow-lg mb-8"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              width="500"
              height="500"
            >
              <source
                src="https://d279kcxbcggtq3.cloudfront.net/gamificationVideo.mp4"
                type="video/mp4"
              />{" "}
            </video>
          </div>
        </div>
      </div>

      {/* <section className="mt-5 gap-16 grid lg:grid-cols-5 w-full container items-center">
        <div className="py-8 lg:col-span-3">
          <Button size="alert" variant="alert" asChild className>
            <Link href="#">
              <span className="text-xs bg-primary rounded-full text-white px-4 py-1.5 mr-3 from-primary bg-gradient-to-r to-violet-600">
                ახალი
              </span>{" "}
              <span className="text-sm font-medium">
                საბაზისო კურსი უკვე დაიწყო!
              </span>
              <RiArrowRightSLine className="text-xl ml-1" />
            </Link>
          </Button>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            ისწავლე{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">
              ექსპერტებთან
            </span>{" "}
            ნებისმიერი ადგილიდან
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-600 lg:text-xl dark:text-gray-400">
            ჩვენი მისიაა დავეხმაროთ მოსწავლეებს იპოვონ სასურველი კურსებო და
            ისწავლონ წარმატებით.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row  sm:space-y-0 sm:space-x-4">
            <Button size="lg" asChild>
              <Link href="#">
                ნახე ახლავე <HiOutlineArrowRight className="ml-2 text-lg" />
              </Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#">
                <AiOutlineVideoCameraAdd className="mr-2 text-lg" />
                უყურე ვიდეოს
              </Link>
            </Button>
          </div>
        </div>
        <div className="lg:col-span-2 shadow-wow">
          <LessonSVG color="--primary" />
        </div>
      </section> */}
    </>
  );
}

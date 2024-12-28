import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Handlee } from "next/font/google";
import { Avatar } from "@nextui-org/avatar";

const handlee = Handlee({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Stude",
  description: "The Perfect Study Environment for you!",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#FBFAF9] px-[100px]">
      <div className="navbar border-b border-[#eee]">
        <div className="navbar-start">
          <a className="btn btn-ghost text-[20px]">Stude</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Pricing</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Reviews</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href=""
            className="btn rounded-lg bg-[#434bbf] px-4 py-2.5 font-medium tracking-wide text-white hover:border-spacing-2 hover:border hover:border-[#434bbf] hover:bg-white hover:text-[#434bbf] hover:shadow-lg"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className="hero min-h-[calc(100vh-69px)]">
        <div className="hero-content text-center">
          <div>
            <div className="relative">
              <h1 className="text-[60px] font-semibold leading-[50px]">
                Missed an Assignment?
              </h1>
              <p
                className={`${handlee.className} absolute bottom-[-25px] right-[-65px] rotate-[-3deg] text-[20px] font-medium`}
              >
                never again! ❌
              </p>
            </div>
            <div className="mt-8">
              <p className="font-semibold">
                Helpful study organization tool for students:
              </p>
              <p className="ml-[170px] mt-2.5 text-left">
                ✔ Another thing we do
              </p>
              <p className="ml-[170px] mt-1 text-left">
                ✔ Another thing we do
              </p>
              <p className="ml-[170px] mt-1 text-left">
                ✔ Another thing we do
              </p>
            </div>
            <Link
              href=""
              className="btn mt-8 w-[347.5px] rounded-lg bg-[#434bbf] px-10 py-2.5 text-[16px] font-medium tracking-wide text-white hover:border-spacing-2 hover:border hover:border-[#434bbf] hover:bg-white hover:text-[#434bbf] hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="review mx-auto my-12 flex max-w-md flex-col items-center space-y-4 max-lg:px-4 md:my-24 md:space-y-6 lg:max-w-lg">
        <div className="rating">
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-[#EAB308]"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-[#EAB308]"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-[#EAB308]"
            defaultChecked
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-[#EAB308]"
          />
          <input
            type="radio"
            name="rating-1"
            className="mask mask-star bg-[#EAB308]"
          />
        </div>
        <p className="text-base lg:text-lg space-y-2 text-center leading-relaxed">
          <span className="bg-yellow-100/80 px-1.5 font-medium">
            DataFast is better than Google Analytics for simplicity and actual
            useful metrics.
          </span>{" "}
          The Revenue/Visitor metric on the main dashboard is exactly what
          founders need to see.
        </p>
        <div className="flex flex-row items-center justify-center gap-3">
          <Image
            src="/images/profile_image.png"
            alt="profile-image"
            width={45}
            height={45}
            className="rounded-full"
          />
          <p className="font-semibold">James Miller</p>
        </div>
      </div>
    </div>
  );
}

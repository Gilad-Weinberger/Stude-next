"use client";

import type { Metadata } from "next";
import Link from "next/link";
import { Handlee } from "next/font/google";
import React from "react";

const handlee = Handlee({ subsets: ["latin"], weight: ["400"] });

// export const metadata: Metadata = {
//   title: "Stude",
//   description: "The Perfect Study Environment for you!",
// };

interface StepCardProps {
  step_number: number;
  image_src: string;
  title: string;
  text: string;
}

const StepCard = ({ step_number, image_src, title, text }: StepCardProps) => (
  <div className="rounded-[1.3rem] border border-base-content/5 bg-neutral/5 p-1.5 dark:bg-neutral/50">
    <div className="card relative w-[calc((100vw-380px)/3)] bg-base-100 shadow-xl">
      <div className="absolute left-[20px] top-[20px] flex h-[50px] w-[50px] items-center justify-center rounded-full border border-base-100/20 bg-[#434bbf]">
        <p className="text-center text-[20px] font-extrabold text-white">
          {step_number}
        </p>
      </div>
      <figure>
        <img src={image_src} alt="Shoes" className="rounded-t-[13px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default function Home() {
  const openModal = () => {
    const modal = document.getElementById("email_modal") as HTMLDialogElement;
    console.log(modal);
    if (modal) {
      modal.showModal();
      console.log("model exists");
    }
    else{
      console.log("modal does not exist")
    }
  };

  return (
    <div className="flex flex-col items-center bg-[#FBFAF9] px-5 sm:px-[100px]">
      <div className="navbar border-b border-[#eee]">
        <div className="navbar-start">
          <a className="btn btn-ghost text-[20px]">
            <img src="/images/big-logo.png" alt="logo" />
          </a>
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
            onClick={() => openModal}
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
            <div className="mt-12">
              <p className="text-[20px] font-semibold">
                Helpful study organization tool for students:
              </p>
              <p className="ml-[130px] mt-2.5 text-left text-[18px]">
                <span className="mr-0.5 font-bold text-[#434bbf]">✔</span>{" "}
                Manage your tasks
              </p>
              <p className="ml-[130px] mt-2.5 text-left text-[18px]">
                <span className="mr-0.5 font-bold text-[#434bbf]">✔</span>{" "}
                Never miss ANYTHING
              </p>
              <p className="ml-[130px] mt-2.5 text-left text-[18px]">
                <span className="mr-0.5 font-bold text-[#434bbf]">✔</span>{" "}
                Everything in ONE place
              </p>
            </div>
            <Link
              href=""
              className="btn mt-8 w-[440px] rounded-lg bg-[#434bbf] px-10 py-2.5 text-[16px] font-medium tracking-wide text-white hover:border-spacing-2 hover:border hover:border-[#434bbf] hover:bg-white hover:text-[#434bbf] hover:shadow-lg"
              onClick={() => openModal}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="review mx-auto flex max-w-md flex-col items-center space-y-4 max-lg:px-4 md:my-24 md:space-y-6 lg:max-w-lg">
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
      <div>
        <p className="text-center text-[#434bbf]">HOW IT WORKS?</p>
        <p className="text-center">Orgazine your entire academics in 3 steps</p>
        <div className="flex w-full items-center justify-between">
          <StepCard
            step_number={1}
            image_src="/images/datafast.png"
            title="Step 1"
            text="Content for step 1"
          />
          <img src="/icons/arrow.svg" alt="arrow" className="w-9" />
          <StepCard
            step_number={2}
            image_src="/images/datafast.png"
            title="Step 2"
            text="Content for step 2"
          />
          <img src="/icons/arrow.svg" alt="arrow" className="w-9" />
          <StepCard
            step_number={3}
            image_src="/images/datafast.png"
            title="Step 3"
            text="Content for step 3"
          />
        </div>
      </div>
      <div className="review mx-auto flex max-w-md flex-col items-center space-y-4 max-lg:px-4 md:my-24 md:space-y-6 lg:max-w-lg">
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
        </div>
        <p className="text-base lg:text-lg space-y-2 text-center leading-relaxed">
          Been using DataFast for over a month now. It's amazing!{" "}
          <span className="bg-yellow-100/80 px-1.5 font-medium">
            I've been able to quadruple my conversion rate
          </span>{" "}
          and increase revenue!
        </p>
        <div className="flex flex-row items-center justify-center gap-3">
          <Image
            src="/images/profile_image.png"
            alt="profile-image"
            width={45}
            height={45}
            className="rounded-full"
          />
          <p className="font-semibold">Mike Williams</p>
        </div>
      </div> */}
      <dialog id="email_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
      </dialog>
    </div>
  );
}

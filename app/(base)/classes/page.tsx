import type { Metadata } from "next";
import { Classes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Stude | Classes",
  description: "Stude Classes Page",
};

export default function Page() {
  return (
    <div className="mt-10 flex flex-row flex-wrap gap-9">
      {Classes.map((classs) => (
        <Link
          key={classs.title}
          href={classs.href}
          className="px-2.5 pt-2.5 bg-white rounded-[10px] w-[250px] cursor-pointer no-underline"
        >
          <Image
            src="/images/class.jpg"
            alt="class-icon"
            width={230}
            height={193}
            className="rounded-[10px]"
          />
          <div className="flex items-center justify-between p-2.5">
            <h2 className="m-0 text-[24px] font-bold">{classs.title}</h2>
            <p className="no-underline m-0 w-9 h-9 leading-8 border-2 border-black text-center rounded-[10px] font-bold">
              &gt;
            </p>
          </div>
        </Link>
      ))}
      <Link
        href="/"
        className="bg-[#434bbf] rounded-[10px] w-[270px] h-[240px] gap-2.5 cursor-pointer no-underline flex flex-row items-center justify-center font-bold text-white"
      >
        <p className="m-0 text-[24px]">Create class</p>
        <p className="rounded-[10px] no-underline m-0 w-9 h-9 leading-8 border-2 border-white text-center font-bold">
          +
        </p>
      </Link>
    </div>
  );
}

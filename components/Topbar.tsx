import Image from "next/image";
import Link from "next/link";

interface TopbarProps {
  title: string;
  currentDate: string;
  user: {
    name: string;
    username: string;
    email: string;
    profile_image: string;
  };
}

function Topbar({ title, currentDate, user }: TopbarProps) {
  return (
    <div className="flex flex-row max-w-[calc(100vw-18rem)] pb-2 justify-between border-b border-[#b1b1b1]">
      <div className="flex items-center gap-2.5">
        {title === "dashboard" ? (
          <h1 className="m-0  ">Dashboard</h1>
        ) : (
          <>
            <Image
              src="/icons/schedule.svg"
              alt="calendar"
              width={20}
              height={20}
            />
            <p className="m-0 text-2xl">{currentDate}</p>
          </>
        )}
      </div>
      <div className="flex flex-row items-center gap-5">
        <div className="relative bg-white py-2 px-4 rounded-3xl border-[#ddd]">
          <input
            type="text"
            placeholder="Search"
            className="border-none bg-none outline-none text-[14px] w-[250px] pr-[25px] placeholder:text-[#999] pl-2"
          />
          <Image
            src="/icons/search.svg"
            alt="search"
            width={20}
            height={20}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 fill-[#666]"
          />
        </div>
        <div className="flex flex-row items-center gap-2.5 py-[5px] pl-5 border-l border-[#b1b1b1]">
          <Image
            className="rounded-full border border-[#ddd]"
            src={user.profile_image}
            alt="profile"
            height={30}
            width={30}
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;

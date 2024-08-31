import Link from "next/link";
import { Leagues } from "./leagues";
import { Metadata } from "next";
import SectionHead from "./section/sectionHead";

export const metadata: Metadata = {
  title: "Soccer",
};

const Page = () => {
  const leagues = Leagues;
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-400 to-teal-500">
      <SectionHead />
      <div className="p-5 mt-5 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:min-w-[960px] w-3/4 sm:w-1/2 md:w-5/6 mx-auto">
        {leagues?.map((league: any, index: number) => (
          <Link
            key={index}
            href={`/soccer/${league.code}`}
            className="flex flex-row justify-center aspect-video hover:bg-gradient-to-b border-[3px] border-black shadow-[8px_8px_0_0_#27272a] hover:shadow-[15px_15px_0_0_#27272a] rounded-[12px] transition-shadow"
          >
            <div className="flex flex-row w-3/4  items-center">
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https:\/\/media.api-sports.io\/football\/leagues\/${league.id}.png`} alt="" className="w-[80px] h-[80px] p-2 border-[4px] border-zinc-800  shadow-[5px_5px_0_0_#27272a] rounded-[14px]" />
              <p className="font-bold text-zinc-800 text-lg mt-2 ms-5">{league.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Page;

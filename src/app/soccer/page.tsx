import Link from "next/link";
import { Leagues } from "./leagues";
import clsx from "clsx";

const Page = () => {
  const leagues = Leagues;
  return (
    <div className="w-full py-20 px-3">
      <h1 className="text-center mb-16 font-bold text-3xl">Soccer Fixtures</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] lg:min-w-[960px] w-3/4 sm:w-1/2 md:w-5/6 mx-auto mt-[10px]">
        {leagues?.map((league: any, index: number) => (
          <Link key={index} href={`/soccer/${league.code}`} className="flex flex-row justify-center aspect-video border-[3px] border-black shadow-[8px_8px_0_0_#000000] hover:shadow-[15px_15px_0_0_#000000] rounded-[12px] transition-shadow">
            <div className="flex flex-row w-3/4 items-center">
              {/*  eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https:\/\/media.api-sports.io\/football\/leagues\/${league.id}.png`} alt="" className="w-[80px] h-[80px] border-[4px] border-black shadow-[5px_5px_0_0_#000000] rounded-[14px]" />
              <p className="font-bold text-lg mt-2 ms-10">{league.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Page;

import Link from "next/link";
import { Leagues } from "./leagues";

const Page = () => {
  const leagues = Leagues;
  return (
    <div className="mx-auto py-20 px-3">
      <h1 className="text-center mb-16 font-bold text-3xl">Soccer Fixtures</h1>
      <div className="w-1/4 mx-auto text-center flex flex-col mt-8 gap-4">
        {leagues?.map((league: any, index: number) => (
          <Link key={index} href={`/soccer/${league.code}`} className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white">
            {/*  eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https:\/\/media.api-sports.io\/football\/leagues\/${league.id}.png`} alt="" />
            <p>{league.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Page;

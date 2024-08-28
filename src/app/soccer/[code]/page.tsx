import Link from "next/link";
import React from "react";
import SectionList from "./section/sectionList";
import { Leagues } from "../leagues";

const Page = async ({ params }: { params: { code: string } }) => {
  const league = Leagues.filter((league) => {
    return league.code == params.code;
  })[0];
  return (
    <div className=" py-20">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img alt={league?.name.toString()} src={`https:\/\/media.api-sports.io\/football\/leagues\/${league?.id}.png`} className=" w-[100px] md:w-[120px]  border-[4px] border-black shadow-[5px_5px_0_0_#000000] rounded-[14px]" />
      <Link href={"/soccer"} className="px-3 py-2 mt-3 bg-zinc-900 hover:bg-zinc-800 rounded-md text-center text-white text-sm block w-[100px] md:w-[120px]">
        ◁ Back
      </Link>

      <SectionList code={params.code} />
    </div>
  );
};

export default Page;

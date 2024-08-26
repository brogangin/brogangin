import Link from "next/link";
import React from "react";
import SectionList from "./section/sectionList";
import { Leagues } from "../leagues";

const Page = async ({ params }: { params: { code: string } }) => {
  const league = Leagues.filter((league) => {
    return league.code == params.code;
  })[0];
  return (
    <div className="w-full py-20">
      <div className="flex flex-row mb-16 items-center px-5">
        <Link href={"/soccer"} className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white text-sm">
          ◁ Back
        </Link>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt={league?.name.toString()} src={`https:\/\/media.api-sports.io\/football\/leagues\/${league?.id}.png`} className="mx-auto w-[80px] md:w-[100px]" />
      </div>
      <SectionList code={params.code} />
    </div>
  );
};

export default Page;

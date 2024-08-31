import Link from "next/link";
import React from "react";
import SectionList from "./section/sectionList";
import { Leagues } from "../leagues";
import SectionHead from "../section/sectionHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soccer",
};

const Page = async ({ params }: { params: { code: string } }) => {
  const league = Leagues.filter((league) => {
    return league.code == params.code;
  })[0];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-emerald-400 to-teal-500">
      <SectionHead />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <div className="container mt-12 text-zinc-800">
        <div className="text-2xl">
          <Link href={"/soccer"} className="inline hover:underline underline-offset-2">
            {"Home"}
          </Link>
          {"  "}/{"  "}
          <p className="text-4xl inline">{league?.name.toString()}</p>
        </div>
        <SectionList code={params.code} />
      </div>
    </div>
  );
};

export default Page;

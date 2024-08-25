import Link from "next/link";
import React from "react";
import Item from "./item";

const getMatches = async (code: string) => {
  const res = await fetch(`https://fixturedownload.com/feed/json/${code}`);
  const json = await res.json();
  return json;
};

const Page = async ({ params }: { params: { code: string } }) => {
  const matches = await getMatches(params.code);

  return (
    <div className="max-w-screen-md mx-auto py-20 px-3">
      <h1 className="text-center mb-16 font-bold text-3xl">Belajar CRUD</h1>
      <div className="flex flex-col mt-8 gap-4">
        {matches?.map((match: any, index: number) => (
          <Item key={index} match={match}></Item>
        ))}
      </div>
    </div>
  );
};

export default Page;

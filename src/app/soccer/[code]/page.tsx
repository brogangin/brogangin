import Link from "next/link";
import React from "react";
import SectionList from "./section/sectionList";

const Page = async ({ params }: { params: { code: string } }) => {
  return (
    <div className="">
      <SectionList code={params.code} />
    </div>
  );
};

export default Page;

import Link from "next/link";
import React from "react";
import Item from "./item";

const getPosts = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/admin/api/post", { method: "GET", next: { revalidate: 0 } });
  const json = await res.json();
  return json;
};

const Page = async () => {
  const posts = await getPosts();

  return (
    <div className="max-w-screen-md mx-auto py-20 px-3">
      <h1 className="text-center mb-16 font-bold text-3xl">Belajar CRUD</h1>
      <Link href={"/admin/create"} className="px-3 py-2 bg-zinc-900 hover:bg-zinc-800 rounded-md text-white">
        Create
      </Link>
      <div className="flex flex-col mt-8 gap-4">
        {posts?.posts?.map((post: any, index: number) => (
          <Item key={index} post={post}></Item>
        ))}
      </div>
    </div>
  );
};

export default Page;

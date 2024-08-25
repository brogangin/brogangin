"use client";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  post: Post;
}

const Item = ({ post }: Props) => {
  const router = useRouter();

  const handleDelete = async (id: number) => {
    await fetch("/admin/api/post?id=" + id, {
      method: "DELETE",
    });
    router.refresh();
  };
  return (
    <div className="border rounded-sm p-4 flex flex-col">
      <h2 className="text-sm">ID: {post.id} </h2>
      <h1>Title: {post.title}</h1>
      <p>Content: {post.content}</p>
      <div className="inline-flex mt-4 gap-2">
        <button className="text-xs hover:text-zinc-800 font-bold" onClick={() => router.push(`/admin/update/${post.id}`)}>
          Update
        </button>
        <button className="text-xs text-red-500 hover:text-red-400 font-bold" onClick={() => handleDelete(post.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;

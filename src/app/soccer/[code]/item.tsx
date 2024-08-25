"use client";
import { Post } from "@prisma/client";
import { useRouter } from "next/navigation";

interface Props {
  match: Match;
}

const Item = ({ match }: Props) => {
  const router = useRouter();

  return (
    <div className="border rounded-sm p-4 flex flex-col">
      <h2 className="text-sm">
        {match.HomeTeam} | {match.AwayTeam}{" "}
      </h2>
      <h2 className="text-sm">
        {String(match.HomeTeamScore)} | {String(match.AwayTeamScore)}
      </h2>
    </div>
  );
};

export default Item;

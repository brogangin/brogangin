import clsx from "clsx";
import moment from "moment";
import React from "react";
import { Teams } from "../../team";

interface CardProps {
  match?: Match;
  isToday?: boolean;
}

interface TeamProps {
  isToday?: boolean;
  team: Team;
  score: Number;
  date?: string;
}
interface VersusProps {
  date?: string;
}
const Team = ({ team, isToday, score, date }: TeamProps) => {
  const isFinish = moment(date).isBefore(moment());
  return (
    <div className="flex flex-col items-center justify-center">
      {/*  eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={team?.name.toString()}
        src={`https:\/\/media.api-sports.io\/football\/teams\/${team?.id}.png`}
        className={clsx("w-[100px] h-[100px] border-[4px] border-black shadow-[5px_5px_0_0_#000000] rounded-[14px]", isToday && "w-[120px] h-[120px] border-[5px] shadow-[10px_10px_0_0_#000000]")}
      />
      <p className="max-w-[120px] font-bold text-lg mt-2 text-center truncate">{team?.name}</p>
      {isFinish ? <p className="font-bold text-2xl text-center">{String(score)}</p> : ""}
    </div>
  );
};

const Versus = ({ date }: VersusProps) => {
  const isFinish = moment(date).isBefore(moment());
  return (
    <div className="grid relative h-full py-3">
      <span className="absolute font-bold text-2xl place-self-center">VS</span>
      <span className="text-sm font-medium  place-self-end bg-black rounded-full px-3 py-1 text-white">{isFinish ? "Selesai" : moment(date).format("HH:mm")}</span>
    </div>
  );
};

export default function Card({ match, isToday }: CardProps) {
  const HomeTeam = Teams.filter(function (team) {
    return team.name == match?.HomeTeam;
  })[0];

  const AwayTeam = Teams.filter(function (team) {
    return team.name == match?.AwayTeam;
  })[0];
  return (
    <div
      className={clsx(
        "flex flex-row justify-evenly aspect-video border-[3px] border-black shadow-[8px_8px_0_0_#000000] hover:shadow-[15px_15px_0_0_#000000] rounded-[12px] transition-shadow",
        isToday && "shadow-[15px_15px_0_0_#000000] hover:shadow-[20px_20px_0_0_#000000]"
      )}
    >
      <Team team={HomeTeam} score={match?.HomeTeamScore ? match?.HomeTeamScore : 0} isToday={isToday} date={match?.DateUtc} />
      <Versus date={match?.DateUtc} />
      <Team team={AwayTeam} score={match?.AwayTeamScore ? match?.AwayTeamScore : 0} isToday={isToday} date={match?.DateUtc} />
    </div>
  );
}

"use client";
import moment from "moment";
import React from "react";
import clsx from "clsx";
import Card from "../components/card";
import { useEffect } from "react";
import "moment/locale/id";

interface Props {
  matches?: Match[];
  date?: string;
}

const DateTitle = ({ date }: Props) => {
  const day = moment(date).format("dddd");
  const _date = moment(date).format("Do MMM YYYY");
  const isToday = moment(date).isSame(moment(), "day");

  return (
    <div>
      {isToday ? <span className="font-bold text-2xl">Hari ini</span> : <span className="font-bold">{day}</span>}
      <span>, {_date}</span>
    </div>
  );
};

export default function SectionRow({ matches, date }: Props) {
  useEffect(() => {
    const element = document.querySelector("#today");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const isToday = moment(date).isSame(moment(), "day");

  return (
    <div className="mt-[40px]" id={isToday ? "today" : undefined}>
      <DateTitle date={date} />
      <div className={clsx("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mt-[10px]", isToday && "lg:grid-cols-2 grid-cols-1")}>
        {matches?.map((match, index) => (
          <Card key={index} match={match} isToday={isToday} />
        ))}
      </div>
    </div>
  );
}

import React from "react";
import groupBy from "lodash/groupBy";
import moment from "moment";
import SectionRow from "./sectionRow";

interface Props {
  code: string;
}

const getMatches = async (code: string) => {
  const res = await fetch(`https://fixturedownload.com/feed/json/${code}`, { next: { revalidate: 60 } });
  const json = await res.json();
  return json;
};

const SectionList = async ({ code }: Props) => {
  const matches: Match[] = await getMatches(code);
  const getMatchDate = (item: Match) => moment(item.DateUtc).format("YYYY-MM-DD");
  const matchesByDate = groupBy(matches, getMatchDate);

  return (
    <div>
      {Object.keys(matchesByDate).map((date, index) => (
        <div key={index}>
          <SectionRow matches={matchesByDate[date]} date={date} />
        </div>
      ))}
    </div>
  );
};

export default SectionList;

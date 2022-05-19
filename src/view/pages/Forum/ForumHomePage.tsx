import React from "react";
import { useNavigate } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { ForumEntry as ForumEntryModel } from "../../../server/models/ForumEntry";
import { ForumEntry } from "../../components/Forum/ForumEntry/ForumEntry";
import { Header } from "../../components/Common/Header/Header";

export const ForumHomePage = () => {
  const navigate = useNavigate();

  const entries: ForumEntryModel[] = [
    {
      profileName: "CocoBowler Ben",
      content: "",
      time: new Date().setMinutes(0),
      tag: "Sports",
      title: "Bowling basics",
      commentCount: 69,
    },
    {
      profileName: "HuskHustler Zara",
      content: "",
      time: new Date().setMinutes(0),
      tag: "Reducing waste",
      title: "Husk Recycling for dummies",
      commentCount: 420,
    },
    {
      profileName: "ravid-dev",
      content: "",
      time: new Date().setMinutes(0),
      tag: "Coding Coconuts",
      title: "Building a coconut based web-server",
      commentCount: 21254,
    },
  ];

  return (
    <div className="forum">
      <Header currentPage="forum"/>
      {entries.map((entry) => {
        return (
          <ForumEntry
            key={entry.title}
            id={entry.title}
            time={entry.time}
            tag={entry.tag}
            title={entry.title}
            commentCount={entry.commentCount}
            className="m-3"
          />
      )})}
    </div>
  );
};

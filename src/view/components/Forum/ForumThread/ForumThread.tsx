import { ForumEntry as ForumEntryModel } from "../../../../server/models/ForumEntry";
import { Comment as CommentModel } from "../../../../server/models/Comment";


import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { ForumTopic } from "../ForumTopic/ForumTopic";
import { ForumComment } from "../ForumComment/ForumComment";
import { Header } from "../../Common/Header/Header";

export type ForumThreadProps = {
  id: string;
};


export const ForumThread = ({id}: ForumThreadProps) => {
  const entry: ForumEntryModel = {
    id: 1,
    profileName: "CocoBowler Ben",
    content:
      "My dream is to play bowling with coconuts. Let's build some cocolanes together! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    time: new Date().setHours(0),
    tag: "Sports",
    title: "Bowling basics",
    commentCount: 69,
  };

  const comments: CommentModel[] = [
    {
      topicId: "Bowling basics",
      profileName: "Farmer Zara",
      time: new Date().setHours(0),
      commentCount: 0,
      comment: "I love this idea~!!"
    },
    {
      topicId: "Bowling basics",
      profileName: "Sustainability Samuel",
      time: new Date().setHours(1),
      commentCount: 0,
      comment: "This will definitely help with sustainability around the world!"
    },
    {
      topicId: "Bowling basics",
      profileName: "Farmer Zara",
      time: new Date().setHours(2),
      commentCount: 0,
      comment: "This is amazing. From a farmer's perspective, we could definitely make use of our empty space and waste. What do you think about using these practices in coutries with less humiditiy? Different climates will definitely effect they way these methods will be applied, but I think the general concept is great!"
    },
    {
      topicId: "Bowling basics",
      profileName: "Carbon Connor",
      time: new Date().setHours(0),
      commentCount: 0,
      comment: "Personally, I love fossil fuels and waste, so this isn't for me :("
    },
  ]

  return (
    <>
    <Header currentPage="forum" />
    <div className="forum-thread">
      <ForumTopic
        profileName={entry.profileName}
        content={entry.content}
        time={entry.time}
        tag={entry.tag}
        title={entry.title}
        commentCount={entry.commentCount}
      />
      {comments.map((comment, index) => {
        return (
          <ForumComment
            key={index}
            time={comment.time}
            comment={comment.comment}
            commentCount={comment.commentCount}
            profileName={comment.profileName}
            className="m-3"
          />
      )})}
    </div>
    </>
  );
};

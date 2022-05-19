import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';
import "./ForumComment.css"

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { timeSince } from "../timeSince";
import { buildClassName } from "../../../common/buildClassName";

export type ForumCommentProps = {
  time: number;
  profileName: string;
  commentCount: number;
  comment: string;
  className?: string
};

export const ForumComment = ({ time, profileName, comment, commentCount, className}: ForumCommentProps) => {
  const heading = (
    <div>
      <div className="flex align-items-center justify-content-between flex-wrap">
        <div className="time text-500 text-base font-light">
          {timeSince(time)}
        </div>
      </div>
      <Divider />
      <div className="profileName text-900 text-lg font-bold mb-3">
        {profileName}
      </div>
      <div className="topicContent text-lg font-normal text-800">
        {comment}
      </div>
    </div>
    
  );

  const buttons = (
    <div className="flex justify-content-between flex-wrap">
      <div className="flex justify-content-start flex-wrap card-container">
        <Button label={commentCount.toString()} icon="pi pi-comment" iconPos="left" className="p-button-text"/>
        <Button label="Translate" icon="pi pi-comments" iconPos="left" className="p-button-text"/>
      </div>
      <Button label="Reply" className="p-button-rounded p-button-secondary" />
    </div>
  )

  return ( 
    <Card title={heading} footer={buttons} className={buildClassName(className, "comment")}>
    </Card>
  );
};

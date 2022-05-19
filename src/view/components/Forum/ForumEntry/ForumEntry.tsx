import { Card } from "primereact/card";
import { Tag } from 'primereact/tag';
import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { timeSince } from "../timeSince";
import { buildClassName } from "../../../common/buildClassName";

export type ForumEntryProps = {
  id: string;
  time: number;
  tag: string;
  title: string;
  commentCount: number;
  className?: string
};

export const ForumEntry = ({ id, time, tag, title, commentCount, className}: ForumEntryProps) => {
  const heading = (
    <div>
      <div className="flex align-items-center justify-content-between flex-wrap">
        <div className="time text-500 text-base font-light">
          {timeSince(time)}
        </div>
        <Tag value={tag}/>
      </div>
      <Divider />
      {title}
    </div>
    
  );

  const buttons = (
    <div className="flex justify-content-start flex-wrap card-container">
      <Button label={commentCount.toString()} icon="pi pi-comment" iconPos="left" className="p-button-text"/>
      <Button label="Translate" icon="pi pi-comments" iconPos="left" className="p-button-text"/>
    </div>
  )

  return ( 
    <Card title={heading} footer={buttons} className={buildClassName(className, "form-entry-card")}>
    </Card>
  );
};

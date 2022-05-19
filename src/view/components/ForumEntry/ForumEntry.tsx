import { Card } from "primereact/card";
import { Tag } from 'primereact/tag';
import { Button } from "primereact/button";
import { Divider } from 'primereact/divider';

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

export type FormEntryProps = {
  id: string;
  time: number;
  tag: string;
  title: string;
  commentCount: number;
  className?: string
};

export const FormEntry = ({ id, time, tag, title, commentCount, className}: FormEntryProps) => {
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
    <Card title={heading} footer={buttons} className={className}>
    </Card>
  );
};


const timeSince = (date: number) => {

  var seconds = Math.floor((Date.now() - date) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + " years ago";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + " months ago";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + " days ago";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + " hours ago";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}

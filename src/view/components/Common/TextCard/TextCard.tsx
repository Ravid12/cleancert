import { Card } from "primereact/card";

export type TextCardProps = {
  title: string;
  text: string;
  className?: string
};

export const TextCard = ({ title, text, className }: TextCardProps) => {
  <Card title={title}>
    {text}
  </Card>
}
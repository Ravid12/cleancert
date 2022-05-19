import { Card } from "primereact/card";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";
import { InputText } from 'primereact/inputtext';

import "./Header.css";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buildClassName } from "../../../common/buildClassName";

export type HeaderProps = {
  currentPage: string;
  className?: string
};

export const Header = ({ currentPage, className }: HeaderProps) => {
  const navigate = useNavigate();

  const [selectedpage, setSelectedPage] = useState("forum");
  const [searchValue, setSearchValue] = useState('');


  const onPageChange = (e: any) => {
    setSelectedPage(e.value)
    navigate('../' + e.value);
  };

  const pages = [
    { label: "Community Forum", value: "forum" },
    { label: "Community Marketplace", value: "market" },
  ];

  const heading = (
    <div>
      <div className="flex align-items-center justify-content-between flex-wrap">
        <div className="logo text-500 text-base font-light">
          <i className="pi pi-user" style={{ fontSize: "2em" }}></i>
        </div>
        <div className="user-profile text-500 text-base font-light">
          <i className="pi pi-user" style={{ fontSize: "2em" }}></i>
        </div>
      </div>
      <Divider />
      <div className="dropdown text-900 text-lg font-bold mb-3">
        <Dropdown value={selectedpage} options={pages} onChange={(e) => onPageChange(e)} />
      </div>
      <span className="p-input-icon-left flex align-items-center justify-content-center text-xl">
        <i className="pi pi-search ml-2" />
        <InputText
          value={searchValue}
          onChange={(e: any) => setSearchValue(e.target.value)}
          placeholder="Search or ask the community"
          className="flex-grow-1 flex align-items-center justify-content-center text-xl h-4rem pl-6"
        />
      </span>
    </div>
  );

  return <Card title={heading} className={buildClassName(className, "header")}></Card>;
};

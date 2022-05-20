import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "./Home.css";

import { Divider } from "primereact/divider";

export const HomePage = () => {
  const navigate = useNavigate();

  const en = {
    section: {
      head: {
        title: "Building healthier farming communities",
        button: "Join the community"
      },
      money: {
        title: "28%",
        body: "More money per year",
      },
      production: {
        title: "70%", 
        body: "Increase in coconut production due to sustainable farming practices"
      },
      case_study: {
        title: "Case studies",
        body: "How selling unused coconut husks for fertiliser led to  improved quality of life"
      },
      join: {
        title: "Grow your skills for the environment and your pockets",
        button: "Join the community"
      },
      resources: {
        title: "Resources",
        body: "Join the community for FREE access to all available resources to get you to a sustainable farm.",
        link_1: "How to turn husk into fertiliser",
        link_2: "This is a link button",
        link_3: "This is a link button"
      }
    }
  }

  const joinClicked = () => {
    navigate("/register");
  };

  const header = 
  <div className="header-container">
    <img className="header-image" alt="background" src={require('./res/header.png')}/>
    <div className="centered pl-4">
      <div className="mb-4 text-5xl font-bold text">
        {en.section.head.title}
      </div>
      <Button label={en.section.head.button} className="p-button-raised p-button-rounded yellow text-lg font-medium" onClick={joinClicked} />
    </div>
  </div>

  const stats = 
    <div className="stats-container ml-4 pt-5">
      <div className="statistic">
        <div className="statistic-percent mb-2 text-5xl font-bold text">
          {en.section.money.title}
        </div>
        <div className="statistic-text">
          {en.section.money.body}
        </div>
      </div>
      <Divider className="p-divider-center percent-divider"/>
      <div className="statistic">
        <div className="statistic-percent mb-2 text-5xl font-bold text">
          {en.section.production.title}
        </div>
        <div className="statistic-text pb-5">
          {en.section.production.body}
        </div>
      </div>
    </div>

  return (
    <div className="home">
      <div className="header-card">
        {header}
      </div>

      <div className="stats-card">
        {stats}
      </div>

      <div className="case-studies-card p-4">
        <div className="case-studies-heading text-3xl mb-4 font-semibold">
          {en.section.case_study.title}
        </div>
        <div className="case-studies-image">
          <img className="header-image" alt="background" src={require('./res/case-study.png')}/>
          <div className="case-studies-text text-lg font-bold">
            {en.section.case_study.body}
          </div>
        </div>
        <div className="case-studies-buttons">
          <Button icon="pi pi-arrow-left" className="p-button-rounded p-button-outlined mr-3" />
          <Button icon="pi pi-arrow-right" className="p-button-rounded p-button-outlined"  />
        </div>
      </div>

      <div className="join-card p-4">
          <div className="join-heading text-3xl mb-5 font-semibold mt-3">
            {en.section.join.title}
          </div>
          <Button label={en.section.join.button} className="p-button-raised p-button-rounded green text-lg font-medium join mb-5" onClick={joinClicked} />
      </div>

      <div className="resources-card p-4">
        <div className="resource-heading text-3xl mb-3 font-semibold mt-3">
          {en.section.resources.title}
        </div>
        <div className="resources-text font-light text-lg mb-4">
          {en.section.resources.body}
        </div>
        <div className="resources-links font-light text-lg">
          {en.section.resources.link_1}
          <br/>{en.section.resources.link_2}
          <br/>{en.section.resources.link_3}
        </div>
      </div>
    </div>
  );
};

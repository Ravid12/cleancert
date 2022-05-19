import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import { ForumTopic } from "../../components/Forum/ForumTopic/ForumTopic";

export const HomePage = () => {
  const navigate = useNavigate();

  const signInClicked = () => {
    navigate("/signIn");
  };

  return (
    <>
      <div className="flex justify-content-between flex-wrap m-6">
        <div>
          <Button icon="pi pi-bars" className="p-button-text" />
        </div>
        <Button
          type="button"
          label="Sign in"
          className="p-mt-2"
          onClick={signInClicked}
        />
      </div>
      <div className="text-900 text-4xl font-bold m-6 mt-6">
        Green farming Certification believes in helping those who strive for a
        more sustainable future.
      </div>

      <ForumTopic 
        profileName="Husk-Hunter Zara"
        content="Hey so I had this huge revelation the other day about how to recycle my cocnut husks! Lorem ipsum dolor sit amet, dolore magna aliqua lorem ipsum dolor sit amet, dolore magna aliqua lorem ipsum dolor sit amet, dolore magna aliqua lorem ipsum dolor sit amet, dolore magna aliqua lorem ipsum dolor sit amet"
        time={new Date().setMinutes(0)}
        tag="Reusing Waste"
        title="Recycling your husk"
        commentCount={16}
      />
    </>
  );
};

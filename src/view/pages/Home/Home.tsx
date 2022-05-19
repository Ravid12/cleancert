import { Button } from "primereact/button";
import React from "react";
import { useNavigate } from "react-router-dom";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

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
    </>
  );
};

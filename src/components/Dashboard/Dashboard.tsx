import React from "react";

import { Login } from "components";

import "./Dashboard.css";

export const Dashboard: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Login />
      </header>
    </div>
  );
};

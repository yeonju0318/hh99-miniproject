import React from "react";
import Sidenav from "./Sidenav";
import Search from "./Search";
import Select from "./Select";

const Side = () => {
  return (
    <div className="sidebar">
      <Sidenav />
      <Search />
      <Select />
    </div>
  );
};

export default Side;

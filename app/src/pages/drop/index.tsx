import React, { useState } from "react";
import PageHOC from "@/pages/template";
import DropContainer from "@/containers/Drop";

const DropPage = () => {
  return <DropContainer />;
};
export default PageHOC({ Component: DropPage, title: "Drop a Pin" });

import React, { useState } from "react";
import PageHOC from "@/pages/template";
import BrowseContainer from "@/containers/Browse";

const BrowsePage = () => {
  return <BrowseContainer />;
};
export default PageHOC({ Component: BrowsePage, title: "What's Nearby" });

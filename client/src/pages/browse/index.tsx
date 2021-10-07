import React, { useState } from "react";
import PageHOC from "@/pages/template";
import { useRouter } from "next/router";
import BrowseContainer from "@/containers/Browse";

const BrowsePage = () => {
  return <BrowseContainer />;
};
export default PageHOC({ Component: BrowsePage, title: "Browse Around" });

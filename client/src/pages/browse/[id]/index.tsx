import React, { useState } from "react";

import PageHOC from "@/pages/template";
import BrowseContainer from "@/containers/Browse";
import { useRouter } from "next/router";

const BrowsePage = () => {
  const router = useRouter();

  const pinId = router.query.id;

  console.log(pinId);

  return <BrowseContainer selectedPinId={pinId} />;
};
export default PageHOC({ Component: BrowsePage, title: "Browse Around" });

import React, { useState } from "react";

import PageHOC from "@/pages/template";
import { useRouter } from "next/router";
import DetailsContainer from "@/containers/Details";

const DetailsPage = () => {
  const router = useRouter();

  const pinId = router.query.id;

  if (pinId) {
    return <DetailsContainer selectedPinId={pinId} />;
  }
  return null;
};
export default PageHOC({ Component: DetailsPage, title: "Pin Details" });

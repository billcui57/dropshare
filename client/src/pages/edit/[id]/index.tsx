import React, { useState } from "react";
import PageHOC from "@/pages/template";
import EditContainer from "@/containers/Edit";
import { useRouter } from "next/router";

const EditPage = () => {
  const router = useRouter();

  const pinId: string = router.query.id;

  return <EditContainer selectedPinId={pinId} />;
};
export default PageHOC({ Component: EditPage, title: "Edit your pin" });

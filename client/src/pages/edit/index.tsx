import React, { useState } from "react";
import PageHOC from "@/pages/template";
import EditContainer from "@/containers/Edit";

const EditPage = () => {
  return <EditContainer />;
};
export default PageHOC({ Component: EditPage, title: "Edit your pin" });

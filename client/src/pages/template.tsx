/* eslint-disable react/display-name */
import React, { FunctionComponent } from "react";
import Navigation from "@/components/Navigation";

type PageHOCProps = {
  Component: FunctionComponent;
  title: string;
};

const PageHOC =
  ({ Component, title }: PageHOCProps) =>
  () => {
    return (
      <div className={"h-screen overflow-hidden"}>
        <Navigation title={title} className="m-4" />
        <Component />
        <footer className="ml-4">
          <small>&copy; Copyright 2021, Bill Cui</small>
        </footer>
      </div>
    );
  };

export default PageHOC;

/* eslint-disable react/display-name */
import React, { FunctionComponent } from "react";
import Navigation from "@/containers/Navigation";

type PageHOCProps = {
    Component: FunctionComponent;
    title?: String;
};

const PageHOC =
    ({ Component, title }: PageHOCProps) =>
    () => {
        return (
            <div className={"flex flex-col h-screen"}>
                <Navigation title={title}></Navigation>
                <Component></Component>
                <h1>hi</h1>
            </div>
        );
    };

export default PageHOC;
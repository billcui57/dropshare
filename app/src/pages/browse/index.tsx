import React, { useState } from "react";
import PageHOC from "@/pages/template";
import Maps from "@/components/Maps";

const BrowsePage = () => {
    return (
        <div className={"flex justify-between h-full"}>
            <h1>hi</h1>
            <div className={"w-1/2"}>
                <Maps />
            </div>
        </div>
    );
};
export default PageHOC({ Component: BrowsePage, title: "What's Nearby" });

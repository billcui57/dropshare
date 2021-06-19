import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "@/components/Button";
import Navigation from "@/containers/Navigation";
import PageHOC from "@/pages/template";

const HomePage = () => {
    return <h1>hi</h1>;
};

export default PageHOC({
    Component: HomePage,
});

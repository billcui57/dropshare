import Button from "@/components/Button";
import React from "react";
import Link from "next/link";
import router, { useRouter } from "next/router";

type NavigationProps = {
    title?: String;
};

const Navigation = ({ title }: NavigationProps) => {
    const handleLoginClick = () => {
        router.push("/browse");
    };

    return (
        <div className="flex justify-between m-4">
            <Link href="/">
                <a className="">dropshare.io</a>
            </Link>
            <h1>{title}</h1>
            <div className="flex space-x-4">
                <Button type="secondary">Sign Up</Button>
                <Button type="primary" onClick={handleLoginClick}>
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Navigation;

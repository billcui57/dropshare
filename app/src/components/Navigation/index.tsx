import Button from "@/components/Button";
import React from "react";
import Link from "next/link";
import StyledText from "@/components/StyledText";
import router, { useRouter } from "next/router";

type NavigationProps = {
    title?: String;
};

const Navigation = ({ title }: NavigationProps) => {
    const handleLoginClick = () => {
        router.push("/browse");
    };

    return (
        <div className="flex justify-between m-4 items-center">
            <Link href="/">
                <a className="text-blue-500 font-bold">dropshare.io</a>
            </Link>
            <StyledText text={title} />
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

import Button from "@/components/Button";
import ButtonContainer from "@/components/ButtonContainer";
import StyledText from "@/components/StyledText";
import Typography from "@/components/Typography";
import React from "react";
import { useRouter } from "next/router";
import HomePagePerson from "@/svg/HomePagePerson.svg";

const HomeContainer = () => {
  const router = useRouter();
  const handleGetStarted = () => {
    router.push("/browse");
  };

  return (
    <div className="h-4/6 flex justify-center items-center space-x-8">
      <div>
        <StyledText text="Less wasting," size="display" delimiter=" " />
        <StyledText
          text="more caring"
          size="display"
          className="mb-4"
          delimiter=" "
        />
        <Typography
          text="A decentralized charity platform"
          className="mb-8"
          colour="text"
        />
        <ButtonContainer>
          <Button type="primary" onClick={handleGetStarted}>
            Get Started
          </Button>
          <Button type="secondary">Learn More</Button>
        </ButtonContainer>
      </div>
      <div>
        <HomePagePerson />
      </div>
    </div>
  );
};

export default HomeContainer;

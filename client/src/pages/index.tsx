import PageHOC from "@/pages/template";
import HomeContainer from "@/containers/Home";

const HomePage = () => {
  return <HomeContainer />;
};

export default PageHOC({
  Component: HomePage,
});

import Page from "@/component/Page";
import Nothing from "@/component/Nothing";
import LeftNavbar from "@/component/LeftNavbar";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <LeftNavbar />
      <Nothing />
    </div>
  );
};
export default Home;

import Footer from "./ui/Footer";
import NewsCard from "./ui/news/NewsCard";
import Main from "./ui/Main";
import LogoBelt from "./ui/LogoBelt";
import Feature from "./ui/feature/Feature";
import Structure from "./ui/Structure";
import Infrastructure from "./ui/infrastructure/Infrastructure";
import Monitor from "./ui/Monitor";
import Story from "./ui/story/Story";
import Ways from "./ui/ways/Ways";

const page = () => {
  return (
    <>
      <div className="">
        <Main />
      </div>
      <div className="mt-10">
        <LogoBelt />
      </div>
      <div className="mt-10">
        <Feature />
      </div>

      <div className="flex justify-center items-center">
        <Structure />
      </div>
      <div className="flex justify-center items-center mb-32">
        <Infrastructure />
      </div>
      <div className="flex justify-center items-center">
        <Monitor />
      </div>
      <div className="flex justify-center items-center flex-col">
        <Ways />
      </div>
      <div className="">
        <Story />
      </div>

      <div className="justify-center items-center h-[1200px] w-full flex">
        <NewsCard />
      </div>
      <div className="bg-lightsteelblue">
        <Footer />
      </div>
    </>
  );
};

export default page;

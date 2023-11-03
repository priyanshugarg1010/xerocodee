import StoryCard from "./StoryCard";

const Story = () => {
  return (
    <div className="w-full h-96 flex justify-center items-center mt-40">
      <div className="flex  flex-col  justify-center items-center max-md:max-w-full max-md:mt-10 w-[1100px]">
        <div className="text-[rgb(51,44,92)] text-center text-5xl font-semibold  capitalize flex justify-center items-center self-center max-w-full  max-md:max-w-full">
          See our success stories
        </div>
        <div className="">
          <StoryCard />
        </div>
      </div>
    </div>
  );
};

export default Story;

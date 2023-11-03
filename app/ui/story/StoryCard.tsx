import StoryCardInfo from "./StoryCardInfo";

const StoryCard = () => {
  return (
    <div>
      <div className="self-stretch mt-24 max-md:max-w-full max-md:mt-10 w-[1200px] h-60">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 h-full">
          <div className="flex  items-center w-[10%] max-md:w-full max-md:ml-0 ">
            <button className="w-12 h-12 rounded-full text-white font-semibold  bg-cardBlue text-2xl">
              {"<"}
            </button>
          </div>

          <div className="flex  items-center w-[80%] justify-center shadow-sd">
            <StoryCardInfo />
          </div>

          <div className="flex  items-center w-[10%] max-md:w-full max-md:ml-0 justify-end">
            <button className="w-12 h-12 rounded-full text-white font-semibold  bg-cardBlue text-2xl">
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;

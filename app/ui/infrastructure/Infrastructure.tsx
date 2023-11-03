import InfrastructureCard from "./InfrastructureCard";

const Infrastructure = () => {
  return (
    <div className="bg-white bg-opacity-50 flex flex-col px-5">
      <div className="self-center flex w-full max-w-[1120px] flex-col mt-20 mb-10 max-md:max-w-full max-md:my-10">
        <div className="justify-center text-blue-700 text-center text-5xl font-semibold leading-[55px] self-center max-md:max-w-full">
          <span className="text-zinc-800">
            Self serve infrastructure platform for{" "}
          </span>
          <span className="text-blue-700">scaling teams</span>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-16 w-full ">
          <InfrastructureCard />
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;

import Image from "next/image";
import { Button } from "./button";

const Main = () => {
  return (
    <>
      <div className="bg-white bg-opacity-50 flex flex-col px-5">
        <div className="justify-center text-zinc-800 text-center text-5xl font-bold leading-tight self-center max-w-[900px] mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          Build your audience and grow your brand
        </div>
        <div className="self-center text-neutral-500 text-center text-xl leading-10 w-[970px] max-w-full mt-8 max-md:max-w-full">
          no more, no less. Deploy from our single pane of glass, manage them
          with ease and scale up as fast as your workload grows.
        </div>
        <div className="flex items-center justify-center m-5 mt-12">
          <Button className="h-12 w-64 text-xl flex justify-center items-center text-center">
            Get Started Now
          </Button>
        </div>
      </div>
      <div className="justify-center flex">
        <Image alt="" src="/Group.svg" width={1200} height={600} />
      </div>
    </>
  );
};

export default Main;

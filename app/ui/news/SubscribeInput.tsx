import { Button } from "../button";

const SubscribeInput = () => {
  return (
    <div className="flex justify-center items-center h-44">
      <div className="self-center flex w-[691px] max-w-full  gap-4 justify-center items-center text-center max-md:flex-wrap max-md:mt-10">
        <div className="bg-white flex pb-0 flex-col grow shrink-0 basis-auto rounded-xl self-start max-md:max-w-full">
          <div className="justify-end items-start bg-white z-[1] flex w-[491px] max-w-full flex-col px-5 py-5 rounded-xl self-start">
            <input
              className="text-slate-600 text-xl leading-9 opacity-60 max-md:ml-1.5"
              placeholder="  Type your email"
            />
          </div>
        </div>
        <Button className="h-[72px] w-44 flex justify-center text-lg rounded-xl">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SubscribeInput;

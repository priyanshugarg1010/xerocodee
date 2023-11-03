import Image from "next/image";
import React from "react";

const StoryCardInfo = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-full drop-shadow-md border-1 border-black overflow-hidden rounded-tl-[40px] rounded-tr-xl rounded-br-xl rounded-bl-[40px]">
      <div className="w-[18%] bg-[#0C5BC6] h-full flex justify-center items-center text-white text-6xl">
        <Image alt="" src="/comma.svg" width={70} height={70} />
      </div>
      <div className="w-[82%] h-full drop-shadow-md shadow-md flex flex-row justify-center items-center ">
        <div className="w-[80%] inline-block ">
          <div className="h-full w-[600px] flex p-5">
            {/* Use word-wrap to prevent overflow */}
            <div className="whitespace-normal bre flex flex-col text-zinc-700 ">
              <div className="">
                <p className="m-0">
                  There are many variations of passages of Lorem Ipsum available
                </p>
                <p className="m-0">
                  but the majority have sufferg alteration in some form, by
                  injected humour, or randomised words which don{"'"}t look even
                  slightly believable. If you are going to use a passage.
                </p>
              </div>

              <div className=" flex justify-end ">
                <div className="">
                  <p className="m-0">
                    <span className="text-[1.13rem] font-nunito flex justify-end">
                      -
                    </span>
                    <span className="font-semibold">Abcdefgh Ijklmnop</span>
                  </p>
                  <p className="m-0 text-[1.13rem]">Frontend Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ring-8 ring-[#0C5BC6] border-none w-32 h-32 rounded-full drop-shadow-none"></div>
      </div>
    </div>
  );
};

export default StoryCardInfo;

import Image from "next/image";
import WaysLink from "./WaysLinks";

const Ways1 = () => {
  return (
    <>
      <div className="w-[1100px] gap-20 flex flex-col m-6  ">
        <div className="flex flex-row justify-start items-center gap-2 ">
          <WaysLink />
        </div>
        <div className="self-stretch w-full px-5 max-md:max-w-full  ">
          <div className="gap-5 flex ">
            <div className="flex flex-col items-center w-[50%] max-md:w-full max-md:ml-0">
              <Image src="/cloud.svg" alt="" width={400} height={400} />
            </div>

            <div className="flex flex-col justify-center items-center w-[50%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-xl font-semibold leading-8 capitalize self-stretch max-w-[477px] max-md:max-w-full">
                  In Your Cloud
                </div>
                <div className="text-slate-600 text-base leading-7 self-stretch mt-3.5 max-md:max-w-full">
                  Your infrastructure runs on your AWS or GCP account. Never get
                  locked in. Infinitely scalable.Azure support coming soon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ways1;

import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Ways1 from "./Ways1";
import Ways2 from "./Ways2";
import Ways3 from "./Ways3";
import Image from "next/image";

const Heading = () => {
  return (
    <div className=" text-zinc-800 text-center text-5xl font-semibold leading-[55px] flex flex-row justify-center items-center shrink-0 basis-auto self-start w-full mt-44 gap-10">
      The Xerocodee way
      <Image src="/Rocket.svg" alt="" width={50} height={50} />
    </div>
  );
};

const Ways = () => {
  return (
    <>
      <Heading />
      <Heading1 />
      <Ways1 />
      <Heading2 />
      <Ways2 />
      <Heading3 />
      <Ways3 />
    </>
  );
};

export default Ways;

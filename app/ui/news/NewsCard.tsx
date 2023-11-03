import Image from "next/image";
import SubscribeInput from "./SubscribeInput";

const NewsCard = () => {
  return (
    <div className="backdrop-blur-[20px] bg-blue-200 flex flex-col pr-5 rounded-[60px] w-[1200px] h-[600px] ">
      <div className="self-center flex w-full max-w-[1299px] flex-col mb-24 max-md:max-w-full max-md:mb-10">
        <div className="flex-col overflow-hidden self-center relative flex min-h-[250px] w-full pt-16 pb-10 px-5 max-md:max-w-full justify-center items-center">
          <Image
            height={150}
            width={150}
            src="/PaperPlane.png"
            alt="paper plane image"
          />
        </div>
        <div className="items-center self-center z-[1] flex mt-0 w-[934px] max-w-full flex-col ">
          <div className="text-zinc-800 text-center text-4xl font-semibold  capitalize max-md:max-w-full flex flex-col ">
            <span>Subscribe to Our Newsletter & get the</span>
            <span>Coupon code.</span>
          </div>
          <div className="text-zinc-800 text-xl leading-9 opacity-80 max-w-auto self-center mt-5">
            All your information is completely confidential
          </div>
        </div>

        <SubscribeInput />
      </div>
    </div>
  );
};

export default NewsCard;

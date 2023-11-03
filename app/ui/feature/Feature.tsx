import FeatureImage from "./FeatureImage";
import FeatureButton from "./FeatureButton";
import FeatureLinks from "./FeatureLinks";

const Feature = () => {
  return (
    <>
      <div className="flex flex-col px-5 justify-center items-center">
        <FeatureButton />

        <div className="justify-center text-zinc-800 text-5xl font-semibold leading-[55px] self-center max-w-[892px] -ml-2.5 mt-16 max-md:max-w-full max-md:mt-10">
          <span className="text-blue-700">Save 1000s</span>
          <span className="text-zinc-800"> of expensive coder hours</span>
        </div>
        <div className="text-slate-600 text-center text-md leading-9 self-center ml-0 w-[1114px] max-w-[1041px] mt-2.5 max-md:max-w-full">
          With cloud native technologies, we assist in modernising
          infrastructure and applications for resilience and scalability.
        </div>
        <div className="flex flex-row gap-10 justify-center items-center h-12 w-[1120px] mt-14 mb-12">
          <FeatureLinks />
        </div>
      </div>
      <div>
        <FeatureImage />
      </div>
    </>
  );
};

export default Feature;

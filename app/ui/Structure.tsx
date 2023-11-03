import Image from "next/image";

const Structure = () => {
  return (
    <div className="flex flex-row justify- w-[1200px] h-[600px] items-center ">
      <div className=" w-full h-full flex justify-center items-center flex-col">
        <span className="text-[rgb(36,35,49)] text-2xl font-bold p-12 mb-10">
          Without Xerocodee
        </span>
        <Image width={350} height={350} alt="" src="/pipe1.svg"></Image>
      </div>

      <div className=" w-full h-full flex justify-center items-center flex-col">
        <span className="text-[rgb(36,35,49)] text-2xl font-bold p-12 mb-10">
          With Xerocodee
        </span>
        <Image width={400} height={400} alt="" src="/pipe2.svg"></Image>
      </div>
    </div>
  );
};

export default Structure;

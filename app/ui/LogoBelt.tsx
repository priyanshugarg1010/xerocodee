import Image from "next/image";

const LogoBelt = () => {
  return (
    <div className="flex justify-center items-center w-full h-52 ">
      <div className="relative w-3/5 h-52 flex flex-row gap-20">
        <div className="flex flex-col gap-10 justify-center items-center p-5">
          <Image alt="logo image" src="/image7.png" width={180} height={180} />
          <Image alt="logo image" src="/image7.png" width={180} height={180} />
        </div>
        <div className="flex flex-col gap-10 justify-center items-center p-5">
          <Image alt="logo image" src="/image8.png" width={150} height={150} />
          <Image alt="logo image" src="/image8.png" width={150} height={150} />
        </div>
        <div className="flex flex-col gap-10 justify-center items-center p-5">
          <Image alt="logo image" src="/image9.png" width={100} height={100} />
          <Image alt="logo image" src="/image9.png" width={100} height={100} />
        </div>
        <div className="flex flex-col gap-10 justify-center items-center p-5">
          <Image alt="logo image" src="/image10.png" width={80} height={80} />
          <Image alt="logo image" src="/image10.png" width={80} height={80} />
        </div>
      </div>
    </div>
  );
};

export default LogoBelt;

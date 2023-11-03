import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="relative rounded-[10px] bg-white shadow-[10px_10px_15px_rgba(0,_0,_0,_0.1)] box-border w-[80%] h-[5.06rem] overflow-hidden flex flex-row items-center justify-between pt-[1.31rem] px-[7.33rem] pb-[1.25rem] gap-[2.06rem] text-left text-[1.13rem] text-gray font-nunito-sans border-[1px] border-solid border-gainsboro">
      <div className=" h-[2.5rem] overflow-hidden shrink-0 flex flex-row items-center justify-start focus:outline-none ">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Picture of the author"
            width={140}
            height={80}
            className="focus:outline-none "
          />
        </Link>
      </div>
      <div className="font-sans flex flex-row justify-between">
        <NavLinks />
      </div>
      <div className="font-sans text-simpleblue border-2 border-simpleblue rounded-md px-6 py-0.5">
        Sign In
      </div>
    </div>
  );
};

export default Navbar;

import Image from "next/image";

const lists = [
  {
    image: "/infrastructure.svg",
    title: "Infrastructure",
    desc: "Automated Cloud Infrastructure Workflow",
  },
  {
    image: "/cyber-security.svg",
    title: "Security",
    desc: "Modern Secure Infrastructure Approach",
  },
  {
    image: "/neural-network.svg",
    title: "Networking",
    desc: "Flexible Secure Application Connectivity",
  },
  {
    image: "/development.svg",
    title: "Applications",
    desc: "Automate Application Deployment for Agility",
  },
];

const InfrastructureCard = () => {
  return (
    <>
      {lists.map((list) => {
        return (
          <div key={list.title}>
            <div className="flex flex-col items-center w-[90%] ml-5 max-md:w-full max-md:ml-0">
              <div className="shadow-xl bg-white grow w-full mx-auto p-4 rounded-2xl max-md:max-w-full max-md:mt-10 ">
                <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-1/5 max-md:w-full max-md:ml-0">
                    <div className="shadow-md bg-white flex w-[72px] max-w-full flex-col mx-auto p-4  rounded-2xl max-md:mt-9">
                      <Image src={list.image} alt="" width={40} height={40} />
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch w-4/5 ml-5 max-md:w-full max-md:ml-0">
                    <div className="flex flex-col my-auto max-md:mt-10">
                      <div className="text-slate-700 text-2xl font-semibold leading-10 capitalize">
                        {list.title}
                      </div>
                      <div className="text-slate-600 text-base leading-7 self-stretch">
                        {list.desc}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default InfrastructureCard;

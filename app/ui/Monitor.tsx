import Image from "next/image";

const Monitor = () => {
  return (
    <div>
      <div className="bg-blue-700 flex flex-col px-5 rounded-[35px]">
        <div className="self-center flex w-full max-w-[1250px] flex-col mt-28 mb-20 max-md:max-w-full items-center justify-center max-md:my-10">
          <div className="justify-center text-white text-center text-5xl font-semibold leading-[60px] capitalize self-stretch max-w-[1250px] max-md:max-w-full">
            Modernize apps, infrastructure with cloud native tech for
            resilience, scalability.
          </div>
          <div className="self-stretch mt-44 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex  flex-col  justify-center items-center w-[60%] max-md:w-full max-md:ml-0">
                <Image
                  src="/CardsScreen2.svg"
                  alt=""
                  width={900}
                  height={900}
                />
              </div>
              <div className="flex flex-col items-start w-[40%] max-md:w-[300px] max-w-[350px] max-md:ml-0">
                <div className="justify-start items-start flex grow flex-col max-md:mt-10">
                  <div className="text-white text-5xl font-semibold leading-[61.6px] capitalize self-stretch max-w-[375px]">
                    Real-time risk monitoring
                  </div>
                  <div className="text-white text-xl leading-9 self-stretch mt-16 max-md:mt-10">
                    Real-time risk monitoring across your infrastructure and
                    application ecosystem will help you maintain ongoing
                    compliance with more than 05+ different regulatory
                    standards.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch mt-28 pr-px max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-center justify-center ml-6 max-md:gap-0">
              <div className="flex flex-col items-start max-w-[450px] w-[46%] max-md:w-full max-md:ml-0">
                <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                  <div className="text-white text-5xl font-semibold leading-[61.6px] capitalize self-stretch max-w-[437px] max-md:max-w-full">
                    Collaborative workflows
                  </div>
                  <div className="text-white text-xl leading-9 self-stretch max-md:max-w-full">
                    Share artefacts easily and collaborate with team members,
                    auditors, and pen testers via automated procedures. To
                    manage daily compliance with automatic notifications and
                    reminders, create, assign, and track tasks.
                  </div>
                </div>
              </div>
              <div className="flex flex-col  w-[54%]  justify-center items-center max-md:w-full max-md:ml-0">
                <Image
                  src="/CardsScreen1.svg"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitor;

import Image from "next/image";

const ways3 = [
  {
    image: "/stats.svg",
    title: "Customizable cost dashboards and reports",
    desc: "Stay on top of your cloud spending with custom cost dashboards and reports — sort, filter, and group by your various accounts, resources, and cloud regions.",
  },

  {
    image: "/money.svg",
    title: "Preview infra costs",
    desc: "See the cost of a specific resource while choosing it (before provisioning). It saves you the hassle of searching through the complex pricing pages of your cloud provider or tools.",
  },

  {
    image: "/graph.svg",
    title: "Observability from day one",
    desc: "Comes with built-in Kubernetes pod metrics. Easily plug in monitoring and observability tools of your choice, such as Grafana/Loki, DataDog, Prometheus, and more. Stay on top of your application metrics from day 1.",
  },
];

const Ways3 = () => {
  return (
    <>
      <div className="w-[1100px] gap-20 flex flex-col">
        <div className="self-stretch w-full px-5 max-md:max-w-full  ">
          <div className="gap-5 flex ">
            <div className="flex flex-col items-center w-[50%] max-md:w-full max-md:ml-0">
              <Image src={ways3[0].image} alt="" width={150} height={150} />
            </div>

            <div className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-xl font-semibold leading-8 capitalize self-stretch max-w-[477px] max-md:max-w-full">
                  {ways3[0].title}
                </div>
                <div className="text-slate-600 text-base leading-7 self-stretch mt-3.5 max-md:max-w-full">
                  {ways3[0].desc}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-full px-5 max-md:max-w-full  ">
          <div className="gap-5 flex ">
            <div className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-xl font-semibold leading-8 capitalize self-stretch max-w-[477px] max-md:max-w-full">
                  {ways3[1].title}
                </div>
                <div className="text-slate-600 text-base leading-7 self-stretch mt-3.5 max-md:max-w-full">
                  {ways3[1].desc}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-[50%] max-md:w-full max-md:ml-0">
              <Image src={ways3[1].image} alt="" width={300} height={300} />
            </div>
          </div>
        </div>
        <div className="self-stretch w-full px-5 max-md:max-w-full  ">
          <div className="gap-5 flex ">
            <div className="flex flex-col items-center w-[50%] max-md:w-full max-md:ml-0">
              <Image src={ways3[2].image} alt="" width={500} height={500} />
            </div>

            <div className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-xl font-semibold leading-8 capitalize self-stretch max-w-[477px] max-md:max-w-full">
                  {ways3[2].title}
                </div>
                <div className="text-slate-600 text-base leading-7 self-stretch mt-3.5 max-md:max-w-full">
                  {ways3[2].desc}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ways3;

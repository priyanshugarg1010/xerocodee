import Image from "next/image";

const ways2 = [
  {
    image: "/way3.svg",
    title: "Configurable Build and Deploy pipelines",
    desc: "Portable builds powered by Dagger and continuous deployments powered by ArgoCD - you gain more control of your pipelines with composable custom, build, and deploy stages.",
  },

  {
    image: "/way2.svg",
    title: "Push to Deploy",
    desc: "Just connect your repo with one click and push. Argonaut’s deep integration with GitHub Actions and GitLab pipelines build and deploy your code on every push.",
  },

  {
    image: "/way1.svg",
    title: "Multiple runtimes",
    desc: "Quickly deploy apps to containerized or serverless runtimes on your cloud and customize architectures to cost and performance constraints. Deploy on Kubernetes using dockerfiles or buildpacks, AWS Lambda, or GCP Cloud Functions.",
  },

  {
    image: "/way4.svg",
    title: "Scale infinitely",
    desc: "Every deployment is a zero-downtime deployment without you needing to choose custom configurations. You can easily configure auto-scaling, resource limits, and health-check URL to further optimize application uptime.",
  },
];

const Ways2 = () => {
  return (
    <>
      <div className="w-[1100px] gap-20 flex flex-col">
        <div className="self-stretch w-full px-5 max-md:max-w-full  ">
          <div className="gap-5 flex ">
            <div className="flex flex-col items-stretch w-[50%] max-md:w-full max-md:ml-0">
              <Image src={ways2[0].image} alt="" width={500} height={500} />
            </div>

            <div className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-xl font-semibold leading-8 capitalize self-stretch max-w-[477px] max-md:max-w-full">
                  {ways2[0].title}
                </div>
                <div className="text-slate-600 text-base leading-7 self-stretch mt-3.5 max-md:max-w-full">
                  {ways2[0].desc}
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
                  {ways2[1].title}
                </div>
                <div className="text-slate-600 text-base leading-7 self-stretch mt-3.5 max-md:max-w-full">
                  {ways2[1].desc}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[50%] max-md:w-full max-md:ml-0">
              <Image src={ways2[1].image} alt="" width={500} height={500} />
            </div>
          </div>
        </div>
        <div className="self-stretch w-full px-5 max-md:max-w-full  ">
          <div className="gap-5 flex ">
            <div className="flex flex-col items-stretch w-[50%] max-md:w-full max-md:ml-0">
              <Image src={ways2[2].image} alt="" width={500} height={500} />
            </div>

            <div className="flex flex-col items-stretch w-[50%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-slate-700 text-xl font-semibold leading-8 capitalize self-stretch max-w-[477px] max-md:max-w-full">
                  {ways2[2].title}
                </div>
                <div className="text-slate-600 text-base leading-7 self-stretch mt-3.5 max-md:max-w-full">
                  {ways2[2].desc}
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
                  {ways2[3].title}
                </div>
                <div className="text-slate-600 text-base leading-7 self-stretch mt-3.5 max-md:max-w-full">
                  {ways2[3].desc}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[50%] max-md:w-full max-md:ml-0">
              <Image src={ways2[3].image} alt="" width={500} height={500} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ways2;

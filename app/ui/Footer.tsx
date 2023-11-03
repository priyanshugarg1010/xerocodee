import FooterLinks from "./FooterLinks";

const FooterNotes = () => {
  return (
    <>
      <div className=" flex  items-center text-start">
        <div className="">
          <p className="m-0">You get just what you need to run your cloud</p>
          <p className="m-0">{`workloads--no more, no less. `}</p>
          <p className="m-0">{`Deploy from our single pane of glass, `}</p>
          <p className="m-0">{`manage them with ease and scale `}</p>
          <p className="m-0">up as fast as your workload grows</p>
        </div>
      </div>
    </>
  );
};

const Copyright = () => {
  return (
    <>
      <div className="w-full p-10 h-[2rem] flex flex-row items-center justify-between -m-6  text-text-mid-grey">
        <div className="   ">{`Terms & Condition  | Privacy Policy `}</div>
        <div className=" flex flex-row  ">
          <span>{`Copyright © 2023 `}</span>&nbsp;
          <b>{` EXOCODE TECHNOLOGIES | `}</b>&nbsp;
          <span>{` All rights reserved`}</span>
        </div>
      </div>
    </>
  );
};
const Footer = () => {
  return (
    <div className=" flex gap-12 flex-col bg-lightsteelblue items-center ">
      <div className="w-[80%] justify-center items-center p-5 bg-lightsteelblue">
        <div className="flex flex-row  p-5 gap-10 pt-10 bg-lightsteelblue">
          <FooterNotes />
          <FooterLinks />
        </div>
        <div className="py-10 bg-lightsteelblue">
          <Copyright />
        </div>
      </div>
    </div>
  );
};

export default Footer;

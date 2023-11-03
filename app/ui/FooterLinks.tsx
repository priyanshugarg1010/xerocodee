import Link from "next/link";

const OthersLinks = [
  { name: "FAQ", href: "/faq" },
  { name: "Careers", href: "/careers" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Support", href: "/support" },
];

const Services = [
  { name: "Infrastructure", href: "/infrastructure-provisioning" },
  { name: "Network infrastructure automation", href: "/network-automation" },
  { name: "Cost optimization", href: "/cost-optimization" },
  { name: "Cloud migration", href: "/cloud-migration" },
  { name: "Kubernetes at scale", href: "/kubernetes" },
];

const OursLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  { name: "Integrations", href: "/integrations" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
];

const FooterLinks = () => {
  return (
    <div className="flex flex-row w-[80%] gap-5 ">
      <div className=" w-[25%]">
        <div className="text-text-bright-grey font-semibold text-2xl mb-9">
          Our Links
        </div>
        {OursLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex grow items-center justify-start gap-2 rounded-md  p-3 text-md font-lg hover:text-blue  hover:bg-sky-100  md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="w-[40%]">
        <div className="text-text-bright-grey font-semibold text-2xl mb-9">
          Our Services
        </div>

        {Services.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex grow items-center justify-center gap-2 rounded-md  p-3 text-md font-lg hover:text-blue hover:bg-sky-100  md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </div>
      <div className="w-[25%]">
        <div className="text-text-bright-grey font-semibold text-2xl mb-9">
          Other Links
        </div>

        {OthersLinks.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className="flex grow items-center justify-center gap-2 rounded-md  p-3 text-md font-lg hover:text-blue hover:bg-sky-100  md:flex-none md:justify-start md:p-2 md:px-3"
            >
              <p className="hidden md:block">{link.name}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterLinks;

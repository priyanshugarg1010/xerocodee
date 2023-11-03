"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Apps", href: "/Apps" },
  { name: "App Configs", href: "/App-Configs" },
  { name: "Pipelines", href: "/Pipelines" },
  { name: "Infra Creation", href: "/Infra-Creation" },
  { name: "Cost", href: "/Cost" },
  { name: "Add-Ons", href: "/Add-Ons" },
  { name: "Monitoring", href: "/Monitoring" },
  { name: "Connections", href: "/Connections" },
];

const FeatureLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center text-center self-stretch  w-full  h-10 justify-center gap-5  max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 border border-featureLinkBorder rounded-md ",
              {
                "bg-sky-100 text-blue-600": pathname === link.href,
              }
            )}
          >
            <p className="   text-slate-600 text-xs font-bold leading-5 capitalize flex items-center  justify-center text-center self-stretch py-0.5">
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
};

export default FeatureLinks;

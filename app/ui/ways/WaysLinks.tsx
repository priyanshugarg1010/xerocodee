"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Your Cloud", href: "/your-cloud" },
  { name: "Infra components", href: "/infra-components" },
  { name: "Self-hosted Apps", href: "/self-hosted-apps" },
];

const WaysLink = () => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center text-center self-stretch  w-32  h-10 justify-center gap-5  max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10 border border-featureLinkBorder rounded-md ",
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

export default WaysLink;

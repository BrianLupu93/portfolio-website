"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TLink = {
  name: string;
  path: string;
};
const links: TLink[] = [
  { name: "home", path: "/" },
  { name: "services", path: "/services" },
  { name: "about", path: "/about" },
  { name: "projects", path: "/projects" },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className='flex gap-8'>
      {links.map((link, i) => (
        <Link
          href={link.path}
          key={i}
          className={`${
            pathname === link.path ? "text-accent border-b border-accent" : ""
          } font-medium hover:text-accent transition-all`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Nav;

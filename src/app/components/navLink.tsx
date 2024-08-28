import Link from "next/link";

interface NavLinkProps {
  link: {
    href: string;
    title: string;
  };
}

const NavLink = ({ link }: NavLinkProps) => {
  return (
    <Link href={link.href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white">
      {link.title}
    </Link>
  );
};

export default NavLink;

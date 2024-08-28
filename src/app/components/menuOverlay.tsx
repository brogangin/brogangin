import React from "react";
import NavLink from "./navLink";

interface MenuOverlayProps {
  links?: { title: string; href: string }[];
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links?.map((link, index) => (
        <li key={index}>
          <NavLink link={link} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;

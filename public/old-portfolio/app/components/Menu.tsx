"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { href: "/", label: "Home", exact: true },
  { href: "/portfolio", label: "Portfolio" },
];

export default function Menu() {
  const pathname = usePathname();

  const isActive = (href: string, exact?: boolean) => {
    if (!pathname) return false;
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <nav id="swupMenu">
      <ul className="main-menu">
        {menuItems.map((item) => {
          const active = isActive(item.href, item.exact);
          return (
            <li
              key={item.href}
              className={`menu-item${active ? " current-menu-item" : ""}`}
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

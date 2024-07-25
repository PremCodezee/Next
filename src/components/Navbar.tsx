"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Courses</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Technologies">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact">Contact</HoveredLink>
            <HoveredLink href="/interface-design">Node</HoveredLink>
            <HoveredLink href="/seo">TS</HoveredLink>
            <HoveredLink href="/branding">Next</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">$0 : Free for Individual</HoveredLink>
            <HoveredLink href="/individual">$9 : Personal</HoveredLink>
            <HoveredLink href="/team">$49 : Teams</HoveredLink>
            <HoveredLink href="/enterprise">Call for Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;

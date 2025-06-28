"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator,
} from "./navigation-menu";
import { ThemeToggle } from "../theme/theme-toggle";

export default function Navbar() {
  return (
    <nav className="justify-center align-center justify-self-center w-[80vw] overflow-hidden">
      <NavigationMenu className="py-4 text-2xl justify-self-center">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/">HOME</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/about">ABOUT</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/explore">EXPLORE</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/contact">CONTACT</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink href="/tracker">TRACKER</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        <NavigationMenuIndicator />
        <NavigationMenuViewport />
      </NavigationMenu>
      <ThemeToggle />
    </nav>
  );
}

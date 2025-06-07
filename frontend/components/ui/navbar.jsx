"use client"

import React from "react"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuViewport,
  NavigationMenuIndicator
} from "./navigation-menu"

export default function Navbar() {
  return (
    <NavigationMenu className="py-4 text-2xl justify-center align-center justify-self-center">
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
        
      </NavigationMenuList>

      <NavigationMenuIndicator />
      <NavigationMenuViewport />
    </NavigationMenu>
  )
}

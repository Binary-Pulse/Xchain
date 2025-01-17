"use client";

import * as React from "react";
// import { menComponents,kidComponents, womenComponents, accessoriesComponent } from "@/config/products";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@repo/ui/components";
import { cn } from "@repo/ui/cn";
import { Icons } from "@repo/ui/icons";

export function MainNav() {
  return (
    <div className="gap-6 lg:flex">
      <a aria-label="Home" href="/" className="items-center space-x-2 lg:flex">
        <h1 className="tracking-wide  font-bold lg:inline-block text-3xl ">
          adXchain
        </h1>
      </a>
      {/* <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-semibold duration-200 hover:font-bold text-blue-300">
              <span>Prices</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Icons.logo className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium"></div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Headache-Free Project Building: Embracing the Latest
                        Tech with Ease.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/docs" title="Docs">
                  Discover template insights.
                </ListItem>
                <ListItem href="/computers" title="Trpc">
                  See TRPC in action.
                </ListItem>
                <ListItem href="https://github.com/me-imfhd" title="Github">
                  Contribute on GitHub."
                </ListItem>
                <ListItem href="https://github.com/me-imfhd" title="Github">
                  Contribute on GitHub."
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu> */}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

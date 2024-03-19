import React, { Suspense } from "react";
import { Skeleton, buttonVariants } from "@repo/ui/components";
import { cn } from "@repo/ui/cn";
import { MainNav } from "./main-nav";

export const SiteHeader = async ({ children }: React.PropsWithChildren) => {
  return (
    <header className="fixed  top-0 left-0  z-40 w-full  bg-transparent backdrop-blur-[18px]">
      <div className="flex px-4 md:px-8 h-14 items-center justify-between">
        <MainNav></MainNav>
        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Suspense
              fallback={
                <Skeleton
                  className={cn(
                    buttonVariants({ size: "default" }),
                    "w-full bg-muted text-muted-foreground"
                  )}
                >
                  Loading...
                </Skeleton>
              }
            >
              {/* <ProfileHeader /> */}
              {children}
            </Suspense>
          </nav>
        </div>
      </div>
    </header>
  );
};

"use client";
import * as React from "react"

import { Staatliches as Staat } from "next/font/google";
import { Montserrat as Mont } from "next/font/google";
import { Button } from '@/components/ui/button';
import { CircleUserRound } from "lucide-react";


const f = Staat({
  subsets: ['latin'],
  variable: "--font-sans",
  weight: "400",
})

const fm = Mont({
  subsets: ['latin'],
  variable: "--font-sans",
  weight: "400",
})

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, LayoutDashboard, CalendarCheck } from "lucide-react";
import Image from 'next/image';
import { useRouter } from 'next/navigation'

export default function Burger() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  return (
    <NavigationMenu className="text-right">
      <NavigationMenuList>
        <Sheet>
          <SheetTrigger><Menu className="h-10 w-10 mt-3.5 ml-0" /></SheetTrigger>
          <SheetContent side={"left"} className="grid-flow-row grid-cols-[1fr_auto] gap-0 content-start">
            <div className="grid grid-flow-column grid-cols-[1fr_auto] gap-0 w-full content-center">
              <Image
                className=""
                src="/eLogo.png"
                alt="This is the logo"
                width={300}
                height={300}
                />
             
            </div>
            <div className="grid grid-flow-column grid-cols-1 pt-6 pr-28 h-2/4">
              <Button className={cn(fm.variable, "border-0 text-black bg-amber-300")} variant="outline"><CircleUserRound className="h-5 w-5 mt-0 ml-2 mr-3" /> Profile</Button>
              <Button onClick={() => router.push('/schedule')} className="border-0" variant="outline"><CalendarCheck className="h-5 w-5 mt-0 ml-2 mr-3" /> Schedule</Button>
              <Button className="border-0" variant="outline"><CalendarCheck className="h-5 w-5 mt-0 ml-2 mr-3" /> Events</Button>
              <Button className="border-0" variant="outline"><Menu className="h-5 w-5 mt-0 ml-2 mr-3" /> Service Providers</Button>
              <Button className="border-0" variant="outline"><Menu className="h-5 w-5 mt-0 ml-2 mr-3" /> Settings</Button>
            </div>
          </SheetContent>
        </Sheet>
      </NavigationMenuList>
     
    </NavigationMenu>
  );
}
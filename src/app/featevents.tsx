import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { AlignCenter, AlignJustify, Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const FeatEvents = () => {
  return (
    <div className="bg-black mt-10 py-10">
      <div className="flex flex-row justify-between ">
        <h1 className="text-4xl font-bold ml-10 mt-5">Featured Events</h1>

        <div className="mt-5 mr-10"></div>
      </div>

      <div className="mt-10 box-border w-75 h-70 border-white flex flex-row ml-5 mb-10 py-10 ">
        {/* This is the corousel */}
        <div className="flex flex-1 items-center justify-center">
          <Carousel className="w-full max-w-6xl">
            <CarouselContent className="-ml-1">
              {Array.from({ length: 20 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/1 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardHeader>
                        <Image
                          className="rounded-2xl"
                          width={600}
                          height={270}
                          src={"/party.jpeg"}
                          alt="party"
                        />
                      </CardHeader>
                      <CardContent>
                        <p className="font-bold text-base">
                          Mr. Pok Wang Du Party
                        </p>
                        <CardDescription className="flex items-center">
                          <Calendar
                            className="mx-1 mt-10"
                            color={"#2A93D5"}
                            size={24}
                          />
                          <h3 className="mt-10">23, Sept 25</h3>

                          <MapPin
                            className="mx-1 mt-10 ml-10"
                            color={"#2A93D5"}
                            size={24}
                          />
                          <h3 className="mt-10">Cagayan de Oro City</h3>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default FeatEvents;

import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FeatureButton from "@/components/localComponent/LeftRightButton";

const FeatEvents = () => {
  return (
    <div className="bg-black mt-10 py-10">
      <div className="flex flex-row justify-between ">
        <h1 className="text-4xl font-bold ml-10 mt-5">Featured Events</h1>

       
       <div className="mt-5 mr-10">
       <FeatureButton/>
       </div>
        
      </div>

      <div className="mt-10 box-border w-75 h-70 border-white flex flex-row ml-5 mb-10 py-10 ">
        <Card className="rounded-2xl">
          <CardHeader>
            <Image className="rounded-2xl" width={600} height={270} src={"/party.jpeg"} alt="party"/>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-5xl">Mr. & Mrs. Malik Wedding</p>
            <CardDescription className="flex items-center">
              <Calendar className="mx-1 mt-10" color={"#2A93D5"} size={24}/>
              <h3 className="mt-10 text-2xl">23, Sept 25</h3>

              <MapPin className="mx-1 mt-10 ml-10" color={"#2A93D5"} size={24} />
              <h3 className="mt-10 text-2xl">Cagayan de Oro City</h3>
            </CardDescription>
          </CardContent>
          <CardFooter>
            <p className="text-xl">Description of an event</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FeatEvents;

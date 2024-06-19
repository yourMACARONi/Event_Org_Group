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
    <div className="bg-black w-100% h-svh mt-1">
      <div className="flex flex-row justify-between ">
        <h1 className="text-4xl font-bold ml-10 mt-5">Featured Events</h1>

       
       <div className="mt-5 mr-10">
       <FeatureButton/>
       </div>
        
      </div>

      <div className="mt-10 box-border w-75 h-70 border-white flex flex-row ml-5 mb-10">
        <Card className="rounded-2xl">
          <CardHeader>
            <Image className="rounded-2xl" width={300} height={170} src={"/party.jpeg"} alt="party"/>
          </CardHeader>
          <CardContent>
            <p className="font-bold text-l">Mr. & Mrs. Malik Wedding</p>
            <CardDescription className="flex items-center">
              <Calendar className="mx-1" color={"#2A93D5"} size={15}/>
              23, Sept 25

              <MapPin className="mx-1" color={"#2A93D5"} size={15} />
              Cagayan de Oro City
            </CardDescription>
          </CardContent>
          <CardFooter>
            <p>Description of an event</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FeatEvents;

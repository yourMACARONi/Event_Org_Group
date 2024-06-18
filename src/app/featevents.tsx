import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
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
    <div className="bg-black w-100% h-96 mt-1">
      <div className="flex flex-row justify-between ">
        <h1 className="text-4xl font-bold ml-10 mt-5">Featured Events</h1>

       
       <div className="mt-5 mr-10">
       <FeatureButton/>
       </div>
        
      </div>

      <div className="mt-10 box-border w-75 h-50 border-white flex flex-row ml-5">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default FeatEvents;

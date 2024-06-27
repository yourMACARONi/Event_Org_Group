"use client";
import * as React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";



export default function NotificationButton() {
  return (
    <div className="flex justify-center items-center">
      <Button
        variant="default"
        className="px-4 py-2 rounded-full text-lg text-black bg-white"
      >
        Suppliers
      </Button>
      <Button
        variant="default"
        className="px-4 py-2 rounded-full text-lg text-black bg-white ml-2"
      >
        Group
      </Button>
      <Button
        variant="default"
        className="px-4 py-2 rounded-full text-lg text-black bg-amber-400 ml-2"
      >
        <Plus size={20} className="mr-2" />
        Add
      </Button>

    </div>
  );
}

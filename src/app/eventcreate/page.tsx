"use client"
import React, { ChangeEvent, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Poppins as FontSans } from "next/font/google"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, FileUp } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Textarea } from "@/components/ui/textarea"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400"

})

import Navbar from '../Navbar';

export default function Home() {
  const [isEventsDropdownOpen, setIsEventsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const router = useRouter()

  const handleUploadClick = () => {
    // 👇 We redirect the click event onto the hidden input element
    inputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    setFile(e.target.files[0]);

    // 🚩 do the file upload here normally...
  };
  
  const toggleEventsDropdown = () => {
    setIsEventsDropdownOpen(!isEventsDropdownOpen);
    setIsProfileDropdownOpen(false); // Ensure the profile dropdown is closed
  };
  
  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsEventsDropdownOpen(false); // Ensure the events dropdown is closed
  };

  const FormSchema = z.object({
    dob: z.date({
      required_error: "A date of birth is required.",
    }),
  })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <main className='bg-gradient-to-b from-amber-400 to-black'>
        <Navbar/>
    
    <div className={cn(fontSans.variable, "font-sans mx-[70px] my-[30px] ")}>
      <h1 className="gap-x-2 text-[65px] font-bold flex flex-1 items-center justify-center" >
        <p>CREATE</p><p className="text-amber-700">EVENT</p>
      </h1>



      <div className='flex flex-1 items-center justify-center mb-10'>
          <button className="border-2 border-white border-dashed text-white px-[22.2%] py-[10.9%] rounded-3xl mt-9" onClick={handleUploadClick}>
            {file ? `${file.name}` : <FileUp size={60} />}
          </button>

          {/* 👇 Notice the `display: hidden` on the input */}
          <input
            type="file"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

          
      <div className="flex flex-1 items-center justify-center">
        <div>
          <p className='mx-[10px] my-[5px] '>Event name</p>
          <Input className='placeholder-black w-[600px] bg-white' type="text" placeholder="Enter event name" />
          <p className='mx-[10px] my-[5px] mt-5'>Event Type</p>
          <Input className='placeholder-black w-[600px] bg-white' type="text" placeholder="Enter event type" />
          <p className='mx-[10px] my-[5px] mt-5'>Event Location</p>
          <Input className='placeholder-black w-[600px] bg-white' type="text" placeholder="Enter event location" />
          <p className='mx-[10px] my-[5px] mt-5'>Event Date</p>
          
          
          <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
            <FormField
              control={form.control}
              name="dob"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal placeholder-black w-[600px] bg-white",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
                
              )}
            />
          </form>
          </Form>
         
        </div>
        <div>
         
        </div>
      </div>
     

      <div className='flex flex-1 items-center justify-center'>
      <Button className={cn(fontSans.variable , 'py-[27px] mt-[50px] w-[600px] text-[25px] text-bold hover:bg-amber-500 ')}>
        Submit</Button>
      </div>
      
      
    </div>
    </main>
    
  );
}
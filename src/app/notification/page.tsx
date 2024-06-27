import React, { FC, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navbar from "../Navbar";
import Footer from "../footer";
import NotificationButton from "@/components/localComponent/NotificationButton";

interface NotificationButtonProps {
  message: string;
  avatar: ReactNode;
}

const Notifications: FC = () => {
  const notificationData = [
    {
      message: "Jane Doe: Hello this is just a test..",
      avatar: (
        <Avatar>
          <AvatarImage
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt="avatar"
          />
        </Avatar>
      ),
    },
  ];

  return (
    <section
      className="h-screen flex-col scrollbar-hide overflow-y-auto"
      style={{ background: "#09080A" }}
    >
      {/* header */}
      <Navbar />

      <div className="flex justify-between items-center px-4 py-3">
      <div className="text-white font-bold text-2xl text-center flex-1">NOTIFICATIONS</div>
      </div>
      <NotificationButton/>


      <div className="body min-h-screen min-w-screen" style={{ background: "#201E22", marginTop: "25px"}}>
        <div className="container mx-auto max-w-[87%]" >
        <div className="px-4" >
        <ul className="py-4">   
        </ul>
      </div>
            </div>
        </div>


      {/* footer */}
      <Footer />
    </section>
  );
};

export default Notifications;

import Image from "next/image";
import Navbar from "./Navbar";
import Background from "./background";
import EventButton from "@/components/localComponent/EventButton";
import FeatEvents from "./featevents";
import Footer from "./footer";


export default function Home() {
  return (
    <main className="bg-party bg-no-repeat bg-cover bg-center justify-center backdrop-brightness-75">
    <div>
      <Navbar />

      <div className="flex-col justify-start items center px-[30vh] py-[30vh]">
        <Background />

        <EventButton></EventButton>

       
      </div>
      <div>
      <FeatEvents/>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
    </main>
  );
}

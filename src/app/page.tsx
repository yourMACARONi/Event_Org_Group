import Navbar from "./Navbar";
import Background from "./background";
import EventButton from "@/components/localComponent/EventButton";
import FeatEvents from "./featevents";
import Footer from "./footer";
import Burger from "./burger";

export default function Home() {
  return (
    <main className="bg-party max-h-full max-w-full bg-no-repeat bg-cover justify-center relative ">
      <div>
      
        <Navbar />

        <div className="flex-col justify-start items center px-[30vh] py-[30vh]">
          <Background />

          <EventButton></EventButton>
        </div>
        <div>
          <FeatEvents />
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </main>
  );
}

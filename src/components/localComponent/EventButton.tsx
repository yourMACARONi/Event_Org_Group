import { Button } from "../ui/button"
import { Video } from 'lucide-react';
import { Search } from 'lucide-react';


export default function EventButton() {
    return (
        <>
        <Button variant="default" className="px-[65px] py-[30px] rounded-full text-3xl text-black bg-amber-400 ml-7" >
            <Video size={30} className="mr-3" />
            Create an Event
            </Button>    

            <Button variant="default" className="px-[75px] py-[30px] rounded-full text-3xl text-black bg-white ml-7">
            <Search size={25} className="mr-3" />
            Find an Event
            </Button>   
        </>
    )
}
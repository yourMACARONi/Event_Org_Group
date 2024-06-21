import Navbar from "../Navbar";
import ProfileCard from './components/ProfileCard';
import PopularEvents from './components/PopularEvents' 
import Footer from "../footer";

export default function Profile() {
    return (
        <>
            <Navbar />
            <ProfileCard />
            <PopularEvents />
            <Footer />
        </>
    );
}

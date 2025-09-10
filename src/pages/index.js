import Section1 from "./home/Section1";
import Section2 from "./home/Section2";
import Section3 from "./home/Section3";
import Section4 from "./home/Section4";
import SocialSidebar from "../components/Sidebar";


export default function Home() {
  return (

    <div>

      <SocialSidebar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />

    </div>
    
  );
}

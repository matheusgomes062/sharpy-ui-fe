import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Welcome from "./Welcome";

export default function Home() {
  return (
    <div className="flex flex-col justify-between w-screen h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Welcome />
      </main>
      <Footer />
    </div>
  );
}

import Image from "next/image";
import Logo from "./Logo";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <main className="bg-secondary grid place-content-center w-screen h-screen">
        <div className="w-52 lg:w-[882px]">
          <Logo />
        </div>
      </main>
      <section className="grid place-content-center bg-white text-secondary w-screen h-screen text-5xl font-bold">
        COMING SOON
      </section>
    </div>
  );
}

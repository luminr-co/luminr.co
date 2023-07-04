import { ContactusButton } from "@/app/components/ContactUs-Button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-transparent ">
      <div className="w-11/12 py-8 flex justify-between items-center  mx-auto">
        <Link href={"/"}>
          <Image
            src="/logo.svg"
            width={160}
            height={32}
            alt="Picture of the author"
            unoptimized
            className="hidden md:block"
          />
          <Image
            src="/mobile-logo.svg"
            alt="Logo"
            width={35}
            height={0}
            unoptimized
            className="md:hidden"
          />
        </Link>

        <ContactusButton />
      </div>
    </nav>
  );
};

export default Navbar;

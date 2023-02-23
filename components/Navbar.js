import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/pngegg.png" width={100} height={100} />
        {/* <h1>Test List</h1> */}
      </div>
      <Link href="/">Home</Link>
      <Link href="about">About</Link>
      <Link href="ninjas">Ninja Listing</Link>
    </nav>
  );
};

export default Navbar;

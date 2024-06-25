import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-white bg-pink-50/20'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='text-3xl font-semibold'>
            bri<span className='text-accent'>&#581;</span>n
          </h1>
        </Link>
        {/* desktop nav */}
        <div className='hidden xl:flex items-center gap-8'>
          <Nav />
          <Link href='/contact'>
            <Button>Get in touch</Button>
          </Link>
        </div>
        {/* moble nav */}
        <div className='xl:hidden'>test</div>
      </div>
    </header>
  );
};

export default Header;

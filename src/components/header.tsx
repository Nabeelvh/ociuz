import React, { useState, FC } from 'react';
import { Link } from 'react-router-dom';

interface HeaderPageProps {}

const HeaderPage: FC<HeaderPageProps> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  return (
    <>
      <nav className="container mx-auto p-4 bg-slate-100 text-black">
        <div className=" container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <a href="#" className="font-bold text-lg">
              YourLogo
            </a>
          </div>
          <div className="hidden md:block gap-4 me-10">
            <Link to="" className="mr-16">Home</Link>
            <Link to="/about" className="mr-16">About</Link>
            <Link to="/service" className="mr-16">Service</Link>
            <Link to="/contact" className="mr-16">Contact</Link>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {isOpen ? (
                  <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16v1H4V6zm16 4H4v1h16v-1zm-16 5h16v1H4v-1z" />
                ) : (
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 18v-2h18v2H3zm0-7h18v2H3v-2zm0-7h18v2H3V4z" />
                )}
              </svg>
            </button>  
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <a href="#" className="py-5 pl-4 block my-2">Home</a>
            <a href="#" className="py-5 pl-4 block my-2">About</a>
            <a href="#" className="py-5 pl-4 block my-2">Contact</a>
          </div>
        )}
      </nav>
    </>
  );
};

export default HeaderPage;

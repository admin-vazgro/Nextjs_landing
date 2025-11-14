import logo from "../public/logo.svg"
import Image from 'next/image'
export default function Navbar() {
  return (
    <>
      <header className="py-6 bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-3">
              <div> <Image
                                src={logo}
                                alt="Picture of the author"
                                
                            /></div>
           
          </div>

          <nav className="hidden md:flex items-center gap-10 text-sm tracking-wider text-muted">
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#testimonials" className="hover:text-primary">Testimonials</a>
            <a href="#resources" className="hover:text-primary">Resources</a>

          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="#beta" className="px-4 py-2 bg-primary text-white rounded-md text-sm hover:opacity-95">Beta</a>
          </div>

          <div className="md:hidden">
            <button aria-label="Open menu" className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

    </>
  );
}
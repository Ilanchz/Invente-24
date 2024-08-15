function Navelement({menuOpen,setMenuOpen}){
    return <div id="nav-bar" className="w-full h-16 md:h-24 flex items-center justify-between px-4 md:px-8">
            <img src="/snu-logo.svg" alt="SNU" className="w-48 h-12 md:h-16" />
            
            {/* Menu Button for Small Screens */}
            <button
              className="md:hidden text-white text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? '✖' : '☰'}
            </button>
            
            {/* Navigation Links for Larger Screens */}
            <nav className="hidden md:flex items-center space-x-6 md:space-x-12 py-2 font-dosis text-sm md:text-md">
              <a href="/#home" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-orange-500">Home</a>
              <a href="/#events" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-orange-500">Events</a>
              <a href="/hackathon" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-orange-500">Hackathons</a>
              <a href="/workshop" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-orange-500">Workshops</a>
              <a href="#schedule" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-orange-500">Schedule</a>
              <a href="#sponsors" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-orange-500">Sponsors</a>
              <a href="hospitality" className="text-white text-base md:text-lg font-bold transition-transform duration-300 hover:scale-110 hover:text-orange-500">Hospitality</a>
            </nav>

            <img src="/ssn-logo.svg" alt="SSN" className="w-48 h-12 md:h-16" />
            {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-80 z-20 flex flex-col items-center justify-center">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setMenuOpen(false)}
            >
              ✖
            </button>
            <nav className="flex flex-col items-center space-y-6 font-dosis text-lg font-bold w-1/2 text-center">
              <a href="/#home" className="transition-transform w-full bg-white p-2 rounded-md text-black duration-300 hover:scale-110">Home</a>
              <a href="/#events" className="transition-transform w-full bg-white p-2 rounded-md duration-300 hover:scale-110">Events</a>
              <a href="/hackathon" className="transition-transform w-full bg-white p-2 rounded-md duration-300 hover:scale-110">Hackathon</a>
              <a href="/workshop" className="transition-transform w-full bg-white p-2 rounded-md duration-300 hover:scale-110">Workshop</a>
              <a href="#schedule" className="transition-transform w-full bg-white p-2 rounded-md duration-300 hover:scale-110">Schedule</a>
              <a href="#sponsors" className="transition-transform w-full bg-white p-2 rounded-md duration-300 hover:scale-110">Sponsors</a>
              <a href="/hospitality" className="transition-transform w-full bg-white p-2 rounded-md duration-300 hover:scale-110">Hospitality</a>
            </nav>
          </div>
        )}
          </div>
          
}

export default Navelement;
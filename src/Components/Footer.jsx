import React from 'react';

export default function Footer() {
  return (
    <footer className="w-screen relative bg-gradient-to-r from-[#1D1F2A] to-[#1D1F2AE5] text-white">
      {/* Desktop Footer */}
      <div className="hidden lg:block py-10 px-6 lg:px-10 text-left w-full">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between gap-5 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center font-medium mb-6 lg:mb-0">
            <img
              src="/invente24_white.png"
              alt="Invente Logo"
              width={252}
              height={90}
              className="mb-4 lg:mb-0"
            />
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20">
            <div>
              <p className="font-extralight text-sm uppercase mb-2.5">Participate</p>
              <ul className="flex flex-col font-medium text-base gap-1.5">
                <li><a href="/#events">Events</a></li>
                <li><a href="/hackathonAndworkshop">Hackathons</a></li>
                <li><a href="/hackathonAndworkshop">Workshops</a></li>
              </ul>
            </div>
            <div>
              <p className="font-extralight text-sm uppercase mb-2.5">Know More</p>
              <ul className="flex flex-col font-medium text-base gap-1.5">
                <li><a href="/schedule">Schedule</a></li>
                <li><a href="/sponsors">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <p className="font-extralight text-sm uppercase mb-2.5">Get in Touch</p>
              <ul className="flex flex-col font-medium text-base gap-1.5">
                <li><a href="/hospitality">Hospitality</a></li>
                <li>
                  <div className="flex gap-3 mt-2 justify-center items-center">
                    <a href="https://www.instagram.com/ssnsnucinvente/">
                      {/* Instagram Icon */}
                    </a>
                    <a href="https://www.linkedin.com/company/invente-ssnce/?originalSubdomain=in">
                      {/* LinkedIn Icon */}
                    </a>
                    <a href="https://www.facebook.com/ssninvente/">
                      {/* Facebook Icon */}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex lg:flex-row items-center lg:items-start gap-4">
          <div className="bg-coral flex items-center text-[#FFFFFF2B] w-full justify-center lg:justify-start p-4">
            <div className="w-full text-center lg:text-left">
              <div className="box-border h-0 border-[1px] border-[#FFFFFF2B] mb-2" />
              <div>©2024 SSN College of Engineering & Shiv Nadar University, Chennai.</div>
            </div>
          </div>
          <div className="flex flex-wrap flex-col items-center justify-center gap-2">
            <a href="http://www.ssn.edu.in/">
              <img src="/ssn-logo.svg" alt="SSN Logo" height={45} width={90} />
            </a>
            <a href="https://www.snuchennai.edu.in/">
              <img src="/snu-logo.svg" alt="SNU Logo" height={50} width={120} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden py-10 px-6 text-center w-full">
        <div className="flex flex-col gap-8 mb-8 items-center">
          {/* Logo Section */}
          <img
            src="/invente24_white.png"
            alt="Invente Logo"
            width={252}
            height={90}
          />
          {/* Links Section */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="font-extralight text-sm uppercase mb-2.5">Participate</p>
              <ul className="flex flex-col font-medium text-base gap-1.5">
                <li><a href="/#timeline">Events</a></li>
                <li><a href="/hackathonAndworkshop">Hackathons</a></li>
                <li><a href="/hackathonAndworkshop">Workshops</a></li>
              </ul>
            </div>
            <div>
              <p className="font-extralight text-sm uppercase mb-2.5">Know More</p>
              <ul className="flex flex-col font-medium text-base gap-1.5">
                <li><a href="/schedule">Schedule</a></li>
                <li><a href="/sponsors">Sponsors</a></li>
              </ul>
            </div>
            <div>
              <p className="font-extralight text-sm uppercase mb-2.5">Get in Touch</p>
              <ul className="flex flex-col font-medium text-base gap-1.5">
                <li><a href="/hospitality">Hospitality</a></li>
                <li>
                  <div className="flex gap-3 mt-2 justify-center items-center">
                    <a href="https://www.instagram.com/ssnsnucinvente/">
                      {/* Instagram Icon */}
                    </a>
                    <a href="https://www.linkedin.com/company/invente-ssnce/?originalSubdomain=in">
                      {/* LinkedIn Icon */}
                    </a>
                    <a href="https://www.facebook.com/ssninvente/">
                      {/* Facebook Icon */}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-coral flex flex-col items-center text-[#FFFFFF2B] p-4">
          <div className="w-full text-center">
            <div className="box-border h-0 border-[1px] border-[#FFFFFF2B] mb-2" />
            <div>©2024 SSN College of Engineering & Shiv Nadar University, Chennai.</div>
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center mt-4">
            <a href="http://www.ssn.edu.in/">
              <img src="/ssn-logo.svg" alt="SSN Logo" height={45} width={110} />
            </a>
            <a href="https://www.snuchennai.edu.in/">
              <img src="/snu-logo.svg" alt="SNU Logo" height={50} width={170} />
            </a>
          </div>
        </div>
      </div>

      <section className="w-screen py-4 bg-gray-900 text-sm md:text-lg text-wrap text-white text-center font-raleway p-4">
        <p className="">
          Website: Built by <a href="https://www.linkedin.com/in/ilanchezhiyan-v/" className="hover:underline text-orange-600">Ilanchezhiyan</a>, 
          <a href="#" className="hover:underline text-orange-600"> Lohit</a>, 
          <a href="https://www.linkedin.com/in/shaun-allan-h/" className="hover:underline text-orange-600"> Shaun Allan H</a>, 
          <a href="https://www.linkedin.com/in/ashwin-kumar-18872327a/" className="hover:underline text-orange-600"> Ashwin Kumar S</a>.&#160;
          Designed by <a href="https://www.linkedin.com/in/samyuktha-d-9756b4245/" className="hover:underline text-green-300"> Samyuktha D</a> and&#160;
          <a href="https://www.linkedin.com/in/jithu-morrison-s/" className="hover:underline text-green-300">Jithu Morrison</a>.
        </p>
        <p className="mt-2 text-xs">We use Google Analytics to improve our website</p>
      </section>
    </footer>
  );
}

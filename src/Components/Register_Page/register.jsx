import React, { useState } from 'react';
import Footer from '../Footer';
import Navelement from '../Navelement';

function Register() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div 
            className="w-full min-h-screen flex flex-col bg-gray-100"
            id="about_tab"
            style={{ 
                backgroundImage: `url('/bg-image.jpg')`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <Navelement 
                menuOpen={menuOpen} 
                setMenuOpen={setMenuOpen} 
            />

            <div className="font-libre flex flex-col md:flex-row justify-center items-center h-full bg-gray-800 p-4 md:p-10 rounded-xl">
                {/* Left Section */}
                <div className="w-full md:w-1/2 text-center md:pr-8 mb-8 md:mb-40 flex justify-center items-center md:border-r-1 border-white">
                    <div className="p-4 md:p-8 rounded-lg">
                        <h1 className="font-raleway text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-pink-400 to-red-600">
                            REGISTER NOW!
                        </h1>
                        <p className="font-dosis mt-4 text-gray-100 text-lg md:text-xl">
                            Make sure you have read the rules and regulations before you pay for the passes.
                        </p>
                        
                        <div className="mt-6 md:mt-8">
                            {[
                                { text: 'Technical Passes', link: 'https://docs.google.com/forms/d/e/1FAIpQLScHZ7G6EKFZmyGvDUtvwTEtUgzGBs5e5EViK90xdv1jqLmg7A/viewform' },
                                { text: 'Hackinfinity', link: 'https://docs.google.com/forms/u/2/d/e/1FAIpQLSdk69vYslrxmG02EOnCsOuOa0WqqWpbU4e8jkekqLV5_SZwTg/viewform' },
                                { text: 'Impact Arcade (Game Jam) - 24 Hour Hackathon', link: 'https://forms.gle/9ktxPpdhFnGXcqs68' },
                                { text: 'Workshop 1', link: '', status: 'disabled' },
                                { text: 'Workshop 2', link: '', status: 'disabled' },
                            ].map((button, index) => (
                                <button 
                                    key={index}
                                    className={`font-dosis text-white w-full md:w-1/2 mx-auto md:ml-10 text-sm md:text-lg bg-gradient-to-r from-cyan-600 to-teal-600 hover:bg-gradient-to-l font-bold py-2 px-4 rounded-lg mb-4 ${button.status === 'disabled' ? 'opacity-20 cursor-not-allowed' : ''}`}
                                    onClick={() => button.status !== 'disabled' && button.link && (window.location.href = button.link)}
                                    disabled={button.status === 'disabled'}
                                >
                                    {button.text}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-1/2 p-4 md:p-8 md:h-screen h-full rounded-lg overflow-y-scroll scrollbar-hide">
                    <h2 className="font-raleway text-xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-600 to-blue-200 text-center">
                        RULES
                    </h2>
                    <ol className="mt-4 text-sm md:text-lg text-gray-100 list-decimal pl-6 space-y-2 font-dosis">
                        <li>Select Your Pass: Choose from Hackinfinity, Technical Event Passes, Workshop 1, Workshop 2, or Impact Arcade. You’ll be redirected to a Google Form with the Razorpay payment link in Gform description.</li>
                        <li>Click the Razorpay link to pay.</li>
                        <li>After payment, upload the auto-generated payment receipt (sent to your email) in the designated section of the Google Form.</li>
                        <li>Note: Ensure that you select the correct pass type when you fill in details inside the Razorpay link (Hackathon, Technical Event Passes, Workshop) when prompted.</li>
                        <li>For Hackinfinity or Impact Arcade (a team event), each team member must pay individually using the Razorpay link. The Hackinfinity or Impact Arcade Google Form will ask for the details of all participants at once. Upload all payment receipts (one for each team member) in the designated section of the form.</li>
                        <li>Please note that there will be no on-spot registration for HackInfinity. The event is limited to 25 participants only, and registration will be accepted on a first-come, first-served basis</li>
                        <li>For other passes (Technical event pass & workshop passes), after payment, each participant must individually fill out the Google Form.</li>
                        <li>With one Technical Pass, you can participate in a maximum of 4 Technical Events across different departments.</li>
                        <li>The Technical Pass is valid only for individual registration. If a team event is involved, each member of the team must purchase their own Technical Pass to participate.</li>
                        <li>For paper presentation of any department, you should purchase a technical pass and you can use the same to participate in 3 other Technical events across different departments.</li>
                        <li>If you plan to participate in the Paper Presentation of any department select "Yes" in the Technical Passes form. You'll receive department-specific paper presentation Google Form links within 24 hours through email. Complete the relevant form for further instructions.</li>
                        <li>Technical Passes do not cover Non-Technical Events. Separate on spot registration for Non-Technical Events will be available in their respective departments.</li>
                    </ol>
                </div>
            </div>

            <section className="mt-auto">
                <Footer />
            </section>
        </div>
    );
}

export default Register;

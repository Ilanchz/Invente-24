import React, { useState } from 'react';
import Footer from '../Footer';
import Navelement from '../Navelement';

function Register() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div 
            className="w-full min-h-screen flex flex-col bg-gray-100"
            id="about_rab"
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

            <div className="flex md:flex-row overflow-y-clip scrollbar-hide justify-center items-center h-screen bg-gray-700 bg-opacity-40 ml-10 mr-10 mb-10 rounded-xl">
                {/* Left Section */}
                <div className="mt-10 ml-10 w-full md:w-1/2 md:h-auto text-center md:text-left md:pr-8">
                    <div className="p-8 rounded-lg">
                        <h1 className="text-4xl font-bold text-white">REGISTER NOW!</h1>
                        <p className="mt-4 text-gray-400">
                            Make sure you have read the rules and regulations before you pay for the passes.
                        </p>
                        <div className="mt-8">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full mb-4">
                                PAY NOW
                            </button>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-full">
                                REGISTER HERE
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="md:w-1/2 p-8 w-screen max-w-4xl rounded-lg mt-20 mb-20 overflow-scroll scrollbar-hide">
                    <center>
                        <h2 className="text-3xl font-bold bg-clip-text text-white">RULES</h2>
                    </center>
                    <ol className="mt-4 text-gray-100 list-decimal pl-6 space-y-3">
                        <li>Select Your Pass: Choose from Hackinfinity, Technical Event Passes, Workshop 1, Workshop 2, or Impact Arcade. You’ll be redirected to a Google Form with the Razorpay payment link in Gform description.</li>
                        <li>Click the Razorpay link to pay.</li>
                        <li>After payment, upload the auto-generated payment receipt (sent to your email) in the designated section of the Google Form.</li>
                        <li>Note: Ensure that you select the correct pass type when you fill in details inside the Razorpay link (Hackathon, Technical Event Passes, Workshop) when prompted.</li>
                        <li>For Hackinfinity or Impact Arcade (a team event), each team member must pay individually using the Razorpay link. The Hackinfinity or Impact Arcade Google Form will ask for the details of all participants at once. Upload all payment receipts (one for each team member) in the designated section of the form.</li>
                        <li>For other passes (Technical event pass & workshop passes), after payment, each participant must individually fill out the Google Form.</li>
                        <li>With one Technical Pass, you can participate in a maximum of 4 Technical Events across different departments.</li>
                        <li>The Technical Pass is valid only for individual registration. If a team event is involved, each member of the team must purchase their own Technical Pass to participate.</li>
                        <li>For paper presentation of any department, you should purchase a technical pass and you can use the same to participate in 3 other Technical events across different departments.</li>
                        <li>If you plan to participate in the Paper Presentation of any department select "Yes" in the Technical Passes form. You'll receive department-specific paper presentation Google Form links within 24 hours through email. Complete the relevant form for further instructions.</li>
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

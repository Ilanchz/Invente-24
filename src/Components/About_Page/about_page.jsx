import React, { useState } from 'react';
import Footer from '../Footer';
import Navelement from '../Navelement';
import DepartmentGrid from './grid_contact';

function About() {
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

            <div className="flex flex-col items-center justify-center flex-grow px-4 md:px-8 lg:px-16 py-8 space-y-8">
                
                <div className="bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg">
                    <h1 className="hover:text-green-800 md:text-4xl text-2xl font-dosis font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-green-600 to-lime-400 mb-4 text-center">
                        ABOUT SSN INSTITUTIONS
                    </h1>
                    <div className="flex flex-col md:flex-row items-center md:items-start">
                        <img 
                            src="/ssn_contact.jpg" 
                            alt="SSN Institutions" 
                            className="h-full w-2/6 rounded-lg shadow-md mb-4 md:mb-0 md:mr-6"
                            loading="lazy"
                        />
                        <p className="text-gray-100 leading-relaxed text-lg font-dosis">
                            SSN College of Engineering, located in the vibrant city of Chennai, Tamil Nadu, is a premier institution established in 1996 by Padma Bhushan Dr. Shiv Nadar, a visionary leader and the founder of HCL Technologies. SSN has rapidly ascended to the top echelons of engineering education in India, with a NIRF ranking of 45 among private engineering colleges in India.

                            Boasting a 230-acre state-of-the-art campus with top-notch facilities, SSN offers diverse engineering programs and fosters innovation through robust research centers and global collaborations. The institution emphasizes high academic standards and cutting-edge research while promoting entrepreneurship through initiatives like incubation centers and hackathons.

                            <br/><br/>SSN has a robust placement cell that maintains strong ties with leading companies and organizations. The placement cell organizes various training programs, workshops, and seminars to enhance students' employability skills. As a result, SSN graduates are highly sought after by top recruiters, including multinational corporations, leading Indian companies, and innovative startups.

                            <br/><br/>The college also places a strong emphasis on holistic development, offering a wide range of extracurricular activities, sports, and cultural events. The SSN campus is home to numerous clubs and societies that cater to the diverse interests of students, fostering a vibrant and inclusive community.

                            Overall, SSN College of Engineering stands as a beacon of excellence in engineering education, dedicated to nurturing future leaders and innovators who will drive progress and make significant contributions to society.
                        </p>
                    </div>
                </div>

                <div className="bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg text-center">
                    <center>
                        <h1 className="hover:text-red-700 text-2xl md:text-3xl font-raleway font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-yellow-300 mb-4">ABOUT SNU CHENNAI</h1>
                    </center>
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-2">
                        <p className="text-left text-balance font-dosis text-gray-100 leading-relaxed text-lg">
                            SNU Chennai, a premier institution in Tamil Nadu, offers a multidisciplinary approach with programs in engineering, humanities, management, and natural sciences, all designed to promote holistic development and innovative thinking. Established with a vision to foster excellence in education, SNU Chennai aims to create a dynamic learning environment that nurtures intellectual curiosity and creativity.

                            The university boasts a modern, expansive campus equipped with state-of-the-art facilities, including advanced laboratories, a comprehensive library, and various recreational amenities. The campus infrastructure is designed to support a vibrant academic life, with smart classrooms, dedicated research centers, and collaborative workspaces that facilitate student and faculty interaction.

                            <br/><br/>With a focus on fostering a global perspective, SNU Chennai offers students the chance to engage in international programs and initiatives. The university's global partnerships enable students to gain exposure to different cultures, ideas, and academic practices, preparing them for successful careers in an increasingly interconnected world.

                            Overall, SNU Chennai stands as a leading institution dedicated to providing a holistic and transformative educational experience. Through its commitment to academic excellence, research, innovation, and social responsibility, SNU Chennai equips students with the knowledge, skills, and values needed to make a meaningful impact in their chosen fields and in society at large.
                        </p>
                        <img 
                            src="/snu_about.jpg" 
                            alt="SNU Chennai" 
                            className="h-full w-2/3 md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:ml-6"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div className="bg-gray-900 p-6 md:p-10 rounded-lg shadow-lg text-center">
                    <center>
                        <h1 className="hover:font-bold text-3xl font-raleway bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-4">INVENTE</h1>
                    </center>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <img 
                            src="/invente_about.jpg" 
                            alt="INVENTE" 
                            className="md:w-1/2 w-full h-80 rounded-lg shadow-md mb-4"
                            loading="lazy"
                        />
                        <img 
                            src="/invente2_about.jpg" 
                            alt="INVENTE" 
                            className="md:w-1/2 w-full h-80 rounded-lg shadow-md mb-4"
                            loading="lazy"
                        />
                    </div>
                    
                    <p className="text-gray-100 leading-relaxed text-lg text-left font-dosis">
                        INVENTE, the flagship technical fest of SSN College of Engineering, is a celebrated annual event that showcases a blend of technical and non-technical competitions. Drawing participants from various colleges, the fest features coding challenges, robotics contests, hackathons, quizzes, debates, and fun games, ensuring something for everyone. Specialized workshops led by industry experts cover diverse topics, enhancing students' technical skills and career readiness. Beyond competition and learning, INVENTE fosters camaraderie, teamwork, and networking, contributing significantly to students' holistic growth and reinforcing SSN College's commitment to excellence.
                    </p>
                </div>
            </div>

            <h2 className='font-dosis text-3xl text-blue-50 bg-black p-5 text-center mb-5'>Department Presidents</h2>

            <DepartmentGrid />

            <section className="mt-auto">
                <Footer />
            </section>
        </div>
    );
}

export default About;

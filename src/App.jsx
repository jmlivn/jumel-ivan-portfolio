import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import logo from './images/logo.png';
import meImage from './images/me.jpg';

import PF1 from './images/pf1.jpg';
import PF2 from './images/pf2.jpg';
import PF3 from './images/pf3.jpg';
import PORTFOLIO from './images/portfolio.png';
import OJT_DTR from './images/ojt_dtr.jpg';
import OJT2 from './images/ojt2.jpg';
import OJT from './images/ojt.jpg';
import OJT3 from './images/ojt3.jpg';
import GD1 from './images/gd1.jpg';
import DESIGN from './images/design.jpg';
import GD3 from './images/gd3.jpg';
import DESIGN2 from './images/design2.png';
import GD2 from './images/gd2.jpg';
import DESIGN3 from './images/design3.jpg';

import NFT_DOMAIN from './images/nft-domain-certificate.jpeg';
import HTML_CERT from './images/html-certificate.jpeg';
import OJT_CERT from './images/ojt_certificate.jpg';
import CAPSTONE1 from './images/capstone_writing1.png';
import CAPSTONE2 from './images/capstone_writing2.jpg';
import MCITS2024 from './images/MCITS-2024-FINAL.png';
import MCITS2023 from './images/MCITS-2023-FINAL.png';

const App = () => {
 const [activeBox, setActiveBox] = useState(null);


const [isModalOpen, setModalOpen] = useState(false);
const [selectedImage, setSelectedImage] = useState(null);

const openModal = (imageSrc) => {
  setSelectedImage(imageSrc);
  setModalOpen(true);
};

const closeModal = () => {
  setModalOpen(false);
  setSelectedImage(null);
};

const handleBoxClick = (index) => {
  setActiveBox(index === activeBox ? null : index);
};
const projects = [
  {
    title: "PosePerfect",
    description: "An AI-powered app that corrects your exercise posture using pose estimation.",
    images: [
      <img src="/images/pf1.jpg" alt="PosePerfect Image 1" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/pf2.jpg" alt="PosePerfect Image 2" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/pf3.jpg" alt="PosePerfect Image 3" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/portfolio.png" alt="PosePerfect Portfolio" className="h-10 lg:h-12 rounded-full" />
    ]
  },
  {
    title: "Internship DTR",
    description: "A DTR Management System for EonBotz Technology Interns",
    images: [
      <img src="/images/ojt_dtr.jpg" alt="Internship DTR Image 1" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/ojt2.jpg" alt="Internship DTR Image 2" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/ojt.jpg" alt="Internship DTR Image 3" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/ojt3.jpg" alt="Internship DTR Image 4" className="h-10 lg:h-12 rounded-full" />
    ]
  },
  {
    title: "Graphics Design and Visual Branding",
    description:
      "Created fliers, posters, tarpaulins, and various promotional materials for EonBotz Technology. Focused on delivering visually compelling designs aligned with the company's branding for both digital and print platforms.",
    images: [
      <img src="/images/gd1.jpg" alt="Graphics Design Image 1" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/design.jpg" alt="Graphics Design Image 2" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/gd3.jpg" alt="Graphics Design Image 3" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/design2.png" alt="Graphics Design Image 4" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/gd2.jpg" alt="Graphics Design Image 5" className="h-10 lg:h-12 rounded-full" />,
      <img src="/images/design3.jpg" alt="Graphics Design Image 6" className="h-10 lg:h-12 rounded-full" />
    ]
  }
];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-[#003135] flex flex-col w-full font-[Poppins]"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
{/* Navbar */}
<nav className="w-full flex justify-between items-center px-6 lg:px-12 py-4 lg:py-6 bg-gradient-to-r from-[#0fa4af] to-[#024950] sticky top-0 z-50 shadow-md">
      <div className="flex items-center">
        {/* Use the imported logo here */}
        <img src={logo} alt="JIP Logo" className="h-10 lg:h-12 rounded-full" />
      </div>
      <ul className="hidden md:flex gap-6 lg:gap-8 text-[#f1f1f1] text-base lg:text-lg font-semibold font-[Poppins]">
        {["Home", "About", "Project", "Certificate", "Contact"].map((item) => (
          <li
            key={item}
            className="relative px-4 py-2 rounded hover:bg-white/10 transition-all duration-300 cursor-pointer group"
          >
            <a href={`#${item.toLowerCase()}`} className="group-hover:underline group-hover:decoration-white group-hover:decoration-2 transition-all duration-300">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>


      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between w-full gap-10 px-6 lg:px-12 py-12 lg:py-24 flex-grow"
      >
        <div className="w-full lg:w-1/2 relative text-center lg:text-left animate-fadeInUp">
          <div className="relative z-10">
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight text-white font-[Poppins]">
              Hi, I'm <span className="text-[#003135]">Jumel Ivan</span>
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl text-white mb-8 font-semibold font-[Poppins]">
              Front-End Web Developer and IT Technical Support
            </h3>
            <p className="text-white/80 mb-10 text-xl sm:text-2xl lg:text-3xl font-[Poppins] text-justify max-w-xl lg:max-w-2xl lg:pr-4">
              I design and develop modern, responsive websites with a focus on
              performance, aesthetics, and user experience. I also build custom
              computers and provide expert troubleshooting services to ensure
              systems run smoothly and efficiently.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
             <button className="bg-[#003135] text-white px-10 py-5 rounded-full hover:bg-[#024950] transition-transform duration-200 hover:-translate-y-1 shadow-md">
            <a href="#about">View Profile</a>
          </button>
              <button className="border border-white text-white px-10 py-5 rounded-full hover:bg-white hover:text-[#0FA4AF] transition-transform duration-200 hover:-translate-y-1 shadow-md">
               <a href="#contact">Hire Me</a>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col items-center animate-fadeInUp delay-150">
         <img
            src={meImage} // Use the imported image
            alt="Profile"
            className="rounded-2xl shadow-xl w-full max-w-sm lg:max-w-lg h-auto object-cover"
          />
          <p className="text-white italic mt-6 text-center text-lg sm:text-xl">
            "I bring designs to life
            <span className="text-[#003135]"> — one pixel at a time</span>"
          </p>
          <p className="text-sm text-white mt-4 flex items-center gap-3">
            Follow me on:
            <a
              href="https://github.com/jmlivn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#003135] transition-colors duration-200"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jumel-ivan-peli%C3%B1o-2b9000362/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#003135] transition-colors duration-200"
            >
              <FaLinkedin size={20} />
            </a>
          </p>
        </div>
      </section>

{/* About Section */}

<section id="about" className="min-h-screen bg-gradient-to-b from-[#024950] to-[#0FA4AF] px-6 lg:px-20 py-28 text-white font-[Poppins]">
  <div className="max-w-[1600px] mx-auto">
    {/* Modern Left-Aligned Header */}
    <div className="mb-20">
      <h2 className="text-7xl font-extrabold leading-tight text-white drop-shadow-lg">
        Get to <span className="text-[#AFDDE5]">Know Me</span>
      </h2>
      <p className="mt-4 text-lg text-white/80 max-w-xl">
        Learn more about who I am, the skills I bring to the table, and my journey as a developer and tech enthusiast.
      </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
      {/* Box 1 */}
      <div
        onClick={() => handleBoxClick(0)}
        className="bg-white text-black rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[#AFDDE5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="text-center mb-6">
          <svg className="mx-auto w-12 h-12 text-[#024950] group-hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M5.121 17.804A9.936 9.936 0 0112 15c2.137 0 4.114.672 5.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
            <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-center mb-4 group-hover:text-[#024950] transition-colors">
          Who I Am
        </h3>
        <p className="text-lg text-justify leading-relaxed group-hover:text-[#024950] transition-colors duration-300">
          I'm a dedicated front-end web developer passionate about creating responsive and visually appealing user interfaces. With a strong background in IT technical support, I bring both creative and practical solutions to digital challenges. I hold a Bachelor's degree in Information Technology from Holy Cross of Davao College.
        </p>
      </div>

      {/* Box 2 */}
      <div
        onClick={() => handleBoxClick(1)}
        className="bg-white text-black rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[#AFDDE5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="text-center mb-6">
          <svg className="mx-auto w-12 h-12 text-[#024950] group-hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-center mb-4 group-hover:text-[#024950] transition-colors">
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 gap-4 text-center font-semibold group-hover:text-[#024950] transition-colors">
          {[
            "HTML5", "CSS3", "JavaScript", "React.js",
            "Tailwind CSS", "Git & GitHub", "Node.js", "Figma",
            "PHP", "Laravel", "CodeIgniter", "C#"
          ].map((item, idx) => (
            <span key={idx} className="text-lg">{item}</span>
          ))}
        </div>
      </div>

      {/* Box 3 */}
      <div
        onClick={() => handleBoxClick(2)}
        className="bg-white text-black rounded-3xl p-10 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-[#AFDDE5]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="text-center mb-6">
          <svg className="mx-auto w-12 h-12 text-[#024950] group-hover:animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path d="M8.25 6.75h7.5M9 12h6m-7.5 5.25h7.5M3 6.75h.008v.008H3V6.75zM3 12h.008v.008H3V12zM3 17.25h.008v.008H3v-.008zM21 6.75h.008v.008H21V6.75zM21 12h.008v.008H21V12zM21 17.25h.008v.008H21v-.008z" />
          </svg>
        </div>
        <h3 className="text-3xl font-bold text-center mb-4 group-hover:text-[#024950] transition-colors">
          Experience
        </h3>
        <ul className="space-y-4 text-lg list-disc pl-6 pr-2 text-justify group-hover:text-[#024950] transition-colors">
          <li><strong>Associate Theft Investigator</strong> – Panoptyc (2025–Present): Investigate theft and ensure quality performance.</li>
          <li><strong>Full Stack Intern</strong> – EonBotz Technology (Feb–May 2025): Built responsive web apps.</li>
          <li><strong>Custom PC Builder</strong> – Self-Employed: Crafted high-performance systems for creators and gamers.</li>
        </ul>
      </div>
    </div>
  </div>
</section>



{/* Projects */}
<section id="project" className="min-h-screen bg-gradient-to-b from-white to-[#e6f8f9] px-6 lg:px-20 py-28 text-[#003135] font-[Poppins]">
  <div className="max-w-[1600px] mx-auto">
    {/* Modern Left-Aligned Header */}
    <div className="mb-20">
      <h2 className="text-7xl font-extrabold leading-tight">
        Explore <span className="text-[#0FA4AF]">My Projects</span>
      </h2>
      <p className="mt-4 text-lg text-[#003135]/80 max-w-xl">
        A showcase of my most recent work — combining creativity, code, and real-world problem-solving.
      </p>
    </div>

    {/* Projects Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-20">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          layout
          onClick={() => handleBoxClick(index)}
          className="bg-[#0FA4AF] text-white shadow-xl cursor-pointer hover:scale-105 transition-transform duration-300 hover:shadow-2xl relative overflow-hidden aspect-square w-full"
          style={{
            borderRadius: '1.5rem',
            padding: '3rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
            <p className="text-white/90 text-base mb-6">
              {project.description.slice(0, 100)}...
            </p>
          </div>
          <div className="text-sm italic">Click to view details</div>

          {/* Expanded Details */}
          <AnimatePresence>
            {activeBox === index && (
              <motion.div
                key={`details-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 z-20 bg-[#003135] bg-opacity-95 text-white p-8 overflow-y-auto rounded-3xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <h4 className="text-2xl font-bold">{project.title}</h4>
                  <button
                    className="text-white hover:text-[#0FA4AF] font-bold text-xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveBox(null);
                    }}
                  >
                    ✕
                  </button>
                </div>
                <p className="mb-6 text-lg">{project.description}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {(project.images || project.image || []).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} ${i + 1}`}
                      className="object-cover w-full max-h-[300px] shadow-lg rounded-xl"
                    />
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  </div>
</section>


<section id="certificate" className="min-h-screen bg-gradient-to-b from-[#024950] to-[#0FA4AF] px-6 lg:px-20 py-28 text-white font-[Poppins]">
  <div className="max-w-[1600px] mx-auto">
    {/* Modern Left-Aligned Header */}
    <div className="mb-20">
      <h2 className="text-7xl font-extrabold leading-tight">
        My <span className="text-[#AFDDE5]">Certificates</span>
      </h2>
      <p className="mt-4 text-lg text-white/80 max-w-xl">
        A timeline of the certifications I’ve earned that mark my growth in web development and tech.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative border-l-4 border-[#AFDDE5] ml-4 lg:ml-12">
      {[ 
        {
          title: "NFT Domains: The Future of Web3 Identity",
          issuer: "BitDegree",
          date: "June 2025",
          imageSrc: NFT_DOMAIN,  // Use imported image variable here
        },
        {
          title: "Solid Foundation of HTML, CSS and JavaScript",
          issuer: "BitDegree",
          date: "June 2025",
          imageSrc: HTML_CERT,  // Use imported image variable here
        },
        {
          title: "OJT Certificate",
          issuer: "EonBotz Technology",
          date: "May 2025",
          imageSrc: OJT_CERT,  // Use imported image variable here
        },
        {
          title: "Capstone Writing 2",
          issuer: "Holy Cross of Davao College",
          date: "August 2024",
          imageSrc: CAPSTONE2,  // Use imported image variable here
        },
        {
          title: "Capstone Writing 1",
          issuer: "Holy Cross of Davao College",
          date: "June 2024",
          imageSrc: CAPSTONE1,  // Use imported image variable here
        },
        {
          title: "MCITS 2024",
          issuer: "PSITE",
          date: "May 2024",
          imageSrc: MCITS2024,  // Use imported image variable here
        },
        {
          title: "MCITS 2023",
          issuer: "PSITE",
          date: "May 2023",
          imageSrc: MCITS2023,  // Use imported image variable here
        }
      ].map((cert, idx) => (
        <div key={idx} className="mb-16 relative flex flex-col lg:flex-row items-center lg:items-start">
          {/* Timeline Dot */}
          <div className="absolute left-[-10px] top-2 w-6 h-6 bg-[#AFDDE5] border-4 border-white rounded-full shadow-md"></div>

          {/* Certificate Content */}
          <div className="pl-6 text-left lg:w-2/3">
            <h3 className="text-2xl font-semibold text-[#AFDDE5]">{cert.title}</h3>
            <p className="text-white/70 italic mt-2">{cert.issuer} &mdash; <span className="text-sm">{cert.date}</span></p>
          </div>

          {/* Image Display */}
          <div 
            className="mt-4 lg:mt-0 lg:ml-6 w-48 h-auto object-cover rounded-lg shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => openModal(cert.imageSrc)}
          >
            <img 
              src={cert.imageSrc}  // Use the imported image variable here
              alt={`Certificate for ${cert.title}`} 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Modal */}
  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={closeModal}>
      <div className="relative bg-white rounded-lg p-6 max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
        {/* Close Icon */}
        <button 
          className="absolute top-2 right-2 text-3xl text-[#024950] font-bold bg-white rounded-full hover:bg-[#AFDDE5] p-1"
          onClick={closeModal}
        >
          X
        </button>
        <img src={selectedImage} alt="Selected Certificate" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  )}
</section>


<section id="contact" className="w-full py-16 bg-gradient-to-r from-[#f0f4f7] to-[#e2ebf0] px-6 lg:px-20">
  <div className="max-w-[1600px] mx-auto text-left">
    {/* Header */}
    <h2 className="text-7xl font-extrabold leading-tight text-[#003135] mb-12 font-[Poppins]">
      Contact <span className="text-[#0fa4af]">Me</span>
    </h2>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Left Column: Contact Details */}
      <div className="space-y-8">
        {/* Email */}
        <div className="flex items-center space-x-4 text-lg text-[#003135]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0fa4af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12l-8-5-8 5V6l8 5 8-5v6z"></path>
          </svg>
          <p>Email: <a href="mailto:jumelivan2@gmail.com" className="font-semibold text-[#0fa4af]">jumelivan2@gmail.com</a></p>
        </div>

        {/* Phone */}
        <div className="flex items-center space-x-4 text-lg text-[#003135]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0fa4af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h13a3 3 0 0 1 3 3v6z"></path>
          </svg>
          <p>Phone: <span className="font-semibold text-[#0fa4af]">09518246914</span></p>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center space-x-4 text-lg text-[#003135]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0fa4af]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.452 20.452H3.548c-.85 0-1.548-.698-1.548-1.548V5.548c0-.85.698-1.548 1.548-1.548h16.904c.85 0 1.548.698 1.548 1.548v13.356c0 .85-.698 1.548-1.548 1.548zm-11.62-8.676V9.503H7.706v2.273h1.126v5.065h2.273V13.05h1.705zM5.548 7.706a1.626 1.626 0 1 0 0-3.251 1.626 1.626 0 0 0 0 3.251zM20.452 16.776h-4.135v-3.031c0-1.74-.91-2.669-2.467-2.669-1.157 0-1.836.792-2.137 1.464-.11.264-.137.627-.137.996v3.22h-2.273v-5.065h2.273v2.273h1.472c-.032-.547-.076-.96-.076-1.485z" />
          </svg>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/jumel-ivan-peli%C3%B1o-2b9000362/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#0fa4af]">jumel-ivan-peliño</a></p>
        </div>
      </div>

      {/* Right Column: Sticky */}
      <div className="sticky top-16 flex flex-col space-y-4">
        <h3 className="text-2xl font-semibold text-[#003135]">Let's Connect!</h3>
        <p className="text-lg text-[#003135]">Feel free to reach out to me for any inquiries or collaborations!</p>
        <a href="#contact" className="text-center inline-block py-3 px-8 bg-[#0fa4af] text-white rounded-full text-lg hover:bg-[#003135] transition-colors duration-300">
          Contact Now
        </a>
      </div>
    </div>
  </div>
</section>




    </div>
  );
};

export default App;

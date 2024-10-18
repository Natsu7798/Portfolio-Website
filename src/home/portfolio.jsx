import React, { useState, useEffect } from 'react';
import Navbar from '../Reusable/navbar'; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import dooitImage from '../Assets/DOOITPorto.png';
import TemplateCart from '../Reusable/projectsTemplate';
import JCCImage from '../Assets/JCCLogo.png';
import InputField from '../Reusable/inputField';
import MessageField from '../Reusable/messageField';
import PlanEaseImage from '../Assets/PlanEaseLogo.png';
import KerjaSetaraImage from '../Assets/KerjaSetaraLogo.png';
import DownloadButton from '../Reusable/download';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from '../Reusable/socialMediaCard'; 


function HomePage() {
  

  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });

    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const projectsSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');

      const homeTop = homeSection.getBoundingClientRect().top;
      const projectsTop = projectsSection.getBoundingClientRect().top;
      const contactTop = contactSection.getBoundingClientRect().top;

      const threshold = window.innerHeight / 2;

      if (homeTop >= -threshold && homeTop < threshold) {
        setActiveSection('home');
      } else if (projectsTop >= -threshold && projectsTop < threshold) {
        setActiveSection('projects');
      } else if (contactTop >= -threshold && contactTop < threshold) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <div className="allPage-wrapper flex flex-col space-y-40">
        {/* Home Section */}
        <section id="home" className="home-wrapper flex flex-row pr-48 pt-32 items-end">
          <div className="containerText ml-20 justify-content-center w-2/3">
            <h1 className="text-1.5xl text-abu">Undergraduate Computer Science Student</h1>
            <h2 className="text-6xl text-abu-bold pt-3 pl-0 max-w-min whitespace-nowrap overflow-hidden border-r-4 border-black animate-typing">
              Ferdi Karjadiputra
            </h2>
            <p className="pt-4 w-96 text-hitamMuda">
              A full-fledged computer science student ready to apply my academic knowledge to future projects in the tech industry. I aim to expand my skills in software development, problem-solving, and teamwork.
            </p>
          </div>
          <div className="animation w-1/3 content-center">
            <DotLottieReact
              src="https://lottie.host/0663014e-cc12-4d54-bf21-876b14fa38e6/hF8f9TsyjA.json"
              loop
              autoplay
              style={{ width: 340, height: 340 }}
            />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-page min-h-screen pt-24">
          <div className="header-cart-wrapper flex flex-col space-y-32">
            <div className="header-container">
              <div data-aos="flip-up">
                <div className="projectContainer mt-16 flex justify-center ">
                  <h1 className="text-5xl text-hitamMuda">My Projects</h1>
                </div>
              </div>
            </div>
            <div className="bigger-cart-wrapper flex-col space-y-40">
              {/* Project Templates */}
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="big-wrapper1">
                  <TemplateCart
                    picture={dooitImage}
                    description="DOOIT: An engaging online platform for accessible financial education and learning."
                    languages={["React", "HTML", "CSS"]}
                    size="w-68 h-68"
                    href={"/DOOITdetails"}
                  />
                </div>
              </div>
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="big-wrapper2">
                  <TemplateCart
                    picture={JCCImage}
                    description="Jockeys Conference Center: Website for renting great venues suitable for professional gatherings and majestic events."
                    languages={["HTML", "CSS", "JS"]}
                    size="w-48 h-48"
                    href={"/JccDetails"}
                  />
                </div>
              </div>
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="big-wrapper3">
                  <TemplateCart
                    picture={PlanEaseImage}
                    description="PlanEase: A web app used to streamline education with intelligent, automated learning task management solutions."
                    languages={["React", "TypeScript", "Laravel"]}
                    size="w-68 h-24"
                    href={"/PlanEaseDetails"}
                  />
                </div>
              </div>
              <div data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                <div className="big-wrapper4">
                  <TemplateCart
                    picture={KerjaSetaraImage}
                    description="Kerja Setara: Web-based employment marketplace specializing in disability-inclusive hiring solutions."
                    languages={["HTML", "CSS", "JS", "Laravel"]}
                    size="w-68 h-24"
                    href={"/KerjaSetaraDetails"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section id="contact" className="page-wrapper flex flex-col space-y-10 justify-center items-center min-h-screen py-16">
          <div className="contact-box-wrapper flex flex-col items-center mt-12 space-y-4 justify-center">
            <h1 className="text-gray-800 font-bold text-5xl">Get in Touch</h1>
            <h2 className="text-gray-800 font-thin text-2xl">I'd love to hear from you. Let's connect!</h2>
          </div>
          <div className="inputField-wrapper flex flex-col items-center shadow-lg rounded-lg w-1/3 space-y-9 p-12">
            <InputField boxTitle="Name" />
            <InputField boxTitle="Email" />
            <MessageField captionTitle="Message" />
            <button className="bg-unguBiasa text-white p-2.5 rounded-lg font-medium w-96">Send Message</button>
            <DownloadButton />
            <div className="contact-container flex flex-col justify-center items-center rounded-lg p-8 bg-putihAbu shadow-lg space-y-6">
              <h1 className="text-xl text-gray font-semibold ">Contact Me !</h1>
              <Card /> 
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;

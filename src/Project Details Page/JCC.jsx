import React from 'react';
import JCCHome from '../Assets/JCCHome.png';
import JCCUpcoming from '../Assets/JCCUpcoming.png';
import JCCEvent from '../Assets/JCCEvent.png';
import JCCPriceList from '../Assets/JCCPriceList.png';
import JCCAboutUs from '../Assets/JCCAboutUs.png';
import DetailsPage from "../Reusable/pdetails";

function JccDetails() {
    const JCCTitle = "JCC: Elevate Your Events, Amplify Your Impact"
    const JCCDesc = "Discover JCC, your premier destination for impactful gatherings. Explore our dynamic event schedule, browse our tailored conference packages, and witness our track record of success. From state-of-the-art facilities to seamless event management, we've got you covered. Connect with our dedicated team and stay updated through our social channels. At JCC, we transform your vision into unforgettable experiences."
    const JCCLanguages = ["HTML", "CSS", "JS"];
    const JCCPages = [JCCHome, JCCUpcoming, JCCEvent, JCCPriceList, JCCAboutUs]

    return (
      <>  
        <DetailsPage 
            title={JCCTitle}
            description={JCCDesc}
            languages={JCCLanguages}
            images={JCCPages}
        />
      </>
    );
  }
  
  export default JccDetails;
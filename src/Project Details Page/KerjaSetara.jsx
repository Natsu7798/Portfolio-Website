import React from 'react';
import DetailsPage from "../Reusable/pdetails";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function KerjaSetaraDetails() {
    const KerjaSetaraTitle = "Kerja Setara: Empowering Abilities, Connecting Careers"
    const KerjaSetaraDesc = "The inclusive job platform that bridges talent with opportunity, regardless of ability. Our accessibility-focused system matches your unique skills and requirements with disability-friendly employers. Track your job search progress with personalized analytics, helping you identify ideal career paths and opportunities. Experience seamless job hunting that adapts to your needs, all in one accessible web app at KerjaSetara.com. Unlock your career potential with Kerja Setara."
    const KerjaSetaraLanguages = ["HTML", "CSS", "JS", "Laravel"];
    
   
    const KerjaSetaraTemp = [
        <DotLottieReact
          key="1"
          src="https://lottie.host/d9326023-04f9-4a4c-9caf-593364cba477/ZHXzXGCeB5.json"
          loop
          autoplay
          style={{ width: 340, height: 340 }}
        />
    ];

    return (
      <>  
        <DetailsPage 
            title={KerjaSetaraTitle}
            description={KerjaSetaraDesc}
            languages={KerjaSetaraLanguages}
            images={KerjaSetaraTemp} 
        />
      </>
    );
}

export default KerjaSetaraDetails;

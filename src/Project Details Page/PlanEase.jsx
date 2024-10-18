import React from 'react';
import DetailsPage from "../Reusable/pdetails";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function PlanEaseDetails() {
    const PlanEaseTitle = "Plan Ease: Organize Smarter, Achieve More"
    const PlanEaseDesc = "the revolutionary task manager that adapts to your unique work style. Our AI-powered system learns from your behavior, intelligently organizing your tasks for maximum efficiency. Track your productivity with insightful analytics, helping you identify peak performance times and areas for improvement. Experience seamless task management that evolves with you, all in one intuitive web app at Plan-ease.vercel.app. Elevate your productivity today with PlanEase."
    const PlanEaseLanguages = ["React", "HTML", "CSS", "JS", "FireBase"];
    const PlanEasePages = []

    const PlanEaseTemp = [
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
            title={PlanEaseTitle}
            description={PlanEaseDesc}
            languages={PlanEaseLanguages}
            images={PlanEaseTemp}
        />
      </>
    );
  }
  
  export default PlanEaseDetails;
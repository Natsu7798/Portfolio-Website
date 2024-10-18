import React from 'react';
import DOOITHome from '../Assets/DOOITHomePage.png';
import DOOITLibrary from '../Assets/DOOITLibraryPage.png';
import DOOITModules from '../Assets/DOOITModulesPage.png';
import DOOITForum from '../Assets/DOOITForumPage.png';
import DOOITProfile from '../Assets/DOOITProfilePage.png';
import DetailsPage from "../Reusable/pdetails";

function DooitDetails() {
    const DooitTitle = "DOOIT: Financial Education Platform"
    const DooitDesc = "DOOIT is a financial education platform that equips users with essential skills through interactive modules, engaging videos, and a rich library of books. It also features a community forum, enabling users to connect, discuss, and share insights. With its comprehensive resources, DOOIT provides a supportive environment for users to enhance their financial literacy and make informed money management decisions."
    const DooitLanguages = ["React", "HTML", "CSS", "JS", "FireBase"];
    const DooitPages = [DOOITHome, DOOITLibrary, DOOITModules, DOOITForum, DOOITProfile]

    return (
      <>  
        <DetailsPage 
            title={DooitTitle}
            description={DooitDesc}
            languages={DooitLanguages}
            images={DooitPages}
        />
      </>
    );
  }
  
  export default DooitDetails;
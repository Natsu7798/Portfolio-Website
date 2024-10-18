import React, { useState } from "react";
import LanguageCart from "../Reusable/languageTemplate";
import PhotoBox from "../Reusable/photoCard"; 
import MyButton from "../Reusable/button";
import { ChevronDown, ChevronUp } from "lucide-react";

function DetailsPage({ title, description, languages, images }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);

  return (
    <>  
      <div className="detailsPage-wrapper bg-putihAbuMuda flex flex-col space-y-12 min-h-screen">
        <div className="detailsHeader flex flex-col bg-black p-8 space-y-8">
          <div className="header-content-wrapper space-y-4">
            <a href="/" className="text-white text-xl">Back to Projects</a>
            <h1 className="text-5xl text-white">{title}</h1>
          </div>
        </div>
        <div className="body-content-wrapper flex flex-col justify-center items-center space-y-12 w-full">
          <div className="projectOverview bg-white border-2 border-gray rounded-md p-4 w-full space-y-3 max-w-7xl">
            <div className="flex justify-between items-center">
              <h1 className="text-black font-semibold text-3xl">Project Overview</h1>
              <button onClick={() => setDescriptionVisible(!isDescriptionVisible)} className="text-gray-600">
                {isDescriptionVisible ? <ChevronUp /> : <ChevronDown />}
              </button>
            </div>
            {isDescriptionVisible && (
              <p className="text-xl">
                {description}
              </p>
            )}
          </div>

          <div className="languageUsed bg-white border-2 border-gray rounded-md p-4 w-full max-w-7xl space-y-4">
            <h1 className="text-black font-semibold text-3xl">Language Used</h1>
            <div className="flex space-x-4">
              {languages.map((language, index) => (
                <LanguageCart key={index} Language={language} />
              ))}
            </div>
          </div>

          <div className="projectGallery bg-white flex flex-col justify-center items-center border-2 border-gray space-y-12 rounded-md px-4 py-8 w-full max-w-7xl">
            <div className="text-container flex justify-center items-center">
              <h1 className="text-black font-semibold text-3xl">Project Gallery</h1>
            </div>
            <div className="photo-wrapper1 flex flex-col space-y-20">
              {images.map((image, index) => (
                <div key={index}>
                  {/* Check if the image is a string (URL) or JSX element */}
                  {typeof image === "string" ? (
                    <PhotoBox image={image} />
                  ) : (
                    <div className="animation-container flex flex-col items-center space-y-4">
                      {image}
                      <p className="text-gray-500 text-xl font-semibold">Work in Progress</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <MyButton label="Visit Live Project" />
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailsPage;

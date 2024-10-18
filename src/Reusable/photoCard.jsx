import React from "react";

function PhotoBox({ image, altText }) {
  return (
    <>  
      <div className="photo-container">
        <img src={image} alt={altText} className="bg-gray-200 rounded-lg shadow-xl w-full h-auto" />
      </div>
    </>
  );
}

export default PhotoBox;

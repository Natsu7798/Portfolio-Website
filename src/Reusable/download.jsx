import React from "react";

function DownloadButton() {
  return (
    <div className="download-button-wrapper">
      <a
        href="/CV-FerdiKarjadiputra.pdf"
        download="CV-FerdiKarjadiputra.pdf"
        className="bg-black text-white py-2 px-4 rounded-md transition-transform duration-200 ease-in-out hover:scale-110"
      >
        Download CV
      </a>
    </div>
  );
}

export default DownloadButton;

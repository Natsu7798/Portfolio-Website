import React from 'react';
import { Link } from 'react-router-dom';

function MyButton({ label, onClick, href }) {
  const commonClasses = "bg-black text-white py-2 px-4 rounded-md transition-transform duration-200 ease-in-out hover:scale-110";
  const isInternalLink = href && href.startsWith('/');

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (href) {
    return isInternalLink ? (
      <Link to={href} onClick={handleScrollToTop} className={`${commonClasses} inline-block`}>
        {label}
      </Link>
    ) : (
      <a href={href} className={`${commonClasses} inline-block`} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={commonClasses}>
      {label}
    </button>
  );
}

export default MyButton;

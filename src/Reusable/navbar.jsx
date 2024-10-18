import React from 'react';

function Navbar({ activeSection }) {
  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact Me' },
  ];

  return (
    <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-medium text-gray-800">
              Ferdi's Portfolio
            </a>
          </div>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href} className="nav-item">
                <a
                  href={item.href}
                  className={`
                    nav-link px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
                    ${
                      activeSection === item.href.slice(1)
                        ? 'bg-gray-800 text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                    }
                  `}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="border-t border-gray-200" />
    </nav>
  );
}

export default Navbar;
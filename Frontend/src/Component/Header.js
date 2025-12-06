// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';

// const Header = () => {
//   const [shrink, setShrink] = useState(false);
//   const [facilitiesOpen, setFacilitiesOpen] = useState(false);
//   const [serviceOpen, setServiceOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShrink(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <header className={`header ${shrink ? 'shrink' : ''}`}>
//       <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <Link to="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
//           <img
//             src='/image/logo.png'
//             style={{
//               height: '40px',
//               width: '40px',
//               marginRight: '10px',
//               objectFit: 'contain',
//             }}
//           />
//           <h1 className="logo" style={{ margin: 0, fontWeight: 'bold', fontSize: '1.5rem' }}>
//             Micro Automation
//           </h1>
//         </Link>

//         <nav>
//           <ul className="navbar-links">
//             <li><Link to="/" className="navbar-link">Home</Link></li>
//             <li><Link to="/OurProduct" className="navbar-link">Our Products</Link></li>

//             <li
//               className="navbar-link dropdown"
//               onMouseEnter={() => setFacilitiesOpen(true)}
//               onMouseLeave={() => setFacilitiesOpen(false)}
//             >
//               <span className="dropdown-toggle">
//                 Facilities <span className="dropdown-arrow">▼</span>
//               </span>
//               {facilitiesOpen && (
//                 <ul className="dropdown-menu">
//                   <li><Link to="/Infrastructure" className="dropdown-item">Infrastructure</Link></li>
//                   <li><Link to="/MachineryDetails" className="dropdown-item">Machinery Details</Link></li>
//                 </ul>
//               )}
//             </li>

//             <li
//               className="navbar-link dropdown"
//               onMouseEnter={() => setServiceOpen(true)}
//               onMouseLeave={() => setServiceOpen(false)}
//             >
//               <span className="dropdown-toggle">
//                 Services & Quality <span className="dropdown-arrow">▼</span>
//               </span>
//               {serviceOpen && (
//                 <ul className="dropdown-menu">
//                   <li><Link to="/Ourservice" className="dropdown-item">Our Services</Link></li>
//                   <li><Link to="/QualityPolicy" className="dropdown-item">Quality & Policy</Link></li>
//                 </ul>
//               )}
//             </li>

//             <li><Link to="/contactus" className="navbar-link">Contact Us</Link></li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;

// mobile and website view
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const toggleFacilities = () => {
    setFacilitiesOpen(prev => !prev);
    // Close services dropdown when opening facilities
    if (!facilitiesOpen) {
      setServiceOpen(false);
    }
  };
  
  const toggleServices = () => {
    setServiceOpen(prev => !prev);
    // Close facilities dropdown when opening services
    if (!serviceOpen) {
      setFacilitiesOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setFacilitiesOpen(false);
    setServiceOpen(false);
    closeMobileMenu();
  }
  
  // Close dropdowns when mobile menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setFacilitiesOpen(false);
      setServiceOpen(false);
    }
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${shrink ? 'shrink' : ''}`}>
      <div className="container header-container">
        
        {/* Hamburger Menu Icon (Mobile) */}
        <button 
          className="menu-icon" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          type="button"
        >
          <span className={mobileMenuOpen ? "bar open" : "bar"}></span>
          <span className={mobileMenuOpen ? "bar open" : "bar"}></span>
          <span className={mobileMenuOpen ? "bar open" : "bar"}></span>
        </button>

        {/* LOGO AREA - Visible on both Desktop and Mobile Header */}
        <Link to="/" className="logo-container" onClick={handleLinkClick}>
          <img 
            src='/image/logo.png' 
            alt="Micro Automation Logo" 
            className="logo-img" 
          />
          <h1 className="logo-text">Micro Automation</h1>
        </Link>

        {/* OVERLAY BACKDROP */}
        <div 
          className={`nav-backdrop ${mobileMenuOpen ? 'open' : ''}`} 
          onClick={closeMobileMenu}
        ></div>

        {/* NAVIGATION LINKS CONTAINER */}
        <nav className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          
          {/* Sidebar Close Button */}
          <div className="sidebar-header">
             <button 
               className="close-btn" 
               onClick={closeMobileMenu}
               aria-label="Close menu"
               type="button"
             >
               &times;
             </button>
          </div>

          <ul className="navbar-links">
            <li>
              <Link to="/" className="navbar-link" onClick={handleLinkClick}>Home</Link>
            </li>
            <li>
              <Link to="/OurProduct" className="navbar-link" onClick={handleLinkClick}>Our Products</Link>
            </li>

            {/* Facilities Dropdown */}
            <li 
              className={`dropdown-parent ${facilitiesOpen ? 'expanded' : ''}`}
              onMouseEnter={() => window.innerWidth > 768 && setFacilitiesOpen(true)}
              onMouseLeave={() => window.innerWidth > 768 && setFacilitiesOpen(false)}
            >
              <div 
                className="dropdown-toggle-row"
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFacilities();
                  }
                }}
              >
                <span>Facilities</span>
                <span className="arrow">▼</span>
              </div>
              
              <ul className={`dropdown-menu ${facilitiesOpen ? 'show' : ''}`}>
                <li>
                  <Link 
                    to="/Infrastructure" 
                    className="dropdown-item" 
                    onClick={(e) => {
                      setFacilitiesOpen(false);
                      handleLinkClick();
                    }}
                  >
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/MachineryDetails" 
                    className="dropdown-item" 
                    onClick={(e) => {
                      setFacilitiesOpen(false);
                      handleLinkClick();
                    }}
                  >
                    Machinery Details
                  </Link>
                </li>
              </ul>
            </li>

            {/* Services Dropdown */}
            <li 
              className={`dropdown-parent ${serviceOpen ? 'expanded' : ''}`}
              onMouseEnter={() => window.innerWidth > 768 && setServiceOpen(true)}
              onMouseLeave={() => window.innerWidth > 768 && setServiceOpen(false)}
            >
              <div 
                className="dropdown-toggle-row"
                onClick={(e) => {
                  if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleServices();
                  }
                }}
              >
                <span>Services & Quality</span>
                <span className="arrow">▼</span>
              </div>
              
              <ul className={`dropdown-menu ${serviceOpen ? 'show' : ''}`}>
                <li>
                  <Link 
                    to="/Ourservice" 
                    className="dropdown-item" 
                    onClick={(e) => {
                      setServiceOpen(false);
                      handleLinkClick();
                    }}
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/QualityPolicy" 
                    className="dropdown-item" 
                    onClick={(e) => {
                      setServiceOpen(false);
                      handleLinkClick();
                    }}
                  >
                    Quality & Policy
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contactus" className="navbar-link" onClick={handleLinkClick}>Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
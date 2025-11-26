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

//   // === Inline Styles for Better Visibility & Styling ===
//   const styles = {
//     header: {
//       position: 'sticky',
//       top: 0,
//       zIndex: 1000,
//       backgroundColor: '#ffffff',
//       boxShadow: shrink ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
//       borderBottom: shrink ? 'none' : '1px solid rgba(0,0,0,0.05)',
//       transition: 'all 0.3s ease-in-out',
//       padding: shrink ? '10px 0' : '15px 0', // Initial padding increased for visibility
//     },
//     container: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'space-between',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       padding: '0 20px',
//     },
//     logoContainer: {
//       display: 'flex',
//       alignItems: 'center',
//       textDecoration: 'none',
//       color: 'inherit',
//       gap: '15px',
//     },
//     logoImage: {
//       height: shrink ? '45px' : '55px', // Increased Logo Size
//       width: 'auto',
//       objectFit: 'contain',
//       transition: 'all 0.3s ease',
//       filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))', // Makes Logo Pop
//     },
//     logoText: {
//       margin: 0,
//       fontWeight: 800,
//       fontSize: shrink ? '1.4rem' : '1.6rem', // Larger Font Size
//       color: '#1565c0', // Professional Blue
//       letterSpacing: '-0.5px',
//       fontFamily: '"Roboto", sans-serif',
//       transition: 'all 0.3s ease',
//     },
//     navLinks: {
//       display: 'flex',
//       alignItems: 'center',
//       gap: '25px',
//       listStyle: 'none',
//       margin: 0,
//       padding: 0,
//     },
//     contactBtn: {
//       backgroundColor: '#1565c0',
//       color: '#ffffff',
//       padding: '10px 24px',
//       borderRadius: '50px',
//       fontWeight: '600',
//       textDecoration: 'none',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 4px 12px rgba(21, 101, 192, 0.2)',
//     }
//   };

//   return (
//     <header className={`header ${shrink ? 'shrink' : ''}`} style={styles.header}>
//       <div className="container" style={styles.container}>
        
//         {/* Logo Section */}
//         <Link to="/" className="logo-container" style={styles.logoContainer}>
//           <img
//             src='/image/logo.png'
//             alt="Micro Automation Logo"
//             style={styles.logoImage}
//           />
//           <h1 className="logo" style={styles.logoText}>
//             Micro Automation
//           </h1>
//         </Link>

//         {/* Navigation */}
//         <nav>
//           <ul className="navbar-links" style={styles.navLinks}>
//             <li><Link to="/" className="navbar-link">Home</Link></li>
//             <li><Link to="/OurProduct" className="navbar-link">Our Products</Link></li>

//             {/* Facilities Dropdown */}
//             <li
//               className="navbar-link dropdown"
//               onMouseEnter={() => setFacilitiesOpen(true)}
//               onMouseLeave={() => setFacilitiesOpen(false)}
//               style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
//             >
//               <span className="dropdown-toggle" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 500 }}>
//                 Facilities <span className="dropdown-arrow" style={{ fontSize: '0.7rem', marginLeft: '5px', color: '#1565c0' }}>▼</span>
//               </span>
//               {facilitiesOpen && (
//                 <ul className="dropdown-menu" style={{
//                     position: 'absolute',
//                     top: '100%',
//                     left: 0,
//                     backgroundColor: '#fff',
//                     boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
//                     borderRadius: '12px',
//                     padding: '10px 0',
//                     minWidth: '200px',
//                     zIndex: 1000,
//                     border: '1px solid rgba(0,0,0,0.05)'
//                 }}>
//                   <li><Link to="/Infrastructure" className="dropdown-item" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none' }}>Infrastructure</Link></li>
//                   <li><Link to="/MachineryDetails" className="dropdown-item" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none' }}>Machinery Details</Link></li>
//                 </ul>
//               )}
//             </li>

//             {/* Services Dropdown */}
//             <li
//               className="navbar-link dropdown"
//               onMouseEnter={() => setServiceOpen(true)}
//               onMouseLeave={() => setServiceOpen(false)}
//               style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
//             >
//               <span className="dropdown-toggle" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 500 }}>
//                 Services & Quality <span className="dropdown-arrow" style={{ fontSize: '0.7rem', marginLeft: '5px', color: '#1565c0' }}>▼</span>
//               </span>
//               {serviceOpen && (
//                 <ul className="dropdown-menu" style={{
//                     position: 'absolute',
//                     top: '100%',
//                     left: 0,
//                     backgroundColor: '#fff',
//                     boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
//                     borderRadius: '12px',
//                     padding: '10px 0',
//                     minWidth: '200px',
//                     zIndex: 1000,
//                     border: '1px solid rgba(0,0,0,0.05)'
//                 }}>
//                   <li><Link to="/Ourservice" className="dropdown-item" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none' }}>Our Services</Link></li>
//                   <li><Link to="/QualityPolicy" className="dropdown-item" style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none' }}>Quality & Policy</Link></li>
//                 </ul>
//               )}
//             </li>

//             {/* Styled Contact Us Button */}
//             <li>
//                 <Link to="/contactus" className="navbar-link" style={styles.contactBtn}>
//                     Contact Us
//                 </Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [facilitiesOpen, setFacilitiesOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShrink(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // === Inline Styles for Better Visibility & Styling ===
  const styles = {
    header: {
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: '#ffffff',
      boxShadow: shrink ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
      borderBottom: shrink ? 'none' : '1px solid rgba(0,0,0,0.05)',
      transition: 'all 0.3s ease-in-out',
      padding: shrink ? '10px 0' : '15px 0',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 20px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      color: 'inherit',
      gap: '15px',
    },
    logoImage: {
      height: shrink ? '45px' : '55px',
      width: 'auto',
      objectFit: 'contain',
      transition: 'all 0.3s ease',
      filter: 'drop-shadow(0px 2px 4px rgba(0,0,0,0.1))',
    },
    logoText: {
      margin: 0,
      fontWeight: 800,
      fontSize: shrink ? '1.4rem' : '1.6rem',
      color: '#1565c0',
      letterSpacing: '-0.5px',
      fontFamily: '"Roboto", sans-serif',
      transition: 'all 0.3s ease',
    },
    navLinks: {
      display: 'flex',
      alignItems: 'center',
      gap: '25px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    contactBtn: {
      backgroundColor: '#1565c0',
      color: '#ffffff',
      padding: '10px 24px',
      borderRadius: '50px',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 12px rgba(21, 101, 192, 0.2)',
    },
    // ✅ NEW: Compact Dropdown Styles
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      left: 0,
      backgroundColor: '#fff',
      boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
      borderRadius: '8px',
      padding: '5px 0', // Reduced padding
      minWidth: '180px', // Reduced width
      zIndex: 1000,
      border: '1px solid rgba(0,0,0,0.05)',
      overflow: 'hidden'
    },
    dropdownItem: {
      display: 'block',
      padding: '8px 16px', // Reduced item padding
      color: '#333',
      textDecoration: 'none',
      fontSize: '0.9rem', // Smaller font for compact look
      transition: 'background 0.2s',
    }
  };

  return (
    <header className={`header ${shrink ? 'shrink' : ''}`} style={styles.header}>
      <div className="container" style={styles.container}>
        
        {/* Logo Section */}
        <Link to="/" className="logo-container" style={styles.logoContainer}>
          <img
            src='/image/logo.png'
            alt="Micro Automation Logo"
            style={styles.logoImage}
          />
          <h1 className="logo" style={styles.logoText}>
            Micro Automation
          </h1>
        </Link>

        {/* Navigation */}
        <nav>
          <ul className="navbar-links" style={styles.navLinks}>
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/OurProduct" className="navbar-link">Our Products</Link></li>

            {/* Facilities Dropdown */}
            <li
              className="navbar-link dropdown"
              onMouseEnter={() => setFacilitiesOpen(true)}
              onMouseLeave={() => setFacilitiesOpen(false)}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <span className="dropdown-toggle" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 500 }}>
                Facilities <span className="dropdown-arrow" style={{ fontSize: '0.7rem', marginLeft: '5px', color: '#1565c0' }}>▼</span>
              </span>
              {facilitiesOpen && (
                <ul className="dropdown-menu" style={styles.dropdownMenu}>
                  <li>
                    <Link 
                      to="/Infrastructure" 
                      className="dropdown-item" 
                      style={styles.dropdownItem}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      Infrastructure
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/MachineryDetails" 
                      className="dropdown-item" 
                      style={styles.dropdownItem}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      Machinery Details
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Services Dropdown */}
            <li
              className="navbar-link dropdown"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
              style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center' }}
            >
              <span className="dropdown-toggle" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', fontWeight: 500 }}>
                Services & Quality <span className="dropdown-arrow" style={{ fontSize: '0.7rem', marginLeft: '5px', color: '#1565c0' }}>▼</span>
              </span>
              {serviceOpen && (
                <ul className="dropdown-menu" style={styles.dropdownMenu}>
                  <li>
                    <Link 
                      to="/Ourservice" 
                      className="dropdown-item" 
                      style={styles.dropdownItem}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      Our Services
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/QualityPolicy" 
                      className="dropdown-item" 
                      style={styles.dropdownItem}
                      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                      onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      Quality & Policy
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Styled Contact Us Button */}
            <li>
                <Link to="/contactus" className="navbar-link" style={styles.contactBtn}>
                    Contact Us
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
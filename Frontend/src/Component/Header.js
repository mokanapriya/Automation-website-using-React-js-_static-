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

  return (
    <header className={`header ${shrink ? 'shrink' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" className="logo-container" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img
            src='/image/logo.png'
            style={{
              height: '40px',
              width: '40px',
              marginRight: '10px',
              objectFit: 'contain',
            }}
          />
          <h1 className="logo" style={{ margin: 0, fontWeight: 'bold', fontSize: '1.5rem' }}>
            Micro Automation
          </h1>
        </Link>

        <nav>
          <ul className="navbar-links">
            <li><Link to="/" className="navbar-link">Home</Link></li>
            <li><Link to="/OurProduct" className="navbar-link">Our Products</Link></li>

            <li
              className="navbar-link dropdown"
              onMouseEnter={() => setFacilitiesOpen(true)}
              onMouseLeave={() => setFacilitiesOpen(false)}
            >
              <span className="dropdown-toggle">
                Facilities <span className="dropdown-arrow">▼</span>
              </span>
              {facilitiesOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/Infrastructure" className="dropdown-item">Infrastructure</Link></li>
                  <li><Link to="/MachineryDetails" className="dropdown-item">Machinery Details</Link></li>
                </ul>
              )}
            </li>

            <li
              className="navbar-link dropdown"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <span className="dropdown-toggle">
                Services & Quality <span className="dropdown-arrow">▼</span>
              </span>
              {serviceOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/Ourservice" className="dropdown-item">Our Services</Link></li>
                  <li><Link to="/QualityPolicy" className="dropdown-item">Quality & Policy</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/contactus" className="navbar-link">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

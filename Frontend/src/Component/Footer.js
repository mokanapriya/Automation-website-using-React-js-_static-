import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import '../App.css'; // Make sure your styles are updated below

const Footer = () => (
  <footer className="footer-container">
        <div className="footer-content">
          {/* Logo and Mission */}
          <div className="footer-section">
            <h2 className="footer-logo">
              <span className="text-blue-500">Micro</span> <span className="text-blue-300">Automation</span>
            </h2>
            <p className="footer-description">
              To Utilize New Generation Smart Solutions To Achieve Industry Leadership and Operational Excellence.
</p>
</div>
      {/* Contact Info */}
      <div className="footer-section">
        <h4 className="footer-heading">Contact Us</h4>
        <div className="footer-contact-item">
          <MdLocationOn />  No: 7/25, Ramasamy Nagar, Karuparayanpalayam, Mylampatti Post,<br />
                  Coimbatore, Tamil Nadu 641062, INDIA<br />
        </div>
        <div className="footer-contact-item">
          <MdPhone />  9655821758, 9843036020
        </div>
        <div className="footer-contact-item">
          <MdEmail /> 📧 microautomation@aol.in
        </div>
        <div className="footer-contact-item">
          <FaWhatsapp />  9655821758, 9843036020
        </div>
      </div>

      {/* Social Media Links */}
      {/* <div className="footer-section">
        <h4 className="footer-heading">Follow Us</h4>
        <div className="footer-contact-item">
          <FaFacebookF />
        </div>
        <div className="footer-contact-item">
          <FaInstagram />
        </div>
        <div className="footer-contact-item">
          <FaYoutube />
        </div>
      </div> */}
<div className="flex items-center gap-6 mt-2">
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl">
    <FaInstagram />
  </a>
  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl">
    <FaFacebookF />
  </a>
  <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-xl">
    <FaWhatsapp />
  </a>
</div>


{/* link */}
{/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
  <FaFacebookF />
</a> */}

    </div>
  </footer>
);

export default Footer;

// import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
// import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
// import '../App.css'; // Make sure your styles are updated below

// const Footer = () => (
//   <footer className="footer-container">
//         <div className="footer-content">
//           {/* Logo and Mission */}
//           <div className="footer-section">
//             <h2 className="footer-logo">
//               <span className="text-blue-500">Micro</span> <span className="text-blue-300">Automation</span>
//             </h2>
//             <p className="footer-description">
//               To Utilize New Generation Smart Solutions To Achieve Industry Leadership and Operational Excellence.
// </p>
// </div>
//       {/* Contact Info */}
//       <div className="footer-section">
//         <h4 className="footer-heading">Contact Us</h4>
//         <div className="footer-contact-item">
//           <MdLocationOn />  No: 7/25, Ramasamy Nagar, Karuparayanpalayam, Mylampatti Post,<br />
//                   Coimbatore, Tamil Nadu 641062, INDIA<br />
//         </div>
//         <div className="footer-contact-item">
//           <MdPhone />  9655821758, 9843036020
//         </div>
//         <div className="footer-contact-item">
//           <MdEmail /> 📧 microautomation@aol.in
//         </div>
//         <div className="footer-contact-item">
//           <FaWhatsapp />  9655821758, 9843036020
//         </div>
//       </div>

//       {/* Social Media Links */}
//       {/* <div className="footer-section">
//         <h4 className="footer-heading">Follow Us</h4>
//         <div className="footer-contact-item">
//           <FaFacebookF />
//         </div>
//         <div className="footer-contact-item">
//           <FaInstagram />
//         </div>
//         <div className="footer-contact-item">
//           <FaYoutube />
//         </div>
//       </div> */}
// <div className="flex items-center gap-6 mt-2">
//   <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl">
//     <FaInstagram />
//   </a>
//   <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl">
//     <FaFacebookF />
//   </a>
//   <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" className="text-xl">
//     <FaWhatsapp />
//   </a>
// </div>


// {/* link */}
// {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//   <FaFacebookF />
// </a> */}

//     </div>
//   </footer>
// );

// export default Footer;
import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  IconButton, 
  Stack, 
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#0f172a',
        color: '#e2e8f0',
        pt: 8, // Slightly increased padding for larger text breathing room
        pb: 4, 
        fontFamily: '"Roboto", sans-serif',
      }}
    >
      {/* ✅ Container maxWidth="md" keeps it compact but spacious enough for larger text */}
      <Container maxWidth="md">
        <Grid container spacing={5} alignItems="center" justifyContent="center"> 
          
          {/* 1. LEFT: LOGO & CONTENT */}
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              {/* Increased Logo Size */}
              <Typography variant="h4" fontWeight={900} sx={{ letterSpacing: 1, mb: 2 }}>
                <span style={{ color: '#3b82f6' }}>Micro</span>
                <span style={{ color: '#fff' }}>Automation</span>
              </Typography>
              {/* Increased Body Text Size */}
              <Typography variant="body1" sx={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '1rem', maxWidth: { md: '300px' }, mx: { xs: 'auto', md: 0 } }}>
                To utilize new generation smart solutions to achieve industry leadership and operational excellence. 
              </Typography>
            </Box>
          </Grid>

          {/* 2. CENTER: CONTACT DETAILS */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box>
                {/* Increased Header Size */}
                <Typography variant="h6" fontWeight={700} sx={{ color: '#fff', mb: 2, textAlign: { xs: 'center', md: 'left' } }}>
                  Contact Us
                </Typography>
                
                <List disablePadding>
                  <ListItem disableGutters sx={{ py: 0.5, alignItems: 'flex-start', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                        <MdLocationOn size={24} color="#3b82f6" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                            <Typography variant="body1" color="#cbd5e1" fontSize="1rem" lineHeight={1.5}>
                            No: 7/25, Ramasamy Nagar,<br />
                            Mylampatti Post, Coimbatore,<br />
                            Tamil Nadu 641062
                            </Typography>
                        } 
                      />
                  </ListItem>

                  <ListItem disableGutters sx={{ py: 0.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <MdPhone size={22} color="#3b82f6" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                            <Typography variant="body1" color="#cbd5e1" fontSize="1rem">
                            9655821758, 9843036020
                            </Typography>
                        } 
                      />
                  </ListItem>

                  <ListItem disableGutters sx={{ py: 0.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                      <ListItemIcon sx={{ minWidth: 32 }}>
                        <MdEmail size={22} color="#3b82f6" />
                      </ListItemIcon>
                      <ListItemText 
                        primary={
                            <Typography variant="body1" color="#cbd5e1" fontSize="1rem">
                            microautomation@aol.in
                            </Typography>
                        } 
                      />
                  </ListItem>
                </List>
            </Box>
          </Grid>

          {/* 3. RIGHT: FOLLOW US & ICONS */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Increased Header Size */}
            <Typography variant="h6" fontWeight={700} sx={{ color: '#fff', mb: 2 }}>
              Follow Us
            </Typography>

            <Stack direction="row" spacing={2}>
              {[
                { icon: <FaInstagram size={22} />, color: '#E1306C', link: 'https://instagram.com' },
                { icon: <FaFacebookF size={22} />, color: '#1877F2', link: 'https://facebook.com' },
                { icon: <FaWhatsapp size={22} />, color: '#25D366', link: 'https://wa.me/9655821758' }
              ].map((social, index) => (
                <IconButton 
                  key={index}
                  component="a" 
                  href={social.link} 
                  target="_blank" 
                  size="large"
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.05)', 
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.1)',
                    '&:hover': { 
                      bgcolor: social.color, 
                      borderColor: social.color,
                      transform: 'translateY(-3px)',
                    },
                    transition: 'all 0.3s ease',
                    width: 48, // Bigger touch target
                    height: 48,
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* COPYRIGHT ONLY */}
        <Box textAlign="center">
          <Typography variant="body2" color="#64748b" fontSize="0.95rem">
            © {new Date().getFullYear()} Micro Automation. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
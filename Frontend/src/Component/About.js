// import React from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardContent
// } from '@mui/material';
// import { keyframes } from '@emotion/react';
// import styled from '@emotion/styled';

// // Animation for fade-up effect
// const fadeUp = keyframes`
//   from {
//     opacity: 0;
//     transform: translateY(30px);
//   }
//   to {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;

// // Styled card with animation and styling
// const StyledCard = styled(Card)`
//   animation: ${fadeUp} 0.8s ease-out;
//   background: rgba(255, 255, 255, 0.9);
//   backdrop-filter: blur(6px);
//   border-left: 5px solid #fbc02d;
//   padding: 20px;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   border-radius: 12px;

//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
//   }
// `;

// const About = () => {
//   return (
//     <>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           py: 10,
//           px: 3,
//           position: 'relative',
//           overflow: 'hidden',
//           backgroundColor: '#ffffff', // White background
//         }}
//       >
//         <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
//           <Typography variant="h3" fontWeight={700} color="#2c3e50" gutterBottom>
//             Welcome to Micro Automation India Pvt. Ltd.
//           </Typography>
//           <Typography variant="h6" color="text.secondary">
//             ISO 9001:2015 Certified | Founded in 2009 | Based in Coimbatore
//           </Typography>
//         </Container>
//       </Box>

//       {/* Content Section - Also with White Background */}
//       <Box
//         sx={{
//           backgroundColor: '#ffffff', // Changed from patterned to plain white
//         }}
//       >
//         <Container maxWidth="lg" sx={{ py: 8 }}>
//           <Grid container spacing={5}>
//             {/* Company Profile */}
//             <Grid item xs={12}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Company Profile
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Micro Automation is a trusted manufacturer of high-precision CNC machined components
//                     for a wide range of industries including Automobiles, Textiles, Oil & Gas Valves,
//                     Railways, Aerospace, Defense, and Pumps. With a modern infrastructure and strong
//                     technical team, we deliver quality solutions tailored to customer needs.
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Capabilities */}
//             <Grid item xs={12} md={6}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Capabilities
//                   </Typography>
//                   <Typography variant="body2">
//                     • Steel, Titanium, Bronze, Brass<br />
//                     • Stainless & Mild Steel<br />
//                     • Investment, Aluminum, and Steel Castings<br />
//                     • Super Alloys and Non-Ferrous Metals
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Strengths */}
//             <Grid item xs={12} md={6}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Our Strengths
//                   </Typography>
//                   <Typography variant="body2">
//                     ✓ On-time Delivery<br />
//                     ✓ High Product Quality<br />
//                     ✓ Advanced Technology<br />
//                     ✓ Expert Workforce
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Infrastructure */}
//             <Grid item xs={12}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Infrastructure
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     With over 2600 sq. ft. of floor area, our facility houses ACE Turning Centers,
//                     Vertical Machining Centers, and precise inspection tools like VMM and 2D Height
//                     Gauges, ensuring top-tier quality for every component.
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Mission */}
//             <Grid item xs={12} md={6}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Mission
//                   </Typography>
//                   <Typography variant="body2">
//                     • Deliver precise, high-quality machining services<br />
//                     • Foster long-term client relationships<br />
//                     • Embrace innovation & continuous improvement<br />
//                     • Uphold ethical values and sustainability
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Vision */}
//             <Grid item xs={12} md={6}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Vision
//                   </Typography>
//                   <Typography variant="body2">
//                     To be the leading provider of precision machining solutions, known for reliability,
//                     innovation, and excellence.
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Contact */}
//             <Grid item xs={12}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Contact Us
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     No: 7/25, Ramasamy Nagar, Karuparayanpalayam, Mylampatti Post,<br />
//                     Coimbatore, Tamil Nadu 641062, INDIA<br />
//                     📧 microautomation@aol.in<br />
//                     📞 9655821758, 9843036020
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </>
//   );
// };

// export default About;
// import React, { useState } from 'react';
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Dialog,
//   DialogTitle,
//   DialogContent,
// } from '@mui/material';
// import { keyframes } from '@emotion/react';
// import styled from '@emotion/styled';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// // Animation
// const fadeUp = keyframes`
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const StyledCard = styled(Card)`
//   animation: ${fadeUp} 0.8s ease-out;
//   background: rgba(255, 255, 255, 0.9);
//   backdrop-filter: blur(6px);
//   border-left: 5px solid #fbc02d;
//   padding: 20px;
//   border-radius: 12px;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
//   }
// `;

// const certificates = [
//   {
//     title: 'GST CERTIFICATE',
//     file: '/image/GST Certificate.pdf',
//   },
//   {
//     title: 'Udyam CERTIFICATE',
//     file: '/image/Print _ Udyam.pdf',
//   },
//    {
//     title: 'ISO CERTIFICATE',
//     file: '/image/ISO CERTIFICATE.pdf',
//   },
// ];

// const About = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedPDF, setSelectedPDF] = useState(null);

//   const handleOpen = (pdf) => {
//     setSelectedPDF(pdf);
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setSelectedPDF(null);
//   };

//   return (
//     <>
//       {/* Header Section */}
//       {/* <Box sx={{ py: 4, px: 3, bgcolor: '#fff', borderBottom: '1px solid #eee' }}>
//         <Container maxWidth="lg">
//           <Grid container spacing={2} alignItems="center">
//             <Grid item>
//               <img
//                 src="/image/logo.png"
//                 alt="Logo"
//                 style={{ height: 80, width: 'auto' }} // Logo slightly bigger
//               />
//             </Grid>
//             <Grid item xs>
//               <Typography variant="h4" fontWeight={700} color="#2c3e50" align='center'>
//                 Welcome to Micro Automation India Pvt. Ltd.
//               </Typography>
//               <Typography variant="subtitle1" color="text.secondary" mt={0.5}>
//                 ISO 9001:2015 Certified | Founded in 2009 | Based in Coimbatore
//               </Typography>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box> */}
//       <Box
//   sx={{
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: '50vh', // Adjust height as needed
//     textAlign: 'center',
//     px: 2,
//   }}
// >
//   <Grid container spacing={2} alignItems="center" justifyContent="center">
//     <Grid item>
//       <img
//         src="/image/logo.png"
//         alt="Logo"
//         style={{ height: 80, width: 'auto' }}
//       />
//     </Grid>
//     <Grid item xs={12} md={8}>
//       <Typography variant="h4" fontWeight={700} color="#2c3e50">
//         Welcome to Micro Automation India Pvt. Ltd.
//       </Typography>
//       <Typography variant="subtitle1" color="text.secondary" mt={0.5}>
//         ISO 9001:2015 Certified | Founded in 2009 | Based in Coimbatore
//       </Typography>
//     </Grid>
//   </Grid>
// </Box>


//       {/* Main Content */}
//       <Box sx={{ bgcolor: '#ffffff' }}>
//         <Container maxWidth="lg" sx={{ py: 8 }}>
//           <Grid container spacing={5}>
//             {/* Company Profile */}
//             <Grid item xs={12}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Company Profile
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Micro Automation is a trusted manufacturer of high-precision CNC machined components
//                     for industries like Automobiles, Textiles, Oil & Gas Valves, Railways, Aerospace,
//                     Defense, and Pumps. With a modern infrastructure and a strong technical team, we deliver
//                     quality solutions tailored to customer needs.
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Certificates */}
//             <Grid item xs={12}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Certificates
//                   </Typography>
//                   <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
//                     {certificates.map((cert) => (
//                       <Box
//                         key={cert.title}
//                         sx={{
//                           textAlign: 'center',
//                           cursor: 'pointer',
//                           transition: 'transform 0.2s',
//                           '&:hover': { transform: 'scale(1.05)' },
//                         }}
//                         onClick={() => handleOpen(cert)}
//                       >
//                         <PictureAsPdfIcon color="error" sx={{ fontSize: 48 }} />
//                         <Typography variant="body2" mt={1}>
//                           {cert.title}
//                         </Typography>
//                       </Box>
//                     ))}
//                   </Box>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Capabilities */}
//             <Grid item xs={12} md={6}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Capabilities
//                   </Typography>
//                   <Typography variant="body2">
//                     • Steel, Titanium, Bronze, Brass<br />
//                     • Stainless & Mild Steel<br />
//                     • Investment, Aluminum, and Steel Castings<br />
//                     • Super Alloys and Non-Ferrous Metals
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Strengths */}
//             <Grid item xs={12} md={6}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Our Strengths
//                   </Typography>
//                   <Typography variant="body2">
//                     ✓ On-time Delivery<br />
//                     ✓ High Product Quality<br />
//                     ✓ Advanced Technology<br />
//                     ✓ Expert Workforce
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Infrastructure */}
//             <Grid item xs={12}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Infrastructure
//                   </Typography>
//                   <Typography variant="body1" color="text.secondary">
//                     Our 2600 sq. ft. facility is equipped with ACE Turning Centers, VMCs, and precise
//                     inspection tools like VMM and 2D Height Gauges, ensuring top-tier component quality.
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Mission */}
//             <Grid item xs={12} md={6}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Mission
//                   </Typography>
//                   <Typography variant="body2">
//                     • Deliver precise, high-quality machining services<br />
//                     • Foster long-term client relationships<br />
//                     • Embrace innovation & continuous improvement<br />
//                     • Uphold ethical values and sustainability
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Vision */}
//             <Grid item xs={12} md={6}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Vision
//                   </Typography>
//                   <Typography variant="body2">
//                     To be the leading provider of precision machining solutions, known for reliability,
//                     innovation, and excellence.
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>

//             {/* Contact */}
//             <Grid item xs={12}>
//               <StyledCard>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={700} gutterBottom>
//                     Contact Us
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     No: 7/25, Ramasamy Nagar, Karuparayanpalayam, Mylampatti Post,<br />
//                     Coimbatore, Tamil Nadu 641062, INDIA<br />
//                     📧 microautomation@aol.in<br />
//                     📞 9655821758, 9843036020
//                   </Typography>
//                 </CardContent>
//               </StyledCard>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Certificate PDF Dialog */}
//       <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
//         <DialogTitle>{selectedPDF?.title}</DialogTitle>
//         <DialogContent dividers>
//           {selectedPDF && (
//             <iframe
//               src={selectedPDF.file}
//               width="100%"
//               height="600px"
//               title={selectedPDF.title}
//               style={{ border: 'none' }}
//             />
//           )}
//         </DialogContent>
//       </Dialog>
//     </>
//   );
// };

// export default About;
// Make sure AOS is initialized in your root (if used)
// import AOS from 'aos';
// useEffect(() => { AOS.init({ duration: 800 }); }, []);

import React, { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

// === Animation Keyframe ===
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

// === Styled Components ===
const StyledCard = styled(Card)`
  animation: ${fadeUp} 0.9s ease-out;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  border-left: 5px solid #fbc02d;
  padding: 24px;
  border-radius: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  }
`;

const HeaderBox = styled(Box)`
  background: linear-gradient(135deg, #e0f7fa, #f1f8e9);
  padding: 48px 24px;
  text-align: center;
`;

// === Data ===
const certificates = [
  { title: 'GST CERTIFICATE', file: '/image/GST Certificate.pdf' },
  { title: 'Udyam CERTIFICATE', file: '/image/Print _ Udyam.pdf' },
  { title: 'ISO CERTIFICATE', file: '/image/ISO CERTIFICATE.pdf' },
];

// === Component ===
const About = () => {
  const [open, setOpen] = useState(false);
  const [selectedPDF, setSelectedPDF] = useState(null);

  const handleOpen = (pdf) => {
    setSelectedPDF(pdf);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedPDF(null);
  };

  return (
    <>
      {/* Header */}
      <HeaderBox>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
            <img src="/image/logo.png" alt="Logo" style={{ height: 80, width: 'auto' }} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" fontWeight={800} color="#2c3e50" gutterBottom>
              Welcome to Micro Automation India Pvt. Ltd.
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              ISO 9001:2015 Certified | Founded in 2009 | Based in Coimbatore
            </Typography>
          </Grid>
        </Grid>
      </HeaderBox>

      {/* Main Section */}
      <Box sx={{ bgcolor: '#fafafa' }}>
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Grid container spacing={5}>
            {/* Company Profile */}
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Company Profile
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Micro Automation is a trusted manufacturer of high-precision CNC machined components
                    for industries like Automobiles, Textiles, Oil & Gas Valves, Railways, Aerospace,
                    Defense, and Pumps. With a modern infrastructure and a strong technical team, we deliver
                    quality solutions tailored to customer needs.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Certificates */}
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Certificates
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {certificates.map((cert) => (
                      <Box
                        key={cert.title}
                        sx={{
                          textAlign: 'center',
                          cursor: 'pointer',
                          '&:hover': { transform: 'scale(1.08)', transition: '0.3s' },
                        }}
                        onClick={() => handleOpen(cert)}
                      >
                        <PictureAsPdfIcon color="error" sx={{ fontSize: 50 }} />
                        <Typography variant="body2" mt={1}>
                          {cert.title}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Capabilities */}
            <Grid item xs={12} md={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Capabilities
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Steel, Titanium, Bronze, Brass<br />
                    • Stainless & Mild Steel<br />
                    • Investment, Aluminum, and Steel Castings<br />
                    • Super Alloys and Non-Ferrous Metals
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Strengths */}
            <Grid item xs={12} md={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Our Strengths
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ✓ On-time Delivery<br />
                    ✓ High Product Quality<br />
                    ✓ Advanced Technology<br />
                    ✓ Expert Workforce
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Infrastructure */}
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Infrastructure
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Our 2600 sq. ft. facility is equipped with ACE Turning Centers, VMCs, and precise
                    inspection tools like VMM and 2D Height Gauges, ensuring top-tier component quality.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Mission */}
            <Grid item xs={12} md={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Mission
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    • Deliver precise, high-quality machining services<br />
                    • Foster long-term client relationships<br />
                    • Embrace innovation & continuous improvement<br />
                    • Uphold ethical values and sustainability
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Vision */}
            <Grid item xs={12} md={6}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Vision
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    To be the leading provider of precision machining solutions, known for reliability,
                    innovation, and excellence.
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>

            {/* Contact */}
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    Contact Us
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    No: 7/25, Ramasamy Nagar, Karuparayanpalayam, Mylampatti Post,<br />
                    Coimbatore, Tamil Nadu 641062, INDIA<br />
                    📧 microautomation@aol.in<br />
                    📞 9655821758, 9843036020
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* PDF Dialog */}
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>{selectedPDF?.title}</DialogTitle>
        <DialogContent dividers>
          {selectedPDF && (
            <iframe
              src={selectedPDF.file}
              width="100%"
              height="600px"
              title={selectedPDF.title}
              style={{ border: 'none' }}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default About;

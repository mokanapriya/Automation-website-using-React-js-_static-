

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

// // === Animation Keyframe ===
// const fadeUp = keyframes`
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // === Styled Components ===
// const StyledCard = styled(Card)`
//   animation: ${fadeUp} 0.9s ease-out;
//   background: rgba(255, 255, 255, 0.95);
//   backdrop-filter: blur(4px);
//   border-left: 5px solid #fbc02d;
//   padding: 24px;
//   border-radius: 16px;
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
//   }
// `;

// const HeaderBox = styled(Box)`
//   background: linear-gradient(135deg, #e0f7fa, #f1f8e9);
//   padding: 48px 24px;
//   text-align: center;
// `;

// // === Data ===
// const certificates = [
//   { title: 'GST CERTIFICATE', file: '/image/GST Certificate.pdf' },
//   { title: 'Udyam CERTIFICATE', file: '/image/Print _ Udyam.pdf' },
//   { title: 'ISO CERTIFICATE', file: '/image/ISO CERTIFICATE.pdf' },
// ];

// // === Component ===
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
//       {/* Header */}
//       <HeaderBox>
//         <Grid container spacing={2} justifyContent="center" alignItems="center">
//           <Grid item>
//             <img src="/image/logo.png" alt="Logo" style={{ height: 80, width: 'auto' }} />
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant="h4" fontWeight={800} color="#2c3e50" gutterBottom>
//               Welcome to Micro Automation India Pvt. Ltd.
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//               ISO 9001:2015 Certified | Founded in 2009 | Based in Coimbatore
//             </Typography>
//           </Grid>
//         </Grid>
//       </HeaderBox>

//       {/* Main Section */}
//       <Box sx={{ bgcolor: '#fafafa' }}>
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
//                           '&:hover': { transform: 'scale(1.08)', transition: '0.3s' },
//                         }}
//                         onClick={() => handleOpen(cert)}
//                       >
//                         <PictureAsPdfIcon color="error" sx={{ fontSize: 50 }} />
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
//                   <Typography variant="body2" color="text.secondary">
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
//                   <Typography variant="body2" color="text.secondary">
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
//                   <Typography variant="body2" color="text.secondary">
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
//                   <Typography variant="body2" color="text.secondary">
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

//       {/* PDF Dialog */}
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
  IconButton,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloseIcon from '@mui/icons-material/Close';

// === Animation Keyframe ===
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// === Styled Components ===
const MainContainer = styled(Box)`
  background-color: #f4f6f8;
  min-height: 100vh;
  padding-bottom: 80px;
`;

const StyledCard = styled(Card)`
  animation: ${fadeUp} 0.6s ease-out;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  border-top: 4px solid transparent;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

const HeaderBox = styled(Box)`
  background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
  padding: 80px 24px;
  text-align: center;
  color: white;
  margin-bottom: -40px; /* Overlap effect */
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
`;

const PDFIconBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 20px;
  border-radius: 12px;
  background-color: #fafafa;
  border: 1px solid #eee;
  transition: all 0.3s ease;
  width: 140px;

  &:hover {
    background-color: #fff;
    border-color: #d32f2f;
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(211, 47, 47, 0.15);
  }
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
    <MainContainer>
      {/* Header */}
      <HeaderBox>
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight={800} gutterBottom>
            About Micro Automation
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
            Precision CNC Machining | ISO 9001:2015 Certified | Est. 2009
          </Typography>
        </Container>
      </HeaderBox>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 8 }}> {/* Added margin-top to separate from header */}
        <Grid container spacing={4}>
          
          {/* Company Profile (Full Width) */}
          <Grid item xs={12}>
            <StyledCard sx={{ borderTopColor: '#1976d2' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="#1976d2">
                  Company Profile
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8} fontSize="1.05rem">
                  Micro Automation is a trusted manufacturer of high-precision CNC machined components
                  for industries like Automobiles, Textiles, Oil & Gas Valves, Railways, Aerospace,
                  Defense, and Pumps. With a modern infrastructure and a strong technical team, we deliver
                  quality solutions tailored to customer needs.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Certificates Section */}
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
              <Typography variant="h5" fontWeight={700} color="#455a64">
                Certifications
              </Typography>
              <Box sx={{ width: 60, height: 4, bgcolor: '#d32f2f', mx: 'auto', mt: 1, borderRadius: 2 }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
              {certificates.map((cert) => (
                <PDFIconBox key={cert.title} onClick={() => handleOpen(cert)}>
                  <PictureAsPdfIcon sx={{ fontSize: 48, color: '#d32f2f', mb: 1 }} />
                  <Typography variant="caption" fontWeight={700} color="#555" sx={{ textTransform: 'uppercase' }}>
                    {cert.title.replace(' CERTIFICATE', '')}
                  </Typography>
                </PDFIconBox>
              ))}
            </Box>
          </Grid>

          {/* Vision & Mission (Side by Side) */}
          <Grid item xs={12} md={6}>
            <StyledCard sx={{ borderTopColor: '#00695c' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="#00695c">
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  To be the leading provider of precision machining solutions, known for reliability,
                  innovation, and excellence in the global manufacturing sector.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledCard sx={{ borderTopColor: '#e65100' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="#e65100">
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  • Deliver precise, high-quality machining services<br />
                  • Foster long-term client relationships<br />
                  • Embrace innovation & continuous improvement<br />
                  • Uphold ethical values and sustainability
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Strengths & Capabilities */}
          <Grid item xs={12} md={6}>
            <StyledCard sx={{ borderTopColor: '#0288d1' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="#0288d1">
                  Core Strengths
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  ✓ On-time Delivery<br />
                  ✓ High Product Quality<br />
                  ✓ Advanced Technology<br />
                  ✓ Expert Workforce
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          <Grid item xs={12} md={6}>
            <StyledCard sx={{ borderTopColor: '#2e7d32' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="#2e7d32">
                  Capabilities
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  • Steel, Titanium, Bronze, Brass<br />
                  • Stainless & Mild Steel<br />
                  • Investment, Aluminum, and Steel Castings<br />
                  • Super Alloys and Non-Ferrous Metals
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

          {/* Infrastructure */}
          <Grid item xs={12}>
            <StyledCard sx={{ borderTopColor: '#7b1fa2' }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" fontWeight={700} gutterBottom color="#7b1fa2">
                  Infrastructure
                </Typography>
                <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
                  Our 2600 sq. ft. facility is equipped with ACE Turning Centers, VMCs, and precise
                  inspection tools like VMM and 2D Height Gauges, ensuring top-tier component quality.
                  We maintain strict quality control standards at every stage of production.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>

        </Grid>
      </Container>

      {/* PDF Dialog */}
      <Dialog 
        open={open} 
        onClose={handleClose} 
        fullWidth 
        maxWidth="lg"
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: 'hidden',
            maxHeight: '90vh' // Ensures dialog doesn't exceed screen height
          }
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            {selectedPDF?.title}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: (theme) => theme.palette.grey[500],
              '&:hover': { color: '#d32f2f', bgcolor: 'rgba(211, 47, 47, 0.1)' },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        
        {/* ✅ FIX: Added overflow: 'hidden' to prevent double scrollbar */}
        <DialogContent dividers sx={{ p: 0, height: '80vh', bgcolor: '#525659', overflow: 'hidden' }}>
          {selectedPDF && (
            <iframe
              src={selectedPDF.file}
              width="100%"
              height="100%"
              title={selectedPDF.title}
              style={{ border: 'none', display: 'block' }} // display block removes bottom spacing
            />
          )}
        </DialogContent>
      </Dialog>
    </MainContainer>
  );
};

export default About;

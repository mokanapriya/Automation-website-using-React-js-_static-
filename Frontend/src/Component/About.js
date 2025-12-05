
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
//   IconButton,
// } from '@mui/material';
// import { keyframes } from '@emotion/react';
// import styled from '@emotion/styled';
// import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
// import CloseIcon from '@mui/icons-material/Close';

// // === Animation Keyframe ===
// const fadeUp = keyframes`
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// // === Styled Components ===
// const MainContainer = styled(Box)`
//   background-color: #f4f6f8;
//   min-height: 100vh;
//   padding-bottom: 80px;
// `;

// const StyledCard = styled(Card)`
//   animation: ${fadeUp} 0.6s ease-out;
//   background: #ffffff;
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
//   height: 100%;
//   border-top: 4px solid transparent;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
//   }
// `;

// const HeaderBox = styled(Box)`
//   background: linear-gradient(135deg, #1976d2 0%, #0d47a1 100%);
//   padding: 80px 24px;
//   text-align: center;
//   color: white;
//   margin-bottom: -40px; /* Overlap effect */
//   border-bottom-left-radius: 40px;
//   border-bottom-right-radius: 40px;
// `;

// const PDFIconBox = styled(Box)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   padding: 20px;
//   border-radius: 12px;
//   background-color: #fafafa;
//   border: 1px solid #eee;
//   transition: all 0.3s ease;
//   width: 140px;

//   &:hover {
//     background-color: #fff;
//     border-color: #d32f2f;
//     transform: translateY(-4px);
//     box-shadow: 0 8px 16px rgba(211, 47, 47, 0.15);
//   }
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
//     <MainContainer>
//       {/* Header */}
//       <HeaderBox>
//         <Container maxWidth="md">
//           <Typography variant="h3" fontWeight={800} gutterBottom>
//             About Micro Automation
//           </Typography>
//           <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400 }}>
//             Precision CNC Machining | ISO 9001:2015 Certified | Est. 2009
//           </Typography>
//         </Container>
//       </HeaderBox>

//       {/* Main Content */}
//       <Container maxWidth="lg" sx={{ mt: 8 }}> {/* Added margin-top to separate from header */}
//         <Grid container spacing={4}>
          
//           {/* Company Profile (Full Width) */}
//           <Grid item xs={12}>
//             <StyledCard sx={{ borderTopColor: '#1976d2' }}>
//               <CardContent sx={{ p: 4 }}>
//                 <Typography variant="h5" fontWeight={700} gutterBottom color="#1976d2">
//                   Company Profile
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary" lineHeight={1.8} fontSize="1.05rem">
//                   Micro Automation is a trusted manufacturer of high-precision CNC machined components
//                   for industries like Automobiles, Textiles, Oil & Gas Valves, Railways, Aerospace,
//                   Defense, and Pumps. With a modern infrastructure and a strong technical team, we deliver
//                   quality solutions tailored to customer needs.
//                 </Typography>
//               </CardContent>
//             </StyledCard>
//           </Grid>

//           {/* Certificates Section */}
//           <Grid item xs={12}>
//             <Box sx={{ textAlign: 'center', mb: 2, mt: 2 }}>
//               <Typography variant="h5" fontWeight={700} color="#455a64">
//                 Certifications
//               </Typography>
//               <Box sx={{ width: 60, height: 4, bgcolor: '#d32f2f', mx: 'auto', mt: 1, borderRadius: 2 }} />
//             </Box>
//             <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', justifyContent: 'center' }}>
//               {certificates.map((cert) => (
//                 <PDFIconBox key={cert.title} onClick={() => handleOpen(cert)}>
//                   <PictureAsPdfIcon sx={{ fontSize: 48, color: '#d32f2f', mb: 1 }} />
//                   <Typography variant="caption" fontWeight={700} color="#555" sx={{ textTransform: 'uppercase' }}>
//                     {cert.title.replace(' CERTIFICATE', '')}
//                   </Typography>
//                 </PDFIconBox>
//               ))}
//             </Box>
//           </Grid>

//           {/* Vision & Mission (Side by Side) */}
//           <Grid item xs={12} md={6}>
//             <StyledCard sx={{ borderTopColor: '#00695c' }}>
//               <CardContent sx={{ p: 4 }}>
//                 <Typography variant="h5" fontWeight={700} gutterBottom color="#00695c">
//                   Our Vision
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
//                   To be the leading provider of precision machining solutions, known for reliability,
//                   innovation, and excellence in the global manufacturing sector.
//                 </Typography>
//               </CardContent>
//             </StyledCard>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <StyledCard sx={{ borderTopColor: '#e65100' }}>
//               <CardContent sx={{ p: 4 }}>
//                 <Typography variant="h5" fontWeight={700} gutterBottom color="#e65100">
//                   Our Mission
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
//                   • Deliver precise, high-quality machining services<br />
//                   • Foster long-term client relationships<br />
//                   • Embrace innovation & continuous improvement<br />
//                   • Uphold ethical values and sustainability
//                 </Typography>
//               </CardContent>
//             </StyledCard>
//           </Grid>

//           {/* Strengths & Capabilities */}
//           <Grid item xs={12} md={6}>
//             <StyledCard sx={{ borderTopColor: '#0288d1' }}>
//               <CardContent sx={{ p: 4 }}>
//                 <Typography variant="h5" fontWeight={700} gutterBottom color="#0288d1">
//                   Core Strengths
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
//                   ✓ On-time Delivery<br />
//                   ✓ High Product Quality<br />
//                   ✓ Advanced Technology<br />
//                   ✓ Expert Workforce
//                 </Typography>
//               </CardContent>
//             </StyledCard>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <StyledCard sx={{ borderTopColor: '#2e7d32' }}>
//               <CardContent sx={{ p: 4 }}>
//                 <Typography variant="h5" fontWeight={700} gutterBottom color="#2e7d32">
//                   Capabilities
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
//                   • Steel, Titanium, Bronze, Brass<br />
//                   • Stainless & Mild Steel<br />
//                   • Investment, Aluminum, and Steel Castings<br />
//                   • Super Alloys and Non-Ferrous Metals
//                 </Typography>
//               </CardContent>
//             </StyledCard>
//           </Grid>

//           {/* Infrastructure */}
//           <Grid item xs={12}>
//             <StyledCard sx={{ borderTopColor: '#7b1fa2' }}>
//               <CardContent sx={{ p: 4 }}>
//                 <Typography variant="h5" fontWeight={700} gutterBottom color="#7b1fa2">
//                   Infrastructure
//                 </Typography>
//                 <Typography variant="body1" color="text.secondary" lineHeight={1.8}>
//                   Our 2600 sq. ft. facility is equipped with ACE Turning Centers, VMCs, and precise
//                   inspection tools like VMM and 2D Height Gauges, ensuring top-tier component quality.
//                   We maintain strict quality control standards at every stage of production.
//                 </Typography>
//               </CardContent>
//             </StyledCard>
//           </Grid>

//         </Grid>
//       </Container>

//       {/* PDF Dialog */}
//       <Dialog 
//         open={open} 
//         onClose={handleClose} 
//         fullWidth 
//         maxWidth="lg"
//         PaperProps={{
//           sx: {
//             borderRadius: 3,
//             overflow: 'hidden',
//             maxHeight: '90vh' // Ensures dialog doesn't exceed screen height
//           }
//         }}
//       >
//         <DialogTitle sx={{ m: 0, p: 2, bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <Typography variant="h6" fontWeight="bold" color="primary">
//             {selectedPDF?.title}
//           </Typography>
//           <IconButton
//             aria-label="close"
//             onClick={handleClose}
//             sx={{
//               color: (theme) => theme.palette.grey[500],
//               '&:hover': { color: '#d32f2f', bgcolor: 'rgba(211, 47, 47, 0.1)' },
//             }}
//           >
//             <CloseIcon />
//           </IconButton>
//         </DialogTitle>
        
//         {/* ✅ FIX: Added overflow: 'hidden' to prevent double scrollbar */}
//         <DialogContent dividers sx={{ p: 0, height: '80vh', bgcolor: '#525659', overflow: 'hidden' }}>
//           {selectedPDF && (
//             <iframe
//               src={selectedPDF.file}
//               width="100%"
//               height="100%"
//               title={selectedPDF.title}
//               style={{ border: 'none', display: 'block' }} // display block removes bottom spacing
//             />
//           )}
//         </DialogContent>
//       </Dialog>
//     </MainContainer>
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
import { styled, keyframes } from '@mui/material/styles'; 
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import CloseIcon from '@mui/icons-material/Close';

// === Animation Keyframe ===
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// === Styled Components ===
const MainContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#f4f6f8',
  minHeight: '100vh',
  paddingBottom: '80px',
}));

const StyledCard = styled(Card)`
  animation: ${fadeUp} 0.6s ease-out;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  border-top: 4px solid transparent;
  display: flex;
  flex-direction: column;
  min-height: 280px; 

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }
`;

const HeaderBox = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
  padding: '80px 24px 100px 24px',
  textAlign: 'center',
  color: 'white',
  marginBottom: '-60px',
  borderBottomLeftRadius: '40px',
  borderBottomRightRadius: '40px',
}));

// === 🟢 FIX: PDF BOX (Using Flex to force width) ===
const PDFIconBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  padding: '15px 5px',
  borderRadius: '12px',
  backgroundColor: '#fafafa',
  border: '1px solid #eee',
  transition: 'all 0.3s ease',
  
  width: '140px', 
  // This is where the error was happening. Now 'theme' is correctly defined.
  [theme.breakpoints.down('sm')]: {
    width: '30%', 
    minWidth: '90px'
  },

  '&:hover': {
    backgroundColor: '#fff',
    borderColor: '#d32f2f',
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 16px rgba(211, 47, 47, 0.15)',
  }
}));

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
    <MainContainer sx={{ pt: { xs: 12, md: 0 } }}> 
      
      {/* Header */}
      <HeaderBox>
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            fontWeight={800} 
            gutterBottom
            sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
          >
            About Micro Automation
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.9, fontWeight: 400, fontSize: { xs: '0.9rem', md: '1.25rem' } }}>
            Precision CNC Machining | ISO 9001:2015 Certified | Est. 2009
          </Typography>
        </Container>
      </HeaderBox>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 0 }}>
        <Grid container spacing={4}>
          
          {/* Company Profile */}
          <Grid item xs={12}>
            <StyledCard sx={{ borderTopColor: '#1976d2', minHeight: 'auto' }}>
              <CardContent sx={{ p: { xs: 3, md: 4 } }}>
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
            
            {/* 🟢 REVERTED TO FLEXBOX FOR PERFECT ALIGNMENT */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'row', // Ensure row direction
              justifyContent: 'space-between', // Spread them out properly
              alignItems: 'stretch', // Make heights equal
              gap: 2, // Space between items
              width: '100%',
              maxWidth: { xs: '100%', md: '600px' },
              mx: 'auto'
            }}>
              {certificates.map((cert) => (
                <PDFIconBox key={cert.title} onClick={() => handleOpen(cert)}>
                  <PictureAsPdfIcon sx={{ fontSize: { xs: 32, md: 48 }, color: '#d32f2f', mb: { xs: 0.5, md: 1 } }} />
                  <Typography 
                    variant="caption" 
                    fontWeight={700} 
                    color="#555" 
                    sx={{ 
                      textTransform: 'uppercase', 
                      fontSize: { xs: '0.75rem', md: '0.75rem' }, 
                      textAlign: 'center',
                    }}
                  >
                    {cert.title}
                  </Typography>
                </PDFIconBox>
              ))}
            </Box>
          </Grid>

          {/* Vision & Mission */}
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

          {/* Core Strengths - Mobile Full Width */}
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

          {/* Capabilities - Mobile Full Width */}
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
            maxHeight: '90vh'
          }
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, bgcolor: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" fontWeight="bold" color="primary">
            {selectedPDF?.title} Certificate
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
        
        <DialogContent dividers sx={{ p: 0, height: '80vh', bgcolor: '#525659', overflow: 'hidden' }}>
          {selectedPDF && (
            <iframe
              src={selectedPDF.file}
              width="100%"
              height="100%"
              title={selectedPDF.title}
              style={{ border: 'none', display: 'block' }} 
            />
          )}
        </DialogContent>
      </Dialog>
    </MainContainer>
  );
};

export default About;
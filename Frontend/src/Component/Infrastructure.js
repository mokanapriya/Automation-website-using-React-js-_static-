
// import React, { useEffect, useState } from 'react';
// import { 
//   Box, 
//   Container, 
//   Typography, 
//   Grid, 
//   Paper, 
//   Divider, 
//   Card, 
//   CardContent,
//   Modal,
//   IconButton,
//   Fade,
//   Backdrop
// } from '@mui/material';
// import { Close as CloseIcon, ZoomIn as ZoomInIcon } from '@mui/icons-material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // 🛠️ 1. OLD IMAGES (Machinery)
// const machineryImages = [
//   { src: '/image/CNC.png', caption: 'CNC Turning Centers' },
//   { src: '/image/vertical.png', caption: 'Vertical Machining Centers' },
//   { src: '/image/15.png', caption: 'VMM & Height Gauges' },
//   { src: '/image/16.png', caption: 'High Precision Drilling' },
// ];

// // 📸 2. NEW IMAGES (Shop Floor)
// const facilityPhotos = [
//   { src: '/image/image1.jpg', caption: 'Advanced CNC Shop Floor' },
//   { src: '/image/image 2.jpg', caption: 'VMC & Turning Centers Unit' },
//   { src: '/image/image3.jpg', caption: 'Skilled Operators in Action' },
//   { src: '/image/image4.jpg', caption: 'Mass Production Assembly' },
// ];

// // Modal Style
// const modalStyle = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   maxWidth: '90vw',
//   maxHeight: '90vh',
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   borderRadius: 2,
//   outline: 'none',
//   p: 0,
//   overflow: 'hidden',
//   display: 'flex',
//   flexDirection: 'column',
// };

// const Infrastructure = () => {
//   const [open, setOpen] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   // Open Modal
//   const handleOpen = (image) => {
//     setSelectedImage(image);
//     setOpen(true);
//   };

//   // Close Modal
//   const handleClose = () => {
//     setOpen(false);
//     setTimeout(() => setSelectedImage(null), 300);
//   };

//   return (
//     <Box sx={{ py: 8, backgroundColor: '#f5f7fa', overflow: 'hidden' }}>
//       <Container maxWidth="lg">
        
//         {/* ================= HEADER ================= */}
//         <Box textAlign="center" mb={6}>
//           <Typography variant="h3" fontWeight={800} color="primary" gutterBottom data-aos="fade-down">
//             Our Infrastructure
//           </Typography>
//           <Divider sx={{ mx: 'auto', width: 100, borderBottomWidth: 4, borderColor: 'secondary.main', mb: 3, borderRadius: 2 }} />
//           <Typography variant="h6" color="text.secondary" data-aos="fade-up" sx={{ maxWidth: '800px', mx: 'auto', lineHeight: 1.6 }}>
//             A blend of advanced machinery and skilled craftsmanship, designed for high-precision mass production.
//           </Typography>
//         </Box>

//         {/* ================= INFO BOXES ================= */}
//         {/* ✅ Increased margin-bottom (mb) to 12 for more space before Machinery section */}
//         <Grid container spacing={4} sx={{ mb: 12 }} alignItems="stretch">
//           <Grid item xs={12} md={6} data-aos="fade-right">
//             <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 3, borderLeft: '6px solid #1976d2', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
//               <Typography variant="h5" fontWeight={700} gutterBottom color="#1976d2">
//                 Facility & Machinery
//               </Typography>
//               <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
//                 MICROAUTOMATION is built in an area of over <strong>2600 sq. feet</strong> and is installed with branded CNC machines like ACE Turning Centers, Vertical Machining Centers (VMC), and High-Speed Drilling machines.
//               </Typography>
//             </Paper>
//           </Grid>
//           <Grid item xs={12} md={6} data-aos="fade-left">
//             <Paper elevation={3} sx={{ p: 4, height: '100%', borderRadius: 3, borderLeft: '6px solid #d81b60', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
//               <Typography variant="h5" fontWeight={700} gutterBottom color="#d81b60">
//                 Testing & Quality Control
//               </Typography>
//               <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
//                 Our testing facilities deliver zero-defect components using branded instruments like <strong>Video Measuring Machines (VMM)</strong> and <strong>2D Height Gauges</strong>.
//               </Typography>
//             </Paper>
//           </Grid>
//         </Grid>

//         {/* ================= SECTION 1: MACHINERY (OLD IMAGES) ================= */}
//         {/* ✅ Increased margin-bottom (mb) to 12 for more space before Factory Floor section */}
//         <Box mb={12}>
//           <Typography variant="h4" fontWeight={700} color="#333" mb={4} borderLeft="5px solid #1976d2" pl={2} data-aos="fade-right">
//              Machinery & Equipment
//           </Typography>
//           <Grid container spacing={4} justifyContent="center">
//             {machineryImages.map((item, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card
//                   data-aos="zoom-in"
//                   data-aos-delay={index * 100}
//                   onClick={() => handleOpen(item)} 
//                   sx={{
//                     borderRadius: 3,
//                     boxShadow: 2,
//                     height: '100%',
//                     cursor: 'pointer',
//                     transition: '0.3s',
//                     position: 'relative',
//                     '&:hover': { transform: 'translateY(-8px)', boxShadow: 10 }
//                   }}
//                 >
//                   <Box sx={{ p: 2, height: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
//                     <img 
//                       src={item.src} 
//                       alt={item.caption} 
//                       style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
//                     />
//                     <Box sx={{
//                         position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
//                         bgcolor: 'rgba(0,0,0,0.1)', opacity: 0, transition: '0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center',
//                         '&:hover': { opacity: 1 }
//                     }}>
//                         <ZoomInIcon sx={{ color: '#1976d2', fontSize: 40, bgcolor: 'white', borderRadius: '50%', p: 1 }} />
//                     </Box>
//                   </Box>
//                   <CardContent sx={{ textAlign: 'center', borderTop: '1px solid #f0f0f0' }}>
//                     <Typography variant="subtitle1" fontWeight={600} color="primary.main">
//                       {item.caption}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* ================= SECTION 2: SHOP FLOOR (NEW IMAGES) ================= */}
//         <Box>
//           <Typography variant="h4" fontWeight={700} color="#333" mb={4} borderLeft="5px solid #d81b60" pl={2} data-aos="fade-right">
//              Factory Floor Gallery
//           </Typography>
//           <Grid container spacing={4} justifyContent="center">
//             {facilityPhotos.map((item, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card
//                   data-aos="fade-up"
//                   data-aos-delay={index * 150}
//                   onClick={() => handleOpen(item)}
//                   sx={{
//                     borderRadius: 3,
//                     boxShadow: 4,
//                     height: '100%',
//                     cursor: 'pointer',
//                     transition: '0.3s',
//                     position: 'relative',
//                     '&:hover': { transform: 'translateY(-8px)', boxShadow: 12 }
//                   }}
//                 >
//                   <Box sx={{ height: 320, overflow: 'hidden' }}>
//                     <img 
//                       src={item.src} 
//                       alt={item.caption} 
//                       style={{ 
//                         width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s'
//                       }} 
//                       onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
//                       onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
//                     />
//                     <Box sx={{
//                         position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
//                         bgcolor: 'rgba(0,0,0,0.3)', opacity: 0, transition: '0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center',
//                         '&:hover': { opacity: 1 }
//                     }}>
//                         <ZoomInIcon sx={{ color: '#d81b60', fontSize: 50, bgcolor: 'white', borderRadius: '50%', p: 1 }} />
//                     </Box>
//                   </Box>
//                   <CardContent sx={{ textAlign: 'center', backgroundColor: '#fff' }}>
//                     <Typography variant="subtitle1" fontWeight={600} color="#2c3e50">
//                       {item.caption}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* ================= IMAGE MODAL (LIGHTBOX) ================= */}
//         <Modal
//           open={open}
//           onClose={handleClose}
//           closeAfterTransition
//           BackdropComponent={Backdrop}
//           BackdropProps={{ timeout: 500, sx: { backgroundColor: 'rgba(0, 0, 0, 0.85)' } }}
//         >
//           <Fade in={open}>
//             <Box sx={modalStyle}>
//               <IconButton 
//                 onClick={handleClose}
//                 sx={{ 
//                   position: 'absolute', 
//                   top: 10, 
//                   right: 10, 
//                   bgcolor: 'rgba(255, 255, 255, 0.8)', 
//                   zIndex: 10,
//                   '&:hover': { bgcolor: '#fff', color: 'red' }
//                 }}
//               >
//                 <CloseIcon />
//               </IconButton>
              
//               {selectedImage && (
//                 <Box sx={{ p: 1, bgcolor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                     <img 
//                         src={selectedImage.src} 
//                         alt={selectedImage.caption} 
//                         style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} 
//                     />
//                     <Typography variant="h6" sx={{ mt: 2, mb: 1, color: '#333' }}>
//                         {selectedImage.caption}
//                     </Typography>
//                 </Box>
//               )}
//             </Box>
//           </Fade>
//         </Modal>

//       </Container>
//     </Box>
//   );
// };
// export default Infrastructure;

import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Divider, 
  Card, 
  CardContent,
  Modal,
  IconButton,
  Fade,
  Backdrop
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';

// 🛠️ 1. OLD IMAGES (Machinery)
const machineryImages = [
  { src: '/image/CNC.png', caption: 'CNC Turning Centers' },
  { src: '/image/vertical.png', caption: 'Vertical Machining Centers' },
  { src: '/image/15.png', caption: 'VMM & Height Gauges' },
  { src: '/image/16.png', caption: 'High Precision Drilling' },
];

// 📸 2. NEW IMAGES (Shop Floor)
const facilityPhotos = [
  { src: '/image/image1.jpg', caption: 'Advanced CNC Shop Floor' },
  { src: '/image/image 2.jpg', caption: 'VMC & Turning Centers Unit' },
  { src: '/image/image3.jpg', caption: 'Skilled Operators in Action' },
  { src: '/image/image4.jpg', caption: 'Mass Production Assembly' },
];

// Modal Style
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '95vw',
  maxHeight: '90vh',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  outline: 'none',
  p: 0,
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
};

const Infrastructure = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    AOS.init({ 
      duration: 800,
      once: false, 
      mirror: true 
    });
  }, []);

  // Open Modal
  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  // Close Modal
  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedImage(null), 300);
  };

  return (
    <Box sx={{ 
      // 🟢 FIX: Increased Padding Top (pt) to push content below the Header
      pt: { xs: 12, md: 10 }, 
      pb: { xs: 6, md: 8 }, 
      backgroundColor: '#f5f7fa', 
      overflow: 'hidden' 
    }}>
      <Container maxWidth="lg">
        
        {/* ================= HEADER ================= */}
        <Box textAlign="center" mb={{ xs: 4, md: 6 }}>
          <Typography 
            variant="h3" 
            fontWeight={800} 
            color="primary" 
            gutterBottom 
            data-aos="fade-down"
            sx={{ fontSize: { xs: '2rem', md: '3rem' } }}
          >
            Our Infrastructure
          </Typography>
          <Divider sx={{ mx: 'auto', width: 80, borderBottomWidth: 4, borderColor: 'secondary.main', mb: 2, borderRadius: 2 }} />
          <Typography 
            variant="h6" 
            color="text.secondary" 
            data-aos="fade-up" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              lineHeight: 1.6,
              fontSize: { xs: '1rem', md: '1.25rem' } 
            }}
          >
            A blend of advanced machinery and skilled craftsmanship, designed for high-precision mass production.
          </Typography>
        </Box>

        {/* ================= INFO BOXES ================= */}
        <Grid container spacing={3} sx={{ mb: { xs: 6, md: 12 } }} alignItems="stretch">
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, height: '100%', borderRadius: 3, borderLeft: '6px solid #1976d2', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
              <Typography variant="h5" fontWeight={700} gutterBottom color="#1976d2" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Facility & Machinery
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.7 }}>
                MICROAUTOMATION is built in an area of over <strong>2600 sq. feet</strong> and is installed with branded CNC machines like ACE Turning Centers, Vertical Machining Centers (VMC), and High-Speed Drilling machines.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-left">
            <Paper elevation={3} sx={{ p: { xs: 3, md: 4 }, height: '100%', borderRadius: 3, borderLeft: '6px solid #d81b60', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 } }}>
              <Typography variant="h5" fontWeight={700} gutterBottom color="#d81b60" sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Testing & Quality Control
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, lineHeight: 1.7 }}>
                Our testing facilities deliver zero-defect components using branded instruments like <strong>Video Measuring Machines (VMM)</strong> and <strong>2D Height Gauges</strong>.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* ================= SECTION 1: MACHINERY ================= */}
        <Box mb={{ xs: 6, md: 12 }}>
          <Typography 
            variant="h4" 
            fontWeight={700} 
            color="#333" 
            mb={3} 
            borderLeft="5px solid #1976d2" 
            pl={2} 
            data-aos="fade-right"
            sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}
          >
              Machinery & Equipment
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {machineryImages.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  onClick={() => handleOpen(item)} 
                  sx={{
                    borderRadius: 3,
                    boxShadow: 2,
                    height: '100%',
                    cursor: 'pointer',
                    transition: '0.3s',
                    position: 'relative',
                    '&:hover': { transform: 'translateY(-8px)', boxShadow: 10 }
                  }}
                >
                  <Box sx={{ p: 2, height: { xs: 240, md: 320 }, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    <img 
                      src={item.src} 
                      alt={item.caption} 
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} 
                    />
                  </Box>
                  <CardContent sx={{ textAlign: 'center', borderTop: '1px solid #f0f0f0', p: 1.5 }}>
                    <Typography variant="subtitle1" fontWeight={600} color="primary.main" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      {item.caption}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ================= SECTION 2: SHOP FLOOR ================= */}
        <Box>
          <Typography 
            variant="h4" 
            fontWeight={700} 
            color="#333" 
            mb={3} 
            borderLeft="5px solid #d81b60" 
            pl={2} 
            data-aos="fade-right"
            sx={{ fontSize: { xs: '1.5rem', md: '2.125rem' } }}
          >
              Factory Floor Gallery
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {facilityPhotos.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  data-aos="fade-up"
                  data-aos-delay={index * 150}
                  onClick={() => handleOpen(item)}
                  sx={{
                    borderRadius: 3,
                    boxShadow: 4,
                    height: '100%',
                    cursor: 'pointer',
                    transition: '0.3s',
                    position: 'relative',
                    '&:hover': { transform: 'translateY(-8px)', boxShadow: 12 }
                  }}
                >
                  <Box sx={{ height: { xs: 240, md: 320 }, overflow: 'hidden' }}>
                    <img 
                      src={item.src} 
                      alt={item.caption} 
                      style={{ 
                        width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s'
                      }} 
                      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    />
                  </Box>
                  <CardContent sx={{ textAlign: 'center', backgroundColor: '#fff', p: 1.5 }}>
                    <Typography variant="subtitle1" fontWeight={600} color="#2c3e50" sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}>
                      {item.caption}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* ================= IMAGE MODAL ================= */}
        <Modal
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{ timeout: 500, sx: { backgroundColor: 'rgba(0, 0, 0, 0.9)' } }}
        >
          <Fade in={open}>
            <Box sx={modalStyle}>
              <IconButton 
                onClick={handleClose}
                sx={{ 
                  position: 'absolute', 
                  top: 10, 
                  right: 10, 
                  bgcolor: 'white', 
                  color: 'black',
                  zIndex: 10,
                  boxShadow: 3,
                  '&:hover': { bgcolor: '#f5f5f5', color: 'red' }
                }}
              >
                <CloseIcon />
              </IconButton>
              
              {selectedImage && (
                <Box sx={{ p: 0, bgcolor: 'black', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.caption} 
                      style={{ maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain' }} 
                    />
                    <Typography variant="h6" sx={{ mt: 2, color: 'white', textAlign: 'center', px: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                        {selectedImage.caption}
                    </Typography>
                </Box>
              )}
            </Box>
          </Fade>
        </Modal>

      </Container>
    </Box>
  );
};

export default Infrastructure;

// import {
//   Box,
//   CardContent,
//   Typography,
//   Button,
//   Card,
//   Modal,
//   Backdrop,
//   Fade,
// } from '@mui/material';
// import { useState } from 'react';
// import styled from '@emotion/styled';
// import { keyframes } from '@emotion/react';
// import { CheckCircle } from '@mui/icons-material';

// // Animations
// const fadeUp = keyframes`
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const pulse = keyframes`
//   0%, 100% { transform: scale(1); }
//   50% { transform: scale(1.05); }
// `;

// // Styled Components
// const AnimatedCard = styled(Card)`
//   animation: ${fadeUp} 0.6s ease forwards;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
//   border-radius: 18px;
//   overflow: hidden;
//   background-color: #ffffffdd;
//   backdrop-filter: blur(6px);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: translateY(-8px) scale(1.02);
//     box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
//   }
// `;

// const AnimatedHeading = styled(Typography)`
//   animation: ${fadeUp} 1s ease-out;
// `;

// const AnimatedButton = styled(Button)`
//   animation: ${pulse} 2s infinite;
// `;

// const featureCards = [
//   {
//     title: 'On Time Delivery',
//     image: '/image/on time delivery.jpg',
//     label: 'Learn More',
//     link: '/services/delivery',
//     desc: 'We ensure all deliveries are executed promptly with strict timelines.',
//     tag: 'Logistics',
//   },
//   {
//     title: 'Product Quality',
//     image: '/image/manufacturing.png',
//     label: 'Explore',
//     link: '/services/manufacturing',
//     desc: 'Expertise in high-precision CNC machining for various industries.',
//     tag: 'Production',
//   },
//   {
//     title: 'Adaption to Technology',
//     image: '/image/Atech.png',
//     label: 'Details',
//     link: '/services/ethics',
//     desc: 'We believe in transparency, fairness, and long-term partnerships.',
//     tag: 'Values',
//   },
//   {
//     title: 'Expertise Team',
//     image: '/image/people.png',
//     label: 'Get Info',
//     link: '/services/payment',
//     desc: 'Flexible and customer-friendly payment solutions.',
//     tag: 'Finance',
//   },
// ];

// const OurService = () => {
//   const [open, setOpen] = useState(false);
//   const [modalContent, setModalContent] = useState({});

//   const handleOpen = (card) => {
//     setModalContent(card);
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   return (
//     <Box
//       sx={{
//         py: 10,
//         px: 3,
//         position: 'relative',
//         overflow: 'hidden',
//         backgroundColor: '#ffffff', // White background
//       }}
//     >
//       {/* Heading */}
//       <AnimatedHeading
//         variant="h4"
//         fontWeight={700}
//         align="center"
//         gutterBottom
//         sx={{ color: '#0d47a1', zIndex: 2, position: 'relative' }}
//       >
//         Our Services
//       </AnimatedHeading>

//       <Typography
//         variant="subtitle1"
//         align="center"
//         sx={{
//           mb: 6,
//           maxWidth: 600,
//           mx: 'auto',
//           color: '#333',
//           zIndex: 2,
//           position: 'relative',
//         }}
//       >
//         Discover the key pillars that drive our business and deliver consistent value to our customers.
//       </Typography>

//       {/* Cards */}
//       <Box
//         sx={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//           gap: 4,
//           maxWidth: 1200,
//           mx: 'auto',
//           position: 'relative',
//           zIndex: 2,
//         }}
//       >
//         {featureCards.map((card, index) => (
//           <AnimatedCard key={index} sx={{ animationDelay: `${index * 0.2}s` }}>
//             <CardContent sx={{ textAlign: 'center', p: 3 }}>
//               <img
//                 src={card.image}
//                 alt={card.title}
//                 style={{
//                   width: '100%',
//                   height: '200px',
//                   objectFit: 'cover',
//                   borderRadius: '10px',
//                   marginBottom: '20px',
//                   boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//                 }}
//               />
//               <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
//                 {card.title}
//               </Typography>
//               <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
//                 {card.desc}
//               </Typography>
//               <Typography
//                 variant="caption"
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   gap: 1,
//                   mb: 2,
//                   color: '#1976d2',
//                 }}
//               >
//                 <CheckCircle fontSize="small" /> {card.tag}
//               </Typography>
//               <AnimatedButton
//                 variant="outlined"
//                 color="warning"
//                 onClick={() => handleOpen(card)}
//               >
//                 {card.label}
//               </AnimatedButton>
//             </CardContent>
//           </AnimatedCard>
//         ))}
//       </Box>

//       {/* Modal */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{ timeout: 500 }}
//       >
//         <Fade in={open}>
//           <Box
//             sx={{
//               position: 'absolute',
//               top: '50%',
//               left: '50%',
//               transform: 'translate(-50%, -50%)',
//               width: 400,
//               bgcolor: 'background.paper',
//               boxShadow: 24,
//               p: 4,
//               borderRadius: 2,
//               zIndex: 100,
//             }}
//           >
//             <Typography variant="h6" gutterBottom>
//               {modalContent.title}
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//               {modalContent.desc}
//             </Typography>
//             <Button
//               onClick={handleClose}
//               sx={{ mt: 2 }}
//               variant="contained"
//               color="primary"
//             >
//               Close
//             </Button>
//           </Box>
//         </Fade>
//       </Modal>
//     </Box>
//   );
// };

// export default OurService;
// import React, { useState, useEffect } from 'react';
// import {
//   Box,
//   CardContent,
//   Typography,
//   Button,
//   Card,
//   Modal,
//   Backdrop,
//   Fade,
//   Container,
//   IconButton,
// } from '@mui/material';
// import styled from '@emotion/styled';
// import { keyframes } from '@emotion/react';
// import { CheckCircle, Close as CloseIcon, ArrowForward } from '@mui/icons-material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // === Animations ===
// const float = keyframes`
//   0% { transform: translateY(0px); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0px); }
// `;

// // === Styled Components ===
// const MainSection = styled(Box)`
//   padding: 80px 0;
//   background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
//   min-height: 100vh;
//   position: relative;
//   overflow: hidden;
  
//   @media (max-width: 768px) {
//     padding-top: 100px;
//     padding-bottom: 40px;
//   }
// `;

// const ServiceCard = styled(Card)`
//   background: rgba(255, 255, 255, 0.9);
//   backdrop-filter: blur(10px);
//   border-radius: 20px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
//   transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   height: 100%;
//   display: flex;
//   flex-direction: column;

//   &:hover {
//     transform: translateY(-10px);
//     box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
//     border-color: #1976d2;
//   }

//   /* Fixed: Use descendant selector for image hover effect instead of component selector */
//   &:hover img {
//     transform: scale(1.1);
//   }
// `;

// const ImageWrapper = styled(Box)`
//   overflow: hidden;
//   height: 220px;
//   position: relative;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;
//   }
// `;

// const GradientText = styled(Typography)`
//   background: linear-gradient(45deg, #1565c0, #42a5f5);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-weight: 800;
// `;

// const StyledModalBox = styled(Box)`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   width: 90%;
//   max-width: 500px;
//   background: #fff;
//   border-radius: 24px;
//   box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
//   padding: 32px;
//   outline: none;
// `;

// // === Data ===
// const featureCards = [
//   {
//     title: 'On Time Delivery',
//     image: '/image/on time delivery.jpg',
//     label: 'Learn More',
//     link: '/services/delivery',
//     desc: 'We ensure all deliveries are executed promptly with strict timelines, ensuring your production never stops.',
//     tag: 'Logistics',
//   },
//   {
//     title: 'Product Quality',
//     image: '/image/manufacturing.png',
//     label: 'Explore',
//     link: '/services/manufacturing',
//     desc: 'Expertise in high-precision CNC machining for various industries, adhering to global quality standards.',
//     tag: 'Production',
//   },
//   {
//     title: 'Adaption to Technology',
//     image: '/image/Atech.png',
//     label: 'Details',
//     link: '/services/ethics',
//     desc: 'We continuously upgrade our tech stack and machinery to transparency, fairness, and long-term partnerships.',
//     tag: 'Technology',
//   },
//   {
//     title: 'Expertise Team',
//     image: '/image/people.png',
//     label: 'Get Info',
//     link: '/services/payment',
//     desc: 'A dedicated team of engineers and specialists delivering flexible and customer-friendly solutions.',
//     tag: 'Team',
//   },
// ];

// const OurService = () => {
//   const [open, setOpen] = useState(false);
//   const [modalContent, setModalContent] = useState({});

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       offset: 50,
//     });
//   }, []);

//   const handleOpen = (card) => {
//     setModalContent(card);
//     setOpen(true);
//   };

//   const handleClose = () => setOpen(false);

//   return (
//     <MainSection>
//       <Container maxWidth="lg">
//         {/* Heading Section */}
//         <Box textAlign="center" mb={8} data-aos="fade-down">
//           <GradientText variant="h3" gutterBottom>
//             Our Services
//           </GradientText>
//           <Typography
//             variant="h6"
//             color="text.secondary"
//             sx={{ maxWidth: 700, mx: 'auto', fontWeight: 400, lineHeight: 1.6 }}
//           >
//             Discover the key pillars that drive our business and deliver consistent value to our customers through innovation and precision.
//           </Typography>
//           <Box 
//             sx={{ 
//               width: 80, 
//               height: 6, 
//               borderRadius: 4, 
//               background: 'linear-gradient(90deg, #1565c0, #42a5f5)', 
//               mx: 'auto', 
//               mt: 3 
//             }} 
//           />
//         </Box>

//         {/* Cards Grid */}
//         <Box
//           sx={{
//             display: 'grid',
//             gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fit, minmax(280px, 1fr))' },
//             gap: { xs: 3, md: 4 },
//           }}
//         >
//           {featureCards.map((card, index) => (
//             <Box key={index} data-aos="fade-up" data-aos-delay={index * 100}>
//               <ServiceCard>
//                 <ImageWrapper>
//                   <img src={card.image} alt={card.title} />
//                   <Box
//                     sx={{
//                       position: 'absolute',
//                       top: 16,
//                       right: 16,
//                       bgcolor: 'rgba(255,255,255,0.9)',
//                       px: 1.5,
//                       py: 0.5,
//                       borderRadius: 10,
//                       display: 'flex',
//                       alignItems: 'center',
//                       gap: 0.5,
//                       fontSize: '0.75rem',
//                       fontWeight: 'bold',
//                       color: '#1565c0',
//                       boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
//                     }}
//                   >
//                     <CheckCircle sx={{ fontSize: 16 }} /> {card.tag}
//                   </Box>
//                 </ImageWrapper>
                
//                 <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
//                   <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: '#2c3e50' }}>
//                     {card.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
//                     {card.desc}
//                   </Typography>
                  
//                   <Button
//                     variant="outlined"
//                     color="primary"
//                     endIcon={<ArrowForward />}
//                     onClick={() => handleOpen(card)}
//                     sx={{
//                       borderRadius: 50,
//                       textTransform: 'none',
//                       fontWeight: 600,
//                       borderWidth: 2,
//                       '&:hover': {
//                         borderWidth: 2,
//                         bgcolor: '#e3f2fd'
//                       }
//                     }}
//                   >
//                     {card.label}
//                   </Button>
//                 </CardContent>
//               </ServiceCard>
//             </Box>
//           ))}
//         </Box>
//       </Container>

//       {/* Modern Modal */}
//       <Modal
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{ timeout: 500, sx: { backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(4px)' } }}
//       >
//         <Fade in={open}>
//           <StyledModalBox>
//             <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
//               <Typography variant="h5" fontWeight={800} color="#1565c0">
//                 {modalContent.title}
//               </Typography>
//               <IconButton onClick={handleClose} size="small" sx={{ bgcolor: '#f5f5f5', '&:hover': { bgcolor: '#ffebee', color: '#d32f2f' } }}>
//                 <CloseIcon />
//               </IconButton>
//             </Box>
            
//             <Box 
//               component="img" 
//               src={modalContent.image} 
//               alt={modalContent.title}
//               sx={{ 
//                 width: '100%', 
//                 height: 200, 
//                 objectFit: 'cover', 
//                 borderRadius: 4, 
//                 mb: 3,
//                 boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
//               }}
//             />

//             <Typography variant="body1" color="text.secondary" paragraph lineHeight={1.8}>
//               {modalContent.desc}
//             </Typography>
            
//             <Box mt={3} display="flex" justifyContent="flex-end">
//               <Button
//                 onClick={handleClose}
//                 variant="contained"
//                 sx={{
//                   borderRadius: 50,
//                   px: 4,
//                   background: 'linear-gradient(45deg, #1565c0, #42a5f5)',
//                   boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)'
//                 }}
//               >
//                 Close Details
//               </Button>
//             </Box>
//           </StyledModalBox>
//         </Fade>
//       </Modal>
//     </MainSection>
//   );
// };

// export default OurService;
import React, { useState, useEffect } from 'react';
import {
  Box,
  CardContent,
  Typography,
  Button,
  Card,
  Modal,
  Backdrop,
  Fade,
  Container,
  IconButton,
} from '@mui/material';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { CheckCircle, Close as CloseIcon, ArrowForward } from '@mui/icons-material';
import AOS from 'aos';
import 'aos/dist/aos.css';

// === Animations ===
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// === Styled Components ===
const MainSection = styled(Box)`
  padding: 80px 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding-top: 60px; /* Reduced top padding for mobile */
    padding-bottom: 40px;
  }
`;

const ServiceCard = styled(Card)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    border-color: #1976d2;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const ImageWrapper = styled(Box)`
  overflow: hidden;
  height: 220px;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const GradientText = styled(Typography)`
  background: linear-gradient(45deg, #1565c0, #42a5f5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 800;
`;

const StyledModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 500px;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.2);
  padding: 32px;
  outline: none;
`;

// === Data ===
const featureCards = [
  {
    title: 'On Time Delivery',
    image: '/image/on time delivery.jpg',
    label: 'Learn More',
    link: '/services/delivery',
    desc: 'We ensure all deliveries are executed promptly with strict timelines, ensuring your production never stops.',
    tag: 'Logistics',
  },
  {
    title: 'Product Quality',
    image: '/image/manufacturing.png',
    label: 'Explore',
    link: '/services/manufacturing',
    desc: 'Expertise in high-precision CNC machining for various industries, adhering to global quality standards.',
    tag: 'Production',
  },
  {
    title: 'Adaption to Technology',
    image: '/image/Atech.png',
    label: 'Details',
    link: '/services/ethics',
    desc: 'We continuously upgrade our tech stack and machinery to transparency, fairness, and long-term partnerships.',
    tag: 'Technology',
  },
  {
    title: 'Expertise Team',
    image: '/image/people.png',
    label: 'Get Info',
    link: '/services/payment',
    desc: 'A dedicated team of engineers and specialists delivering flexible and customer-friendly solutions.',
    tag: 'Team',
  },
];

const OurService = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
    });
  }, []);

  const handleOpen = (card) => {
    setModalContent(card);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <MainSection>
      <Container maxWidth="lg">
        {/* === Updated Heading Section for Mobile === */}
        <Box textAlign="center" mb={{ xs: 5, md: 8 }} data-aos="fade-down">
          <GradientText 
            variant="h3" 
            gutterBottom
            sx={{
              fontSize: { xs: '2rem', md: '3.5rem' }, // Mobile: 2rem, Desktop: 3.5rem
              lineHeight: 1.2
            }}
          >
            Our Services
          </GradientText>
          
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ 
              maxWidth: 700, 
              mx: 'auto', 
              fontWeight: 400, 
              lineHeight: 1.6,
              fontSize: { xs: '0.95rem', md: '1.25rem' }, // Font size responsive
              px: 2 // Mobile la side la padding
            }}
          >
            Discover the key pillars that drive our business and deliver consistent value to our customers through innovation and precision.
          </Typography>

          <Box 
            sx={{ 
              width: { xs: 60, md: 80 }, // Mobile la line chinna size
              height: 6, 
              borderRadius: 4, 
              background: 'linear-gradient(90deg, #1565c0, #42a5f5)', 
              mx: 'auto', 
              mt: { xs: 2, md: 3 } 
            }} 
          />
        </Box>

        {/* Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(auto-fit, minmax(280px, 1fr))' },
            gap: { xs: 3, md: 4 },
          }}
        >
          {featureCards.map((card, index) => (
            <Box key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <ServiceCard>
                <ImageWrapper>
                  <img src={card.image} alt={card.title} />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(255,255,255,0.9)',
                      px: 1.5,
                      py: 0.5,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5,
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      color: '#1565c0',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                  >
                    <CheckCircle sx={{ fontSize: 16 }} /> {card.tag}
                  </Box>
                </ImageWrapper>
                
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="h5" fontWeight={700} gutterBottom sx={{ color: '#2c3e50' }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, flexGrow: 1, lineHeight: 1.6 }}>
                    {card.desc}
                  </Typography>
                  
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<ArrowForward />}
                    onClick={() => handleOpen(card)}
                    sx={{
                      borderRadius: 50,
                      textTransform: 'none',
                      fontWeight: 600,
                      borderWidth: 2,
                      '&:hover': {
                        borderWidth: 2,
                        bgcolor: '#e3f2fd'
                      }
                    }}
                  >
                    {card.label}
                  </Button>
                </CardContent>
              </ServiceCard>
            </Box>
          ))}
        </Box>
      </Container>

      {/* Modern Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500, sx: { backgroundColor: 'rgba(0, 0, 0, 0.2)', backdropFilter: 'blur(4px)' } }}
      >
        <Fade in={open}>
          <StyledModalBox>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
              <Typography variant="h5" fontWeight={800} color="#1565c0">
                {modalContent.title}
              </Typography>
              <IconButton onClick={handleClose} size="small" sx={{ bgcolor: '#f5f5f5', '&:hover': { bgcolor: '#ffebee', color: '#d32f2f' } }}>
                <CloseIcon />
              </IconButton>
            </Box>
            
            <Box 
              component="img" 
              src={modalContent.image} 
              alt={modalContent.title}
              sx={{ 
                width: '100%', 
                height: 200, 
                objectFit: 'cover', 
                borderRadius: 4, 
                mb: 3,
                boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }}
            />

            <Typography variant="body1" color="text.secondary" paragraph lineHeight={1.8}>
              {modalContent.desc}
            </Typography>
            
            <Box mt={3} display="flex" justifyContent="flex-end">
              <Button
                onClick={handleClose}
                variant="contained"
                sx={{
                  borderRadius: 50,
                  px: 4,
                  background: 'linear-gradient(45deg, #1565c0, #42a5f5)',
                  boxShadow: '0 4px 12px rgba(33, 150, 243, 0.3)'
                }}
              >
                Close Details
              </Button>
            </Box>
          </StyledModalBox>
        </Fade>
      </Modal>
    </MainSection>
  );
};

export default OurService;
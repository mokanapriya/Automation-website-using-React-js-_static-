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

// const float = keyframes`
//   0%, 100% { transform: translateY(0); }
//   50% { transform: translateY(-20px); }
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

// const ColorBlob = styled(Box)`
//   position: absolute;
//   border-radius: 50%;
//   filter: blur(120px);
//   opacity: 0.35;
//   animation: ${float} 15s ease-in-out infinite;
//   z-index: 1;
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
//         background: 'linear-gradient(135deg, #f8bbd0, #b2ebf2, #ffe082)',
//         backgroundSize: '400% 400%',
//         animation: 'gradientShift 20s ease infinite',
//         '@keyframes gradientShift': {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       }}
//     >
//       {/* Bright Floating Blobs */}
//       <ColorBlob
//         sx={{ width: 300, height: 300, top: -100, left: -100, backgroundColor: '#f06292' }}
//       />
//       <ColorBlob
//         sx={{ width: 250, height: 250, bottom: -80, right: -50, backgroundColor: '#4dd0e1' }}
//       />
//       <ColorBlob
//         sx={{ width: 200, height: 200, top: 100, right: 100, backgroundColor: '#ffd54f' }}
//       />

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
//           <AnimatedCard
//             key={index}
//             sx={{ animationDelay: `${index * 0.2}s` }}
//           >
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
import {
  Box,
  CardContent,
  Typography,
  Button,
  Card,
  Modal,
  Backdrop,
  Fade,
} from '@mui/material';
import { useState } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { CheckCircle } from '@mui/icons-material';

// Animations
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// Styled Components
const AnimatedCard = styled(Card)`
  animation: ${fadeUp} 0.6s ease forwards;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-radius: 18px;
  overflow: hidden;
  background-color: #ffffffdd;
  backdrop-filter: blur(6px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
  }
`;

const AnimatedHeading = styled(Typography)`
  animation: ${fadeUp} 1s ease-out;
`;

const AnimatedButton = styled(Button)`
  animation: ${pulse} 2s infinite;
`;

const featureCards = [
  {
    title: 'On Time Delivery',
    image: '/image/on time delivery.jpg',
    label: 'Learn More',
    link: '/services/delivery',
    desc: 'We ensure all deliveries are executed promptly with strict timelines.',
    tag: 'Logistics',
  },
  {
    title: 'Product Quality',
    image: '/image/manufacturing.png',
    label: 'Explore',
    link: '/services/manufacturing',
    desc: 'Expertise in high-precision CNC machining for various industries.',
    tag: 'Production',
  },
  {
    title: 'Adaption to Technology',
    image: '/image/Atech.png',
    label: 'Details',
    link: '/services/ethics',
    desc: 'We believe in transparency, fairness, and long-term partnerships.',
    tag: 'Values',
  },
  {
    title: 'Expertise Team',
    image: '/image/people.png',
    label: 'Get Info',
    link: '/services/payment',
    desc: 'Flexible and customer-friendly payment solutions.',
    tag: 'Finance',
  },
];

const OurService = () => {
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleOpen = (card) => {
    setModalContent(card);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        py: 10,
        px: 3,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#ffffff', // White background
      }}
    >
      {/* Heading */}
      <AnimatedHeading
        variant="h4"
        fontWeight={700}
        align="center"
        gutterBottom
        sx={{ color: '#0d47a1', zIndex: 2, position: 'relative' }}
      >
        Our Services
      </AnimatedHeading>

      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          mb: 6,
          maxWidth: 600,
          mx: 'auto',
          color: '#333',
          zIndex: 2,
          position: 'relative',
        }}
      >
        Discover the key pillars that drive our business and deliver consistent value to our customers.
      </Typography>

      {/* Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 4,
          maxWidth: 1200,
          mx: 'auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {featureCards.map((card, index) => (
          <AnimatedCard key={index} sx={{ animationDelay: `${index * 0.2}s` }}>
            <CardContent sx={{ textAlign: 'center', p: 3 }}>
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                }}
              />
              <Typography variant="h6" fontWeight={700} sx={{ mb: 1 }}>
                {card.title}
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#666' }}>
                {card.desc}
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  mb: 2,
                  color: '#1976d2',
                }}
              >
                <CheckCircle fontSize="small" /> {card.tag}
              </Typography>
              <AnimatedButton
                variant="outlined"
                color="warning"
                onClick={() => handleOpen(card)}
              >
                {card.label}
              </AnimatedButton>
            </CardContent>
          </AnimatedCard>
        ))}
      </Box>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              zIndex: 100,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {modalContent.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {modalContent.desc}
            </Typography>
            <Button
              onClick={handleClose}
              sx={{ mt: 2 }}
              variant="contained"
              color="primary"
            >
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default OurService;

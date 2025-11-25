
// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Divider,
//   Grid,
//   Paper
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../App.css';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';

// const product = [
//   {
//     img: '/image/1.png',
//     alt: 'Double-Groove Spacer or Pulley Spacer',
//     desc: 'Used in pulley systems to maintain spacing and alignment.',
//   },
//   {
//     img: '/image/2.png',
//     alt: 'Single-Bore Precision Spacer',
//     desc: 'Provides precise spacing for rotating machinery, typically used in mechanical assemblies.',
//   },
//   {
//     img: '/image/3.png',
//     alt: 'Central Bore Bushing or Sleeve',
//     desc: 'Ensures proper alignment and reduces friction in rotating shafts.',
//   },
//   {
//     img: '/image/4.png',
//     alt: 'External Threaded Lock Nut / Slotted Retaining Ring',
//     desc: 'Used in power transmission systems, offering dual groove functionality for improved load balance.',
//   },
// ];

// const slides = [
//   {
//     title: 'We Deliver Precision & Quality',
//     highlight: 'Deliver',
//   },
//   {
//     title: 'We Provide The Best Industrial Solution',
//     highlight: 'Provide',
//   },
// ];

// const customers = [
//   { image: '/image/caompaeroIndia.png' },
//   { image: '/image/janatics.jpg' },
//   { image: '/image/mak.png' },
//   { image: '/image/bezares.png' },
//   { image: '/image/alpha.png' },
// ];

// const visionMissionData = [
//   {
//     title: 'Our Vision',
//     img: '/image/image.png',
//     details: (
//       <Box component="ul" sx={{ pl: 2, mt: 1 }}>
//         <div className="infra-description" data-aos="fade-up" data-aos-delay="300">
//           <div className="infra-point" data-aos="zoom-in-up" data-aos-delay="400">
//             To be the leading provider of precision machining solutions, driving innovation in manufacturing and exceeding customer expectations through unparalleled quality, reliability, and technological expertise.
//           </div>
//         </div>
//       </Box>
//     ),
//   },
//   {
//     title: 'Our Mission',
//     img: '/image/mission.png',
//     details: (
//       <Box component="ul" sx={{ pl: 2, mt: 1 }}>
//         <div className="infra-description" data-aos="fade-up" data-aos-delay="300">
//           <div className="infra-point" data-aos="zoom-in-up" data-aos-delay="400">
//             <strong>Precision Excellence</strong>: Utilizing state-of-the-art technology and skilled craftsmanship.<br />
//             <strong>Customer Satisfaction</strong>: Building long-term relationships by exceeding expectations.<br />
//             <strong>Innovation</strong>: Embracing new technologies and continuous improvement.<br />
//             <strong>Integrity</strong>: Operating with honesty and high ethical standards.<br />
//             <strong>Environmental Responsibility</strong>: Minimizing environmental impact and promoting sustainability.<br />
//             <strong>Employee Growth</strong>: Supporting the development and well-being of our team.
//           </div>
//         </div>
//       </Box>
//     ),
//   },
// ];

// const Home = () => {
//   const [showAllProducts, setShowAllProducts] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 600 });
//   }, []);

//   return (
//     <div className="font-roboto text-black" style={{ overflowX: 'hidden' }}>
//       {/* Hero Carousel with Gradient */}
//       <Box
//         sx={{
//           position: 'relative',
//           overflow: 'hidden',
//           background: 'linear-gradient(135deg, #f8bbd0, #b2ebf2, #ffe082)',
//           backgroundSize: '400% 400%',
//           animation: 'gradientShift 20s ease infinite',
//           py: 4,
//           px: 3,
//           '@keyframes gradientShift': {
//             '0%': { backgroundPosition: '0% 50%' },
//             '50%': { backgroundPosition: '100% 50%' },
//             '100%': { backgroundPosition: '0% 50%' },
//           },
//         }}
//       >
//         <Carousel
//           showArrows={false}
//           showThumbs={false}
//           infiniteLoop
//           autoPlay
//           interval={5000}
//           transitionTime={1000}
//           showStatus={false}
//           stopOnHover={false}
//           swipeable
//         >
//           {slides.map((slide, index) => (
//             <Box
//               key={index}
//               sx={{
//                 height: { xs: '250px', md: '350px' },
//                 maxWidth: '800px',
//                 mx: 'auto',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 textAlign: 'center',
//                 px: 2,
//               }}
//             >
//               <Container maxWidth="md">
//                 <Typography
//                   variant="h5"
//                   fontWeight={600}
//                   sx={{ mb: 2, color: '#2c3e50' }}
//                 >
//                   We{' '}
//                   <span style={{ color: '#f06292' }}>
//                     {slide.highlight}
//                   </span>{' '}
//                   {slide.title.split(' ').slice(2).join(' ')}
//                 </Typography>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
//                   <Button component={Link} to="/about" variant="contained" color="secondary">
//                     Our Company
//                   </Button>
//                   <Button component={Link} to="/ContactUs" variant="outlined" color="secondary">
//                     Contact Us
//                   </Button>
//                 </Box>
//               </Container>
//             </Box>
//           ))}
//         </Carousel>
//       </Box>

//       {/* All sections below carousel have white background */}
//       <Box sx={{ backgroundColor: '#ffffff' }}>
//         {/* Vision & Mission Section */}
//         <Box sx={{ py: 10, px: { xs: 2, md: 8 }, background: '#ffffff' }}>
//           {visionMissionData.map((item, idx) => {
//             const isEven = idx % 2 === 1;
//             return (
//               <Grid
//                 container
//                 key={idx}
//                 spacing={4}
//                 direction={{ xs: 'column', md: isEven ? 'row-reverse' : 'row' }}
//                 alignItems="center"
//                 justifyContent="center"
//                 data-aos={isEven ? 'fade-left' : 'fade-right'}
//                 data-aos-delay={idx * 150}
//                 sx={{ mb: 10 }}
//               >
//                 <Grid item xs={12} md={6}>
//                   <Paper
//                     elevation={3}
//                     sx={{
//                       borderRadius: 3,
//                       overflow: 'hidden',
//                       transition: 'transform 0.3s ease',
//                       '&:hover': {
//                         transform: 'scale(1.03)',
//                         boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
//                       },
//                     }}
//                   >
//                     <Box
//                       component="img"
//                       src={item.img}
//                       alt={item.title}
//                       sx={{
//                         width: '100%',
//                         height: { xs: 220, sm: 280, md: 300 },
//                         objectFit: 'cover',
//                       }}
//                     />
//                   </Paper>
//                 </Grid>
//                 <Grid item xs={12} md={6}>
//                   <Typography variant="h5" fontWeight="600" color="#334e68" gutterBottom>
//                     {item.title}
//                   </Typography>
//                   <Divider sx={{ mb: 2, borderColor: '#bcccdc', width: 60, borderWidth: 1.5, borderRadius: 1 }} />
//                   <Typography variant="body1" color="#627d98" sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
//                     {item.details}
//                   </Typography>
//                 </Grid>
//               </Grid>
//             );
//           })}
//         </Box>

//         {/* Our Product Section */}
//         <Box sx={{ background: '#ffffff', px: 3, py: 6, textAlign: 'center' }}>
//           <Typography variant="h4" fontWeight={900} color="primary" gutterBottom data-aos="fade-down">
//             Our Product
//           </Typography>
//           <Divider
//             sx={{
//               mx: 'auto',
//               width: 80,
//               borderBottomWidth: 3,
//               borderColor: 'primary.main',
//               mb: 4,
//             }}
//           />
//           <Box
//             sx={{
//               display: 'flex',
//               alignItems: 'center',
//               overflowX: 'auto',
//               gap: 4,
//               pb: 4,
//               px: 2,
//             }}
//           >
//             {(showAllProducts ? product : product.slice(0, 4)).map((prod, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   flex: '0 0 auto',
//                   width: 250,
//                   borderRadius: 2,
//                   boxShadow: 3,
//                   backgroundColor: 'white',
//                   p: 2,
//                   textAlign: 'center',
//                 }}
//                 data-aos="fade-up"
//                 data-aos-delay={index * 100}
//               >
//                 <img
//                   src={prod.img}
//                   alt={prod.alt}
//                   style={{
//                     width: '100%',
//                     height: 160,
//                     objectFit: 'cover',
//                     borderRadius: 8,
//                   }}
//                 />
//                 <Typography variant="subtitle1" fontWeight={600} mt={1}>
//                   {prod.alt}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {prod.desc}
//                 </Typography>
//               </Box>
//             ))}

//             {!showAllProducts && (
//               <Box
//                 sx={{
//                   flex: '0 0 auto',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   width: 80,
//                   height: 160,
//                 }}
//               >
//                 <Button
//                   component={Link}
//                   to="/OurProduct"
//                   variant="contained"
//                   color="primary"
//                   sx={{
//                     width: 50,
//                     height: 50,
//                     minWidth: 0,
//                     fontSize: 24,
//                     borderRadius: '50%',
//                     p: 0,
//                   }}
//                 >
//                   +
//                 </Button>
//               </Box>
//             )}
//           </Box>
//         </Box>

//         {/* Post Processes Section */}
//         <Box
//           sx={{
//             py: 6,
//             px: { xs: 2, md: 8 },
//             background: '#ffffff',
//           }}
//         >
//           <Typography
//             variant="h4"
//             fontWeight={700}
//             color="text.primary"
//             gutterBottom
//             data-aos="fade-down"
//           >
//             Post Processes & Machining
//           </Typography>
//           <Divider
//             sx={{
//               mb: 3,
//               width: 100,
//               borderBottomWidth: 3,
//               borderColor: 'secondary.main',
//             }}
//           />
//           <Typography
//             variant="body1"
//             color="text.secondary"
//             sx={{ mb: 4, fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}
//             data-aos="fade-up"
//             data-aos-delay="100"
//           >
//             We have well-defined out-sourcing processes with quality suppliers to deliver
//             the materials required by our customers. Various post machining processes we deal with are:
//           </Typography>

//           <Grid container spacing={3} justifyContent="center">
//             {[
//               'Heattreatment', 'Case hardening', 'Nitrating', 'Grinding', 'Gear hobbing', 'EDM/Wire Cutting',
//               'Broaching', 'Powder Coating', 'Painting', 'Blackening', 'Phosphating',
//               'Various types of plating – chrome plating, zinc plating, etc.',
//             ].map((process, idx) => (
//               <Grid item xs={12} sm={6} md={4} key={idx}>
//                 <Box
//                   sx={{
//                     p: 2,
//                     borderRadius: 3,
//                     backgroundColor: '#ffffff',
//                     boxShadow: 3,
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: 1.5,
//                     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                     '&:hover': {
//                       transform: 'translateY(-6px)',
//                       boxShadow: 6,
//                       backgroundColor: '#f1f8e9',
//                     },
//                   }}
//                   data-aos="zoom-in-up"
//                   data-aos-delay={100 + idx * 70}
//                 >
//                   <span style={{ fontSize: '1.5rem', color: '#558b2f' }}>➤</span>
//                   <Typography variant="body1" fontWeight={600}>
//                     {process}
//                   </Typography>
//                 </Box>
//               </Grid>
//             ))}
//           </Grid>
//         </Box>

//         {/* Customers Section */}
//         <Box sx={{ py: 6, backgroundColor: '#ffffff', textAlign: 'center' }}>
//           <Typography variant="h4" fontWeight={600} color="text.primary" gutterBottom data-aos="fade-down">
//             Our Customers
//           </Typography>
//           <Divider sx={{ mx: 'auto', width: 100, borderBottomWidth: 3, borderColor: 'primary.main', mb: 4 }} />
//           <Box
//             className="customer-frame"
//             sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}
//           >
//             {customers.map((customer, index) => (
//               <img
//                 key={index}
//                 src={customer.image}
//                 alt={`Customer ${index}`}
//                 style={{ width: 100, height: 'auto', objectFit: 'contain' }}
//               />
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Divider,
//   Grid,
//   Paper
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../App.css';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { FaWhatsapp } from 'react-icons/fa';

// const product = [
//   {
//     img: '/image/1.png',
//     alt: 'Double-Groove Spacer or Pulley Spacer',
//     desc: 'Used in pulley systems to maintain spacing and alignment.',
//   },
//   {
//     img: '/image/2.png',
//     alt: 'Single-Bore Precision Spacer',
//     desc: 'Provides precise spacing for rotating machinery, typically used in mechanical assemblies.',
//   },
//   {
//     img: '/image/3.png',
//     alt: 'Central Bore Bushing or Sleeve',
//     desc: 'Ensures proper alignment and reduces friction in rotating shafts.',
//   },
//   {
//     img: '/image/4.png',
//     alt: 'External Threaded Lock Nut / Slotted Retaining Ring',
//     desc: 'Used in power transmission systems, offering dual groove functionality for improved load balance.',
//   },
// ];

// const slides = [
//   {
//     title: 'We Deliver Precision & Quality',
//     highlight: 'Deliver',
//   },
//   {
//     title: 'We Provide The Best Industrial Solution',
//     highlight: 'Provide',
//   },
// ];

// const visionMissionData = [
//   {
//     title: 'Our Vision',
//     img: '/image/image.png',
//     details: (
//       <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
//         To be the leading provider of precision machining solutions, driving innovation in manufacturing and exceeding customer expectations through unparalleled quality, reliability, and technological expertise.
//       </Typography>
//     ),
//   },
//   {
//     title: 'Our Mission',
//     img: '/image/mission.png',
//     details: (
//       <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
//         <strong>Precision Excellence:</strong> Utilizing state-of-the-art technology and skilled craftsmanship.<br />
//         <strong>Customer Satisfaction:</strong> Building long-term relationships by exceeding expectations.<br />
//         <strong>Innovation:</strong> Embracing new technologies and continuous improvement.<br />
//         <strong>Integrity:</strong> Operating with honesty and high ethical standards.<br />
//         <strong>Environmental Responsibility:</strong> Minimizing environmental impact and promoting sustainability.<br />
//         <strong>Employee Growth:</strong> Supporting the development and well-being of our team.
//       </Typography>
//     ),
//   },
// ];

// const Home = () => {
//   const [showAllProducts, setShowAllProducts] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 600 });
//   }, []);

//   return (
//     <div style={{ overflowX: 'hidden' }}>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           position: 'relative',
//           background: 'linear-gradient(135deg, #f8bbd0, #b2ebf2, #ffe082)',
//           backgroundSize: '400% 400%',
//           animation: 'gradientShift 20s ease infinite',
//           py: 4,
//           px: 3,
//           '@keyframes gradientShift': {
//             '0%': { backgroundPosition: '0% 50%' },
//             '50%': { backgroundPosition: '100% 50%' },
//             '100%': { backgroundPosition: '0% 50%' },
//           },
//         }}
//       >
//         <Carousel
//           showArrows={false}
//           showThumbs={false}
//           infiniteLoop
//           autoPlay
//           interval={5000}
//           transitionTime={1000}
//           showStatus={false}
//           stopOnHover={false}
//           swipeable
//         >
//           {slides.map((slide, index) => (
//             <Box
//               key={index}
//               sx={{
//                 height: { xs: '250px', md: '350px' },
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <Container maxWidth="md" sx={{ textAlign: 'center' }}>
//                 <Typography variant="h5" fontWeight={600} sx={{ color: '#2c3e50', mb: 2 }}>
//                   We <span style={{ color: '#f06292' }}>{slide.highlight}</span>{' '}
//                   {slide.title.split(' ').slice(2).join(' ')}
//                 </Typography>
//                 <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
//                   <Button component={Link} to="/about" variant="contained" color="secondary">
//                     Our Company
//                   </Button>
//                   <Button component={Link} to="/ContactUs" variant="outlined" color="secondary">
//                     Contact Us
//                   </Button>
//                 </Box>
//               </Container>
//             </Box>
//           ))}
//         </Carousel>
//       </Box>

//       {/* Vision & Mission */}
//       <Box sx={{ py: 10, px: { xs: 2, md: 8 } }}>
//         {visionMissionData.map((item, idx) => {
//           const isEven = idx % 2 === 1;
//           return (
//             <Grid
//               container
//               spacing={4}
//               direction={{ xs: 'column', md: isEven ? 'row-reverse' : 'row' }}
//               alignItems="center"
//               justifyContent="center"
//               data-aos={isEven ? 'fade-left' : 'fade-right'}
//               data-aos-delay={idx * 150}
//               sx={{ mb: 10 }}
//               key={idx}
//             >
//               <Grid item xs={12} md={6}>
//                 <Paper elevation={3} sx={{ borderRadius: 3 }}>
//                   <Box
//                     component="img"
//                     src={item.img}
//                     alt={item.title}
//                     sx={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 3 }}
//                   />
//                 </Paper>
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Typography variant="h5" fontWeight={600} gutterBottom>
//                   {item.title}
//                 </Typography>
//                 <Divider sx={{ mb: 2, width: 60 }} />
//                 {item.details}
//               </Grid>
//             </Grid>
//           );
//         })}
//       </Box>

//       {/* Product Section */}
//       <Box sx={{ px: 3, py: 6, textAlign: 'center' }}>
//         <Typography variant="h4" fontWeight={900} color="primary" gutterBottom data-aos="fade-down">
//           Our Product
//         </Typography>
//         <Divider sx={{ mx: 'auto', width: 80, borderBottomWidth: 3, borderColor: 'primary.main', mb: 4 }} />
//         <Box sx={{ display: 'flex', alignItems: 'center', overflowX: 'auto', gap: 4, pb: 4 }}>
//           {(showAllProducts ? product : product.slice(0, 4)).map((prod, index) => (
//             <Box
//               key={index}
//               sx={{
//                 flex: '0 0 auto',
//                 width: 250,
//                 borderRadius: 2,
//                 boxShadow: 3,
//                 backgroundColor: 'white',
//                 p: 2,
//                 textAlign: 'center',
//               }}
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               <img src={prod.img} alt={prod.alt} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
//               <Typography variant="subtitle1" fontWeight={600} mt={1}>
//                 {prod.alt}
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 {prod.desc}
//               </Typography>
//             </Box>
//           ))}
//           {!showAllProducts && (
//             <Box sx={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 80 }}>
//               <Button
//                 component={Link}
//                 to="/OurProduct"
//                 variant="contained"
//                 color="primary"
//                 sx={{ width: 50, height: 50, borderRadius: '50%' }}
//               >
//                 +
//               </Button>
//             </Box>
//           )}
//         </Box>
//       </Box>

//       {/* WhatsApp Floating Button */}
//       <a
//         href="https://wa.me/8678966930?text=Hello!%20I'm%20interested%20in%20your%20services."
//         target="_blank"
//         rel="noopener noreferrer"
//         style={{
//           position: 'fixed',
//           bottom: 20,
//           right: 20,
//           zIndex: 1000,
//           backgroundColor: '#25D366',
//           color: 'white',
//           borderRadius: '50%',
//           width: 60,
//           height: 60,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
//           textDecoration: 'none',
//         }}
//       >
//         <FaWhatsapp size={30} />
//       </a>
//     </div>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Grid,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaWhatsapp } from 'react-icons/fa';

// Product Data
const product = [
  {
    img: '/image/1.png',
    alt: 'Double-Groove Spacer or Pulley Spacer',
    desc: 'Used in pulley systems to maintain spacing and alignment.',
  },
  {
    img: '/image/2.png',
    alt: 'Single-Bore Precision Spacer',
    desc: 'Provides precise spacing for rotating machinery, typically used in mechanical assemblies.',
  },
  {
    img: '/image/3.png',
    alt: 'Central Bore Bushing or Sleeve',
    desc: 'Ensures proper alignment and reduces friction in rotating shafts.',
  },
  {
    img: '/image/4.png',
    alt: 'External Threaded Lock Nut / Slotted Retaining Ring',
    desc: 'Used in power transmission systems, offering dual groove functionality for improved load balance.',
  },
];

// Hero Slides
const slides = [
  {
    title: 'We Deliver Precision & Quality',
    highlight: 'Deliver',
  },
  {
    title: 'We Provide The Best Industrial Solution',
    highlight: 'Provide',
  },
];
 const customers = [
   { image: '/image/caompaeroIndia.png' },
   { image: '/image/janatics.jpg' },
   { image: '/image/mak.png' },
   { image: '/image/bezares.png' },
   { image: '/image/alpha.png' },
 ];

// Vision and Mission Content
const visionMissionData = [
  {
       title: 'Our Vision',
    img: '/image/image.png',
    details: (
      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
        <div className="infra-description" data-aos="fade-up" data-aos-delay="300">
          <div className="infra-point" data-aos="zoom-in-up" data-aos-delay="400">
            To be the leading provider of precision machining solutions, driving innovation in manufacturing and exceeding customer expectations through unparalleled quality, reliability, and technological expertise.
          </div>
        </div>
      </Box>

    ),
  },
  {
    title: 'Our Mission',
    img: '/image/mission.png',
    details: (
      <Box component="ul" sx={{ pl: 2, mt: 1 }}>
        <div className="infra-description" data-aos="fade-up" data-aos-delay="300">
          <div className="infra-point" data-aos="zoom-in-up" data-aos-delay="400">
            <strong>Precision Excellence</strong>: Utilizing state-of-the-art technology and skilled craftsmanship.<br />
            <strong>Customer Satisfaction</strong>: Building long-term relationships by exceeding expectations.<br />
            <strong>Innovation</strong>: Embracing new technologies and continuous improvement.<br />
            <strong>Integrity</strong>: Operating with honesty and high ethical standards.<br />
            <strong>Environmental Responsibility</strong>: Minimizing environmental impact and promoting sustainability.<br />
            <strong>Employee Growth</strong>: Supporting the development and well-being of our team.
          </div>
        </div>
      </Box>
      
    ),
  },
];

const Home = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  return (
    <div style={{ overflowX: 'hidden' }}>
      {/* Hero Section */}
      {/* <Box
        sx={{
          position: 'relative',
          background: 'linear-gradient(135deg, #f8bbd0, #b2ebf2, #ffe082)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite',
          py: 4,
          px: 3,
          '@keyframes gradientShift': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        <Carousel
          showArrows={false}
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={5000}
          transitionTime={1000}
          showStatus={false}
          stopOnHover={false}
          swipeable
        >
          {slides.map((slide, index) => (
            <Box
              key={index}
              sx={{
                height: { xs: '250px', md: '350px' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                <Typography variant="h5" fontWeight={600} sx={{ color: '#2c3e50', mb: 2 }}>
                  We <span style={{ color: '#f06292' }}>{slide.highlight}</span>{' '}
                  {slide.title.split(' ').slice(2).join(' ')}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                  <Button component={Link} to="/about" variant="contained" color="secondary">
                    Our Company
                  </Button>
                  <Button component={Link} to="/ContactUs" variant="outlined" color="secondary">
                    Contact Us
                  </Button>
                </Box>
              </Container>
            </Box>
          ))}
        </Carousel>
      </Box> */}
<Box
  sx={{
    position: 'relative',
    py: 4,
    '@keyframes gradientShift': {
      '0%': { backgroundPosition: '0% 50%' },
      '50%': { backgroundPosition: '100% 50%' },
      '100%': { backgroundPosition: '0% 50%' },
    },
    background: 'linear-gradient(135deg, #b2ebf2, #fce4ec, #ffe082)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 20s ease infinite',
  }}
>
  <Carousel
    showArrows={false}
    showThumbs={false}
    infiniteLoop
    autoPlay
    interval={6000}
    transitionTime={1000}
    showStatus={false}
    stopOnHover={false}
    swipeable
  >
    {slides.map((slide, index) => (
      <Box
        key={index}
        sx={{
          position: 'relative',
          height: { xs: 300, md: 400 },
          backgroundImage: `url('/image/hero${index + 1}.jpg')`, // Optional: add custom hero background images
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1,
          }}
        />
        <Container sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Typography
            variant="h4"
            fontWeight={700}
            color="white"
            sx={{ mb: 2 }}
          >
            We{' '}
            <Box component="span" sx={{ color: '#f06292' }}>
              {slide.highlight}
            </Box>{' '}
            {slide.title.split(' ').slice(2).join(' ')}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: 2,
              flexWrap: 'wrap',
              mt: 2,
            }}
          >
            <Button
              component={Link}
              to="/about"
              variant="contained"
              color="secondary"
              sx={{ borderRadius: 5, px: 3 }}
            >
              Our Company
            </Button>
            <Button
              component={Link}
              to="/ContactUs"
              variant="outlined"
              color="secondary"
              sx={{ borderRadius: 5, px: 3, color: 'white', borderColor: 'white' }}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    ))}
  </Carousel>
</Box>

      {/* Vision & Mission Section */}
      <Box sx={{ py: 10, px: { xs: 2, md: 8 } }}>
        {visionMissionData.map((item, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <Grid
              container
              spacing={4}
              direction={{ xs: 'column', md: isEven ? 'row-reverse' : 'row' }}
              alignItems="center"
              justifyContent="center"
              data-aos={isEven ? 'fade-left' : 'fade-right'}
              data-aos-delay={idx * 150}
              sx={{ mb: 10 }}
              key={idx}
            >
              <Grid item xs={12} md={6}>
                <Paper elevation={3} sx={{ borderRadius: 3 }}>
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    sx={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 3 }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5" fontWeight={600} gutterBottom>
                  {item.title}
                </Typography>
                <Divider sx={{ mb: 2, width: 60 }} />
                {item.details}
              </Grid>
            </Grid>
          );
        })}
      </Box>

      {/* Product Section */}
    
{/* 🟦 OUR PRODUCT SECTION */}
<Box sx={{ px: 3, py: 6 }}>
  <Typography
    variant="h4"
    fontWeight={900}
    color="primary"
    gutterBottom
    textAlign="center"
    data-aos="fade-down"
  >
    Our Product
  </Typography>
  <Divider
    sx={{
      mx: 'auto',
      width: 80,
      borderBottomWidth: 3,
      borderColor: 'primary.main',
      mb: 4,
    }}
  />

  {/* ✅ Wrapper flexbox: grid on left, + button on right */}
  <Box
    sx={{
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 3,
    }}
  >
    {/* Product Grid */}
    <Box className="product-grid" sx={{ flex: '1 1 auto', maxWidth: '1150px' }}>
      {product.slice(0, 4).map((prod, index) => (
        <Box
          key={index}
          className="product-card"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <div className="product-thumb">
            <img src={prod.img} alt={prod.alt} className="product-image" />
            <div className="overlay">
              <Button
                variant="contained"
                color="secondary"
                size="small"
                className="view-button"
              >
                🔗
              </Button>
            </div>
          </div>
          <Typography variant="subtitle1" fontWeight={600} mt={1}>
            {prod.alt}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {prod.desc}
          </Typography>
        </Box>
      ))}
    </Box>

    {/* ✅ Floating “+” Button beside grid */}
   <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
    <Button
      component={Link}
      to="/OurProduct"
      variant="contained"
      color="primary"
      sx={{
        width: 70,
        height: 70,
        borderRadius: '50%',
        fontSize: '2rem',
        boxShadow: '0 6px 12px rgba(0,0,0,0.2)',
        '&:hover': {
          transform: 'scale(1.1)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
        },
        transition: 'all 0.3s ease',
      }}
    >
      +
    </Button>
  </Box>

  </Box>
</Box>

        {/* Post Processes Section */}
          <Box 
          sx={{
            py: 6,
            px: { xs: 2, md: 8 },
            background: '#ffffff',
          }}
        >
       
  <Typography
    variant="h4"
    fontWeight={700}
    color="text.primary"
    gutterBottom
    data-aos="fade-down"
  >
    Post Processes & Machining
  </Typography>
  <Divider
    sx={{
      width: 100,
      height: 4,
      mx: 'auto',
      backgroundColor: 'secondary.main',
      borderRadius: 2,
    }}
  />


          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mb: 4, fontSize: '1.1rem', maxWidth: 800, mx: 'auto' }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            We have well-defined out-sourcing processes with quality suppliers to deliver
            the materials required by our customers. Various post machining processes we deal with are:
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            {[
              'Heattreatment', 'Case hardening', 'Nitrating', 'Grinding', 'Gear hobbing', 'EDM/Wire Cutting',
              'Broaching', 'Powder Coating', 'Painting', 'Blackening', 'Phosphating',
              'Various types of plating chrome plating, zinc plating, etc.',
            ].map((process, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: 3,
                    backgroundColor: '#ffffff',
                    boxShadow: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: 6,
                      backgroundColor: '#f1f8e9',
                    },
                  }}
                  data-aos="zoom-in-up"
                  data-aos-delay={100 + idx * 70}
                >
                  <span style={{ fontSize: '1.5rem', color: '#558b2f' }}>➤</span>
                  <Typography variant="body1" fontWeight={600}>
                    {process}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>

     
         <a
  href="https://wa.me/9655821758?text=Hello!%20I'm%20interested%20in%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  style={{
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 1000, // ✅ Ensure it's above everything
    backgroundColor: '#25D366',
    color: 'white',
    borderRadius: '50%',
    width: 60,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    textDecoration: 'none',
  }}
>
  <FaWhatsapp size={30} />
</a>
<Box sx={{ py: 6, backgroundColor: '#ffffff', textAlign: 'center' }}>
           <Typography variant="h4" fontWeight={600} color="text.primary" gutterBottom data-aos="fade-down">
             Our Customers
           </Typography>
           <Divider sx={{ mx: 'auto', width: 100, borderBottomWidth: 3, borderColor: 'primary.main', mb: 4 }} />
           <Box
             className="customer-frame"
             sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}
           >
             {customers.map((customer, index) => (
               <img
                 key={index}
                 src={customer.image}
                 alt={`Customer ${index}`}
                 style={{ width: 100, height: 'auto', objectFit: 'contain' }}
               />
             ))}
           </Box>
         </Box>  

    
    </div>
  );
};

export default Home;

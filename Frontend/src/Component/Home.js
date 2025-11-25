// import React, { useEffect } from 'react';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Divider,
//   Grid,
//   Paper,
//   Card,
//   CardContent,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText,
// } from '@mui/material';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import '../App.css';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { FaWhatsapp, FaPlus, FaAngleRight } from 'react-icons/fa';

// // ✅ Product Data
// const product = [
//   {
//     img: '/image/1.png',
//     alt: 'Double-Groove Spacer',
//     desc: 'Used in pulley systems to maintain spacing and alignment.',
//   },
//   {
//     img: '/image/2.png',
//     alt: 'Precision Spacer',
//     desc: 'Provides precise spacing for rotating machinery.',
//   },
//   {
//     img: '/image/3.png',
//     alt: 'Central Bore Bushing',
//     desc: 'Ensures proper alignment and reduces friction in shafts.',
//   },
//   {
//     img: '/image/4.png',
//     alt: 'Lock Nut / Retaining Ring',
//     desc: 'Used in power transmission systems for load balance.',
//   },
// ];

// // ✅ Carousel Slides
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

// // ✅ FIXED Vision & Mission Data (Now uses 'points' array for bullet logic)
// const visionMissionData = [
//   {
//     title: 'Our Vision',
//     img: '/image/image.png',
//     points: [
//       "To be the leading provider of precision machining solutions.",
//       "Driving innovation in manufacturing processes.",
//       "Exceeding customer expectations through unparalleled quality.",
//       "Ensuring reliability and demonstrating technological expertise."
//     ],
//   },
//   {
//     title: 'Our Mission',
//     img: '/image/mission.png',
//     points: [
//       "Precision Excellence: Utilizing state-of-the-art technology and skilled craftsmanship.",
//       "Customer Satisfaction: Building long-term relationships by exceeding expectations.",
//       "Innovation: Embracing new technologies and continuous improvement.",
//       "Integrity: Operating with honesty and high ethical standards.",
//       "Environmental Responsibility: Minimizing environmental impact and promoting sustainability.",
//       "Employee Growth: Supporting the development and well-being of our team."
//     ],
//   },
// ];

// const Home = () => {
//   useEffect(() => {
//     AOS.init({ duration: 800, once: true });
//   }, []);

//   return (
//     <div style={{ overflowX: 'hidden' }}>
      
//       {/* ================= HERO SECTION ================= */}
//       <Box
//         sx={{
//           position: 'relative',
//           background: 'linear-gradient(135deg, #e3f2fd, #fce4ec, #fff8e1)',
//           backgroundSize: '400% 400%',
//           animation: 'gradientShift 20s ease infinite',
//           pt: 2,
//           pb: 6,
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
//           interval={6000}
//           transitionTime={1000}
//           showStatus={false}
//           stopOnHover={false}
//           swipeable
//         >
//           {slides.map((slide, index) => (
//             <Box
//               key={index}
//               sx={{
//                 height: { xs: 350, md: 500 },
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: 'transparent', 
//               }}
//             >
//               <Container maxWidth="md" sx={{ textAlign: 'center', zIndex: 2 }}>
//                 <Typography 
//                   variant="h3" 
//                   fontWeight={800} 
//                   sx={{ 
//                     mb: 3, 
//                     color: '#1a237e',
//                     fontSize: { xs: '2rem', md: '3rem' } 
//                   }}
//                 >
//                   We <span style={{ color: '#d81b60' }}>{slide.highlight}</span>{' '}
//                   {slide.title.split(' ').slice(2).join(' ')}
//                 </Typography>
                
//                 <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap', mt: 4 }}>
//                   <Button
//                     component={Link}
//                     to="/about"
//                     variant="contained"
//                     color="secondary"
//                     size="large"
//                     sx={{
//                       borderRadius: '50px',
//                       px: 5,
//                       py: 1.5,
//                       fontSize: '1rem',
//                       textTransform: 'none',
//                       boxShadow: '0 8px 15px rgba(216, 27, 96, 0.3)',
//                       transition: 'transform 0.3s',
//                       '&:hover': { transform: 'translateY(-3px)' }
//                     }}
//                   >
//                     Our Company
//                   </Button>
//                   <Button
//                     component={Link}
//                     to="/ContactUs"
//                     variant="outlined"
//                     color="secondary"
//                     size="large"
//                     sx={{
//                       borderRadius: '50px',
//                       px: 5,
//                       py: 1.5,
//                       fontSize: '1rem',
//                       textTransform: 'none',
//                       borderWidth: 2,
//                       '&:hover': { borderWidth: 2, backgroundColor: 'rgba(216, 27, 96, 0.05)' }
//                     }}
//                   >
//                     Contact Us
//                   </Button>
//                 </Box>
//               </Container>
//             </Box>
//           ))}
//         </Carousel>
//       </Box>

//       {/* ================= VISION & MISSION ================= */}
//       <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: '#f9f9f9' }}>
//         <Container maxWidth="lg">
//             <Typography variant="h4" fontWeight={800} color="primary" textAlign="center" gutterBottom data-aos="fade-down">
//               Our Vision & Mission
//             </Typography>
//             <Divider sx={{ mx: 'auto', width: 80, borderBottomWidth: 4, borderColor: 'secondary.main', mb: 8, borderRadius: 2 }} />

//             {visionMissionData.map((item, idx) => (
//             <Grid
//                 container
//                 spacing={6}
//                 alignItems="stretch" 
//                 justifyContent="center"
//                 key={idx}
//                 // idx 0 (Vision) = row (Image Left), idx 1 (Mission) = row-reverse (Image Right)
//                 direction={idx % 2 === 0 ? 'row' : 'row-reverse'} 
//                 sx={{ mb: 8 }}
//                 data-aos="fade-up"
//             >
//                 {/* IMAGE BOX */}
//                 <Grid item xs={12} md={6}>
//                   <Paper
//                       elevation={5}
//                       sx={{
//                       borderRadius: 4,
//                       overflow: 'hidden',
//                       height: '100%',
//                       minHeight: 350,
//                       transition: 'transform 0.4s ease, box-shadow 0.4s ease',
//                       '&:hover': { 
//                           transform: 'scale(1.02)',
//                           boxShadow: '0 15px 30px rgba(0,0,0,0.2)' 
//                       },
//                       }}
//                   >
//                       <img 
//                         src={item.img} 
//                         alt={item.title} 
//                         style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//                       />
//                   </Paper>
//                 </Grid>

//                 {/* CONTENT BOX (With Bullet Points) */}
//                 <Grid item xs={12} md={6}>
//                   <Paper
//                     elevation={3}
//                     sx={{
//                         p: { xs: 3, md: 5 },
//                         height: '100%',
//                         borderRadius: 4,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         justifyContent: 'center',
//                         backgroundColor: '#ffffff',
//                         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                         borderLeft: `6px solid #1976d2`, // Nice accent border
//                         '&:hover': {
//                             transform: 'translateY(-5px)',
//                             boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
//                         },
//                     }}
//                   >
//                       <Typography variant="h4" fontWeight={700} color="#2c3e50" gutterBottom>
//                         {item.title}
//                       </Typography>
//                       <Divider sx={{ width: 60, height: 3, backgroundColor: '#1976d2', mb: 3, borderRadius: 1 }} />
                      
//                       {/* Bullet Point List */}
//                       <List>
//                         {item.points.map((point, i) => {
//                             // Splitting for Bold text logic (e.g., "Title: Description")
//                             const parts = point.split(':');
//                             const hasBoldTitle = parts.length > 1;

//                             return (
//                                 <ListItem key={i} alignItems="flex-start" sx={{ px: 0, py: 0.5 }}>
//                                     <ListItemIcon sx={{ minWidth: 35, mt: 0.5 }}>
//                                         <FaAngleRight color="#d81b60" size={20} />
//                                     </ListItemIcon>
//                                     <ListItemText
//                                         primary={
//                                             <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6, fontSize: '1.05rem' }}>
//                                                 {hasBoldTitle ? (
//                                                     <>
//                                                         <strong style={{ color: '#333' }}>{parts[0]}:</strong>
//                                                         {parts.slice(1).join(':')}
//                                                     </>
//                                                 ) : (
//                                                     point
//                                                 )}
//                                             </Typography>
//                                         }
//                                     />
//                                 </ListItem>
//                             );
//                         })}
//                       </List>
//                   </Paper>
//                 </Grid>
//             </Grid>
//             ))}
//         </Container>
//       </Box>

//       {/* ================= PRODUCTS SECTION ================= */}
//       <Box sx={{ py: 10, backgroundColor: '#ffffff' }}>
//         <Container maxWidth="xl">
//           <Typography variant="h4" fontWeight={900} color="primary" textAlign="center" gutterBottom data-aos="fade-down">
//             Our Products
//           </Typography>
//           <Divider sx={{ mx: 'auto', width: 80, borderBottomWidth: 4, borderColor: 'secondary.main', mb: 6, borderRadius: 2 }} />

//           <Grid container spacing={4} justifyContent="center" alignItems="stretch">
//             {/* Render First 4 Products */}
//             {product.slice(0, 4).map((prod, index) => (
//               <Grid item xs={12} sm={6} md={4} lg={2.4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
//                 <Card
//                   sx={{
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     borderRadius: 3,
//                     boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
//                     transition: '0.3s',
//                     '&:hover': {
//                       transform: 'translateY(-8px)',
//                       boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
//                     },
//                   }}
//                 >
//                   <Box sx={{ overflow: 'hidden', height: 180 }}>
//                     <Box
//                       component="img"
//                       src={prod.img}
//                       alt={prod.alt}
//                       sx={{
//                         width: '100%',
//                         height: '100%',
//                         objectFit: 'cover',
//                         transition: 'transform 0.5s ease',
//                         '&:hover': { transform: 'scale(1.1)' },
//                       }}
//                     />
//                   </Box>
//                   <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
//                     <Typography variant="subtitle1" fontWeight={700} gutterBottom sx={{ color: '#37474f' }}>
//                       {prod.alt}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
//                       {prod.desc}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}

//             {/* View All Button Card */}
//             <Grid item xs={12} sm={6} md={4} lg={2.4} data-aos="fade-up" data-aos-delay={500}>
//               <Card
//                 component={Link}
//                 to="/OurProduct"
//                 sx={{
//                   height: '100%',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   borderRadius: 3,
//                   backgroundColor: 'primary.main',
//                   color: 'white',
//                   textDecoration: 'none',
//                   cursor: 'pointer',
//                   transition: '0.3s',
//                   boxShadow: 3,
//                   '&:hover': {
//                     backgroundColor: 'primary.dark',
//                     transform: 'translateY(-8px)',
//                     boxShadow: 6,
//                   },
//                 }}
//               >
//                 <Box textAlign="center">
//                   <Box 
//                     sx={{ 
//                         width: 60, height: 60, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', 
//                         display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2 
//                     }}
//                   >
//                     <FaPlus size={24} color="white" />
//                   </Box>
//                   <Typography variant="h6" fontWeight={700}>View All Products</Typography>
//                 </Box>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* ================= POST PROCESSES ================= */}
//       <Box sx={{ py: 10, px: { xs: 2, md: 8 }, background: '#f4f6f8' }}>
//         <Container maxWidth="lg">
//             <Typography variant="h4" fontWeight={700} color="text.primary" textAlign="center" gutterBottom data-aos="fade-down">
//             Post Processes & Machining
//             </Typography>
//             <Divider sx={{ mb: 6, mx: 'auto', width: 100, height: 4, backgroundColor: 'secondary.main', borderRadius: 2 }} />
            
//             <Grid container spacing={3} justifyContent="center">
//             {[
//                 'Heat Treatment', 'Case Hardening', 'Nitriding', 'Grinding', 'Gear Hobbing', 'EDM/Wire Cutting',
//                 'Broaching', 'Powder Coating', 'Painting', 'Blackening', 'Phosphating',
//                 'Chrome & Zinc Plating',
//             ].map((process, idx) => (
//                 <Grid item xs={12} sm={6} md={3} key={idx}>
//                 <Paper
//                     elevation={0}
//                     sx={{
//                     p: 2.5,
//                     borderRadius: 2,
//                     border: '1px solid #e0e0e0',
//                     textAlign: 'center',
//                     height: '100%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     flexDirection: 'column',
//                     transition: 'all 0.3s ease',
//                     '&:hover': {
//                         transform: 'translateY(-5px)',
//                         boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
//                         borderColor: 'primary.main',
//                         backgroundColor: '#fff',
//                     },
//                     }}
//                     data-aos="zoom-in"
//                     data-aos-delay={idx * 50}
//                 >
//                     <Typography variant="body1" fontWeight={600} color="text.secondary" sx={{ '&:hover': { color: 'primary.main' } }}>
//                     {process}
//                     </Typography>
//                 </Paper>
//                 </Grid>
//             ))}
//             </Grid>
//         </Container>
//       </Box>

//       {/* ================= CUSTOMERS SECTION ================= */}
//       <Box sx={{ py: 8, backgroundColor: '#ffffff' }}>
//         <Container>
//             <Typography variant="h4" fontWeight={700} color="text.primary" textAlign="center" gutterBottom data-aos="fade-down">
//                 Our Customers
//             </Typography>
//             <Divider sx={{ mb: 6, mx: 'auto', width: 80, height: 4, backgroundColor: 'secondary.main', borderRadius: 2 }} />
            
//             <Grid container spacing={6} justifyContent="center" alignItems="center">
//                 {customers.map((c, i) => (
//                 <Grid item key={i} data-aos="fade-up" data-aos-delay={i * 100}>
//                     <Box
//                     component="img"
//                     src={c.image}
//                     alt={`Customer ${i}`}
//                     sx={{
//                         width: 140,
//                         height: 70,
//                         objectFit: 'contain',
//                         filter: 'grayscale(100%) opacity(0.7)', // Start gray
//                         transition: 'all 0.4s ease',
//                         cursor: 'pointer',
//                         '&:hover': { 
//                             filter: 'grayscale(0%) opacity(1)', // Color on hover
//                             transform: 'scale(1.1)' 
//                         },
//                     }}
//                     />
//                 </Grid>
//                 ))}
//             </Grid>
//         </Container>
//       </Box>

//       {/* ================= WHATSAPP BUTTON ================= */}
//       <Box
//         component="a"
//         href="https://wa.me/9655821758?text=Hello!%20I'm%20interested%20in%20your%20services."
//         target="_blank"
//         rel="noopener noreferrer"
//         sx={{
//           position: 'fixed',
//           bottom: 30,
//           right: 30,
//           zIndex: 1000,
//           backgroundColor: '#25D366',
//           color: 'white',
//           borderRadius: '50%',
//           width: 65,
//           height: 65,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
//           textDecoration: 'none',
//           transition: 'transform 0.3s',
//           '&:hover': { transform: 'scale(1.15)', boxShadow: '0 6px 16px rgba(0,0,0,0.4)' },
//         }}
//       >
//         <FaWhatsapp size={35} />
//       </Box>

//     </div>
//   );
// };

// export default Home;
import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Divider,
  Grid,
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaWhatsapp, FaArrowRight, FaAngleRight } from 'react-icons/fa';

// ✅ Product Data
const product = [
  {
    img: '/image/1.png',
    alt: 'Double-Groove Spacer',
    desc: 'Precision spacers for pulley alignment.',
  },
  {
    img: '/image/2.png',
    alt: 'Precision Spacer',
    desc: 'High-quality spacing for rotating machinery.',
  },
  {
    img: '/image/3.png',
    alt: 'Central Bore Bushing',
    desc: 'Durable bushings for friction reduction.',
  },
  {
    img: '/image/4.png',
    alt: 'Lock Nut / Retaining Ring',
    desc: 'Secure locking for power transmission.',
  },
];

// ✅ Carousel Slides
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

// ✅ Vision & Mission Data
const visionMissionData = [
  {
    title: 'Our Vision',
    img: '/image/image.png',
    points: [
      "To be the leading provider of precision machining solutions.",
      "Driving innovation in manufacturing processes.",
      "Exceeding customer expectations through unparalleled quality.",
      "Ensuring reliability and demonstrating technological expertise."
    ],
  },
  {
    title: 'Our Mission',
    img: '/image/mission.png',
    points: [
      "Precision Excellence: Utilizing state-of-the-art technology.",
      "Customer Satisfaction: Building long-term relationships.",
      "Innovation: Embracing new technologies.",
      "Integrity: Operating with honesty and ethics.",
      "Sustainability: Minimizing environmental impact.",
      "Employee Growth: Supporting team development."
    ],
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Increased duration for smoother animation
  }, []);

  return (
    // ✅ FIX: Overflow Hidden on root div prevents horizontal scrollbar
    <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      
      {/* ================= HERO SECTION (Reduced Size) ================= */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          background: 'linear-gradient(135deg, #e3f2fd, #fce4ec, #fff8e1)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite',
          pt: 2, // Reduced padding top
          pb: 4, // Reduced padding bottom
          '@keyframes gradientShift': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        <Container maxWidth="lg">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={5000}
            stopOnHover={false}
            swipeable
            emulateTouch
          >
            {slides.map((slide, index) => (
              <Box
                key={index}
                sx={{
                  // ✅ FIX: Reduced Height (400px desktop / 280px mobile)
                  height: { xs: 280, md: 400 }, 
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box sx={{ textAlign: 'center', zIndex: 2, px: 2 }}>
                  <Typography 
                    variant="h2" 
                    fontWeight={900} 
                    sx={{ 
                      mb: 3, 
                      color: '#1a237e',
                      fontSize: { xs: '2rem', md: '3.5rem' }, 
                      textShadow: '0px 4px 12px rgba(0,0,0,0.1)'
                    }}
                  >
                    We <span style={{ color: '#d81b60' }}>{slide.highlight}</span>{' '}
                    {slide.title.split(' ').slice(2).join(' ')}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 4 }}>
                    <Button
                      component={Link}
                      to="/about"
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{ borderRadius: '50px', px: 5, py: 1.5, fontSize: '1.1rem', fontWeight: 'bold' }}
                    >
                      Our Company
                    </Button>
                    <Button
                      component={Link}
                      to="/ContactUs"
                      variant="outlined"
                      color="secondary"
                      size="large"
                      sx={{ borderRadius: '50px', px: 5, py: 1.5, fontSize: '1.1rem', borderWidth: 2, fontWeight: 'bold' }}
                    >
                      Contact Us
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Container>
      </Box>

      {/* ================= VISION & MISSION (Animated) ================= */}
      <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: '#f9f9f9' }}>
        <Container maxWidth="xl">
            <Typography variant="h3" fontWeight={800} color="primary" textAlign="center" gutterBottom data-aos="fade-down">
              Our Vision & Mission
            </Typography>
            <Divider sx={{ mx: 'auto', width: 120, borderBottomWidth: 5, borderColor: 'secondary.main', mb: 8, borderRadius: 2 }} />

            {visionMissionData.map((item, idx) => (
            <Grid
                container
                spacing={6}
                alignItems="center"
                justifyContent="center"
                key={idx}
                direction={idx % 2 === 0 ? 'row' : 'row-reverse'} 
                sx={{ mb: 8 }}
            >
                {/* IMAGE BOX - Added Animation */}
                <Grid 
                  item xs={12} md={5} 
                  data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} // ✅ Animation based on side
                >
                  <Paper
                      elevation={6}
                      sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      height: 320, 
                      width: '100%',
                      transition: 'transform 0.3s',
                      '&:hover': { transform: 'scale(1.02)' },
                      }}
                  >
                      <img 
                        src={item.img} 
                        alt={item.title} 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                  </Paper>
                </Grid>

                {/* CONTENT BOX - Added Animation */}
                <Grid 
                  item xs={12} md={7}
                  data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"} // ✅ Animation based on side
                >
                  <Paper
                    elevation={2}
                    sx={{
                        p: 4, 
                        borderRadius: 4,
                        backgroundColor: '#ffffff',
                        borderLeft: `6px solid #1976d2`,
                    }}
                  >
                      <Typography variant="h4" fontWeight={800} color="#2c3e50" gutterBottom>
                        {item.title}
                      </Typography>
                      
                      <List disablePadding sx={{ mt: 2 }}>
                        {item.points.map((point, i) => (
                            <ListItem key={i} alignItems="flex-start" sx={{ px: 0, py: 0.5 }}>
                                <ListItemIcon sx={{ minWidth: 35, mt: 0.5 }}>
                                    <FaAngleRight color="#d81b60" size={20} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                                            {point}
                                        </Typography>
                                    }
                                />
                            </ListItem>
                        ))}
                      </List>
                  </Paper>
                </Grid>
            </Grid>
            ))}
        </Container>
      </Box>

      {/* ================= PRODUCTS SECTION ================= */}
      <Box sx={{ py: 10, backgroundColor: '#ffffff' }}>
        <Container maxWidth="xl"> 
          <Typography variant="h3" fontWeight={900} color="primary" textAlign="center" gutterBottom data-aos="fade-down">
            Our Products
          </Typography>
          <Divider sx={{ mx: 'auto', width: 120, borderBottomWidth: 5, borderColor: 'secondary.main', mb: 8, borderRadius: 2 }} />

          {/* Grid Container */}
          <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            
            {/* 1. Loop through 4 Products */}
            {product.slice(0, 4).map((prod, index) => (
              <Grid item xs={12} sm={6} md={2.4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    boxShadow: 3,
                    border: '1px solid #eee',
                    transition: '0.3s',
                    minHeight: 340,
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: 12,
                      borderColor: 'primary.main'
                    },
                  }}
                >
                  <Box sx={{ p: 3, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img
                      src={prod.img}
                      alt={prod.alt}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        transition: 'transform 0.3s'
                      }}
                    />
                  </Box>
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', bgcolor: '#fafafa', p: 3 }}>
                    <Typography variant="h6" fontWeight={800} sx={{ color: '#2c3e50', fontSize: '1.1rem', lineHeight: 1.3, mb: 1 }}>
                      {prod.alt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
                      {prod.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}

            {/* 2. Plus Button (View All) - ✅ THIS IS THE ARROW BUTTON */}
            <Grid item xs={12} sm={6} md={2.4} data-aos="fade-left" data-aos-delay={500}>
              <Card
                component={Link}
                to="/OurProduct"
                sx={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  borderRadius: 4,
                  background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
                  color: 'white',
                  textDecoration: 'none',
                  cursor: 'pointer',
                  boxShadow: 4,
                  minHeight: 340,
                  transition: '0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 15,
                    background: 'linear-gradient(135deg, #d81b60 0%, #ad1457 100%)',
                  },
                }}
              >
                <Box 
                    sx={{ 
                        width: 90, height: 90, borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', 
                        display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 
                    }}
                >
                    {/* ✅ Arrow Icon */}
                    <FaArrowRight size={40} color="white" />
                </Box>
                <Typography variant="h5" fontWeight={800}>View All</Typography>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ================= POST PROCESSES ================= */}
      <Box sx={{ py: 10, px: { xs: 2, md: 8 }, background: '#f4f6f8' }}>
        <Container maxWidth="xl">
            <Typography variant="h3" fontWeight={800} color="text.primary" textAlign="center" gutterBottom data-aos="fade-down">
            Post Processes & Machining
            </Typography>
            <Divider sx={{ mb: 8, mx: 'auto', width: 120, height: 5, backgroundColor: 'secondary.main', borderRadius: 2 }} />
            
            <Grid container spacing={4} justifyContent="center" alignItems="stretch">
            {[
                'Heat Treatment', 'Case Hardening', 'Nitriding', 'Grinding', 'Gear Hobbing', 'EDM/Wire Cutting',
                'Broaching', 'Powder Coating', 'Painting', 'Blackening', 'Phosphating',
                'Chrome & Zinc Plating',
            ].map((process, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx}> 
                <Paper
                    elevation={1}
                    sx={{
                    p: 4,
                    borderRadius: 3,
                    border: '1px solid #e0e0e0',
                    textAlign: 'center',
                    height: '100%', 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#fff',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 12px 25px rgba(0,0,0,0.1)',
                        borderColor: 'primary.main',
                        backgroundColor: '#e3f2fd', 
                    },
                    }}
                    data-aos="zoom-in"
                    data-aos-delay={idx * 50}
                >
                    <Typography variant="h6" fontWeight={700} color="#455a64" sx={{ '&:hover': { color: 'primary.main' }, fontSize: '1.25rem' }}>
                    {process}
                    </Typography>
                </Paper>
                </Grid>
            ))}
            </Grid>
        </Container>
      </Box>

      {/* ================= CUSTOMERS SECTION ================= */}
      <Box sx={{ py: 10, backgroundColor: '#ffffff' }}>
        <Container>
            <Typography variant="h3" fontWeight={800} color="text.primary" textAlign="center" gutterBottom data-aos="fade-down">
                Our Customers
            </Typography>
            <Divider sx={{ mb: 8, mx: 'auto', width: 100, height: 5, backgroundColor: 'secondary.main', borderRadius: 2 }} />
            
            <Grid container spacing={8} justifyContent="center" alignItems="center">
                {customers.map((c, i) => (
                <Grid item key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <Box
                    component="img"
                    src={c.image}
                    alt={`Customer ${i}`}
                    sx={{
                        width: 160,
                        height: 80,
                        objectFit: 'contain',
                        filter: 'grayscale(100%) opacity(0.7)',
                        transition: 'all 0.4s ease',
                        cursor: 'pointer',
                        '&:hover': { 
                            filter: 'grayscale(0%) opacity(1)',
                            transform: 'scale(1.15)' 
                        },
                    }}
                    />
                </Grid>
                ))}
            </Grid>
        </Container>
      </Box>

      {/* ================= WHATSAPP BUTTON ================= */}
      <Box
        component="a"
        href="https://wa.me/9655821758?text=Hello!%20I'm%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 30,
          zIndex: 1000,
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: 70, 
          height: 70,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          textDecoration: 'none',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.15)', boxShadow: '0 6px 20px rgba(0,0,0,0.4)' },
        }}
      >
        <FaWhatsapp size={40} />
      </Box>

    </div>
  );
};

export default Home;
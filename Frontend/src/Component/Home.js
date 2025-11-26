
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
// import { FaWhatsapp, FaArrowRight, FaAngleRight } from 'react-icons/fa';

// // ✅ Product Data
// const product = [
//   {
//     img: '/image/1.png',
//     alt: 'Double-Groove Spacer',
//     desc: 'Precision spacers for pulley alignment.',
//   },
//   {
//     img: '/image/2.png',
//     alt: 'Precision Spacer',
//     desc: 'High-quality spacing for rotating machinery.',
//   },
//   {
//     img: '/image/3.png',
//     alt: 'Central Bore Bushing',
//     desc: 'Durable bushings for friction reduction.',
//   },
//   {
//     img: '/image/4.png',
//     alt: 'Lock Nut / Retaining Ring',
//     desc: 'Secure locking for power transmission.',
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

// // ✅ Vision & Mission Data
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
//       "Precision Excellence: Utilizing state-of-the-art technology.",
//       "Customer Satisfaction: Building long-term relationships.",
//       "Innovation: Embracing new technologies.",
//       "Integrity: Operating with honesty and ethics.",
//       "Sustainability: Minimizing environmental impact.",
//       "Employee Growth: Supporting team development."
//     ],
//   },
// ];

// const Home = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);

//   return (
//     <div style={{ maxWidth: '100vw', overflowX: 'hidden' }}>
      
//       {/* ================= HERO SECTION ================= */}
//       <Box
//         sx={{
//           position: 'relative',
//           width: '100%',
//           background: 'linear-gradient(135deg, #e3f2fd, #fce4ec, #fff8e1)',
//           backgroundSize: '400% 400%',
//           animation: 'gradientShift 20s ease infinite',
//           pt: 2, 
//           pb: 4, 
//           '@keyframes gradientShift': {
//             '0%': { backgroundPosition: '0% 50%' },
//             '50%': { backgroundPosition: '100% 50%' },
//             '100%': { backgroundPosition: '0% 50%' },
//           },
//         }}
//       >
//         <Container maxWidth="lg">
//           <Carousel
//             showArrows={false}
//             showThumbs={false}
//             showStatus={false}
//             infiniteLoop
//             autoPlay
//             interval={5000}
//             stopOnHover={false}
//             swipeable
//             emulateTouch
//           >
//             {slides.map((slide, index) => (
//               <Box
//                 key={index}
//                 sx={{
//                   height: { xs: 280, md: 400 }, 
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 <Box sx={{ textAlign: 'center', zIndex: 2, px: 2 }}>
//                   <Typography 
//                     variant="h2" 
//                     fontWeight={900} 
//                     sx={{ 
//                       mb: 3, 
//                       color: '#1a237e',
//                       fontSize: { xs: '2rem', md: '3.5rem' }, 
//                       textShadow: '0px 4px 12px rgba(0,0,0,0.1)'
//                     }}
//                   >
//                     We <span style={{ color: '#d81b60' }}>{slide.highlight}</span>{' '}
//                     {slide.title.split(' ').slice(2).join(' ')}
//                   </Typography>
                  
//                   <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 4 }}>
//                     <Button
//                       component={Link}
//                       to="/about"
//                       variant="contained"
//                       color="secondary"
//                       size="large"
//                       sx={{ borderRadius: '50px', px: 5, py: 1.5, fontSize: '1.1rem', fontWeight: 'bold' }}
//                     >
//                       Our Company
//                     </Button>
//                     <Button
//                       component={Link}
//                       to="/ContactUs"
//                       variant="outlined"
//                       color="secondary"
//                       size="large"
//                       sx={{ borderRadius: '50px', px: 5, py: 1.5, fontSize: '1.1rem', borderWidth: 2, fontWeight: 'bold' }}
//                     >
//                       Contact Us
//                     </Button>
//                   </Box>
//                 </Box>
//               </Box>
//             ))}
//           </Carousel>
//         </Container>
//       </Box>

//       {/* ================= VISION & MISSION ================= */}
//       <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: '#f9f9f9' }}>
//         <Container maxWidth="xl">
//             <Typography variant="h3" fontWeight={800} color="primary" textAlign="center" gutterBottom data-aos="fade-down">
//               Our Vision & Mission
//             </Typography>
//             <Divider sx={{ mx: 'auto', width: 120, borderBottomWidth: 5, borderColor: 'secondary.main', mb: 8, borderRadius: 2 }} />

//             {visionMissionData.map((item, idx) => (
//             <Grid
//                 container
//                 spacing={6}
//                 alignItems="center"
//                 justifyContent="center"
//                 key={idx}
//                 direction={idx % 2 === 0 ? 'row' : 'row-reverse'} 
//                 sx={{ mb: 8 }}
//             >
//                 {/* IMAGE BOX */}
//                 <Grid 
//                   item xs={12} md={5} 
//                   data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} 
//                 >
//                   <Paper
//                       elevation={6}
//                       sx={{
//                       borderRadius: 4,
//                       overflow: 'hidden',
//                       height: 320, 
//                       width: '100%',
//                       transition: 'transform 0.3s',
//                       '&:hover': { transform: 'scale(1.02)' },
//                       }}
//                   >
//                       <img 
//                         src={item.img} 
//                         alt={item.title} 
//                         style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
//                       />
//                   </Paper>
//                 </Grid>

//                 {/* CONTENT BOX */}
//                 <Grid 
//                   item xs={12} md={7}
//                   data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"} 
//                 >
//                   <Paper
//                     elevation={2}
//                     sx={{
//                         p: 4, 
//                         borderRadius: 4,
//                         backgroundColor: '#ffffff',
//                         borderLeft: `6px solid #1976d2`,
//                     }}
//                   >
//                       <Typography variant="h4" fontWeight={800} color="#2c3e50" gutterBottom>
//                         {item.title}
//                       </Typography>
                      
//                       <List disablePadding sx={{ mt: 2 }}>
//                         {item.points.map((point, i) => (
//                             <ListItem key={i} alignItems="flex-start" sx={{ px: 0, py: 0.5 }}>
//                                 <ListItemIcon sx={{ minWidth: 35, mt: 0.5 }}>
//                                     <FaAngleRight color="#d81b60" size={20} />
//                                 </ListItemIcon>
//                                 <ListItemText
//                                     primary={
//                                         <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
//                                             {point}
//                                         </Typography>
//                                     }
//                                 />
//                             </ListItem>
//                         ))}
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
//           <Typography variant="h3" fontWeight={900} color="primary" textAlign="center" gutterBottom data-aos="fade-down">
//             Our Products
//           </Typography>
//           <Divider sx={{ mx: 'auto', width: 120, borderBottomWidth: 5, borderColor: 'secondary.main', mb: 8, borderRadius: 2 }} />

//           {/* Grid Container */}
//           <Grid container spacing={3} justifyContent="center" alignItems="center">
            
//             {/* 1. Products Loop */}
//             {product.slice(0, 4).map((prod, index) => (
//               // ✅ md={2.4} means 20% width each (4 items * 20% = 80%). Leaves space for button.
//               <Grid item xs={12} sm={6} md={2.4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
//                 <Card
//                   sx={{
//                     height: '100%',
//                     display: 'flex',
//                     flexDirection: 'column',
//                     borderRadius: 4,
//                     boxShadow: 3,
//                     border: '1px solid #eee',
//                     transition: '0.3s',
//                     minHeight: 340,
//                     '&:hover': {
//                       transform: 'translateY(-10px)',
//                       boxShadow: 12,
//                       borderColor: 'primary.main'
//                     },
//                   }}
//                 >
//                   <Box sx={{ p: 3, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                     <img
//                       src={prod.img}
//                       alt={prod.alt}
//                       style={{
//                         maxWidth: '100%',
//                         maxHeight: '100%',
//                         objectFit: 'contain',
//                         transition: 'transform 0.3s'
//                       }}
//                     />
//                   </Box>
//                   <CardContent sx={{ flexGrow: 1, textAlign: 'center', bgcolor: '#fafafa', p: 3 }}>
//                     <Typography variant="h6" fontWeight={800} sx={{ color: '#2c3e50', fontSize: '1.1rem', lineHeight: 1.3, mb: 1 }}>
//                       {prod.alt}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.95rem' }}>
//                       {prod.desc}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}

//             {/* ✅ 2. ARROW BUTTON - Placed as the 5th item in the row */}
//             <Grid item xs={12} sm={12} md={1} data-aos="fade-left" data-aos-delay={500} sx={{ display: 'flex', justifyContent: 'center' }}>
//                 <Button
//                     component={Link}
//                     to="/OurProduct"
//                     sx={{
//                         width: 60, 
//                         height: 60,
//                         borderRadius: '50%',
//                         background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
//                         color: 'white',
//                         minWidth: 'auto',
//                         display: 'flex',
//                         alignItems: 'center',
//                         justifyContent: 'center',
//                         boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
//                         transition: 'all 0.3s ease',
//                         '&:hover': {
//                             transform: 'scale(1.1)',
//                             boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
//                             background: 'linear-gradient(135deg, #d81b60 0%, #ad1457 100%)',
//                         }
//                     }}
//                 >
//                     <FaArrowRight size={24} />
//                 </Button>
//             </Grid>

//           </Grid>
//         </Container>
//       </Box>

//       {/* ================= POST PROCESSES ================= */}
//       <Box sx={{ py: 10, px: { xs: 2, md: 8 }, background: '#f4f6f8' }}>
//         <Container maxWidth="xl">
//             <Typography variant="h3" fontWeight={800} color="text.primary" textAlign="center" gutterBottom data-aos="fade-down">
//             Post Processes & Machining
//             </Typography>
//             <Divider sx={{ mb: 8, mx: 'auto', width: 120, height: 5, backgroundColor: 'secondary.main', borderRadius: 2 }} />
            
//             <Grid container spacing={4} justifyContent="center" alignItems="stretch">
//             {[
//                 'Heat Treatment', 'Case Hardening', 'Nitriding', 'Grinding', 'Gear Hobbing', 'EDM/Wire Cutting',
//                 'Broaching', 'Powder Coating', 'Painting', 'Blackening', 'Phosphating',
//                 'Chrome & Zinc Plating',
//             ].map((process, idx) => (
//                 <Grid item xs={12} sm={6} md={3} key={idx}> 
//                 <Paper
//                     elevation={1}
//                     sx={{
//                     p: 4,
//                     borderRadius: 3,
//                     border: '1px solid #e0e0e0',
//                     textAlign: 'center',
//                     height: '100%', 
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     backgroundColor: '#fff',
//                     transition: 'all 0.3s ease',
//                     cursor: 'default',
//                     '&:hover': {
//                         transform: 'translateY(-8px)',
//                         boxShadow: '0 12px 25px rgba(0,0,0,0.1)',
//                         borderColor: 'primary.main',
//                         backgroundColor: '#e3f2fd', 
//                     },
//                     }}
//                     data-aos="zoom-in"
//                     data-aos-delay={idx * 50}
//                 >
//                     <Typography variant="h6" fontWeight={700} color="#455a64" sx={{ '&:hover': { color: 'primary.main' }, fontSize: '1.25rem' }}>
//                     {process}
//                     </Typography>
//                 </Paper>
//                 </Grid>
//             ))}
//             </Grid>
//         </Container>
//       </Box>

//       {/* ================= CUSTOMERS SECTION ================= */}
//       <Box sx={{ py: 10, backgroundColor: '#ffffff' }}>
//         <Container>
//             <Typography variant="h3" fontWeight={800} color="text.primary" textAlign="center" gutterBottom data-aos="fade-down">
//                 Our Customers
//             </Typography>
//             <Divider sx={{ mb: 8, mx: 'auto', width: 100, height: 5, backgroundColor: 'secondary.main', borderRadius: 2 }} />
            
//             <Grid container spacing={8} justifyContent="center" alignItems="center">
//                 {customers.map((c, i) => (
//                 <Grid item key={i} data-aos="fade-up" data-aos-delay={i * 100}>
//                     <Box
//                     component="img"
//                     src={c.image}
//                     alt={`Customer ${i}`}
//                     sx={{
//                         width: 160,
//                         height: 80,
//                         objectFit: 'contain',
//                         filter: 'grayscale(100%) opacity(0.7)',
//                         transition: 'all 0.4s ease',
//                         cursor: 'pointer',
//                         '&:hover': { 
//                             filter: 'grayscale(0%) opacity(1)',
//                             transform: 'scale(1.15)' 
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
//           width: 70, 
//           height: 70,
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
//           textDecoration: 'none',
//           transition: 'transform 0.3s',
//           '&:hover': { transform: 'scale(1.15)', boxShadow: '0 6px 20px rgba(0,0,0,0.4)' },
//         }}
//       >
//         <FaWhatsapp size={40} />
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
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    // ✅ FIX: Removed overflowX: 'hidden' from ROOT to stop double scrollbars.
    // Instead, applied overflow: 'hidden' to individual sections below to handle AOS animations.
    <Box sx={{ width: '100%' }}>
      
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden', // ✅ Added to contain animations locally
          background: 'linear-gradient(135deg, #e3f2fd, #fce4ec, #fff8e1)',
          backgroundSize: '400% 400%',
          animation: 'gradientShift 20s ease infinite',
          pt: 2, 
          pb: 4, 
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

      {/* ================= VISION & MISSION ================= */}
      <Box sx={{ py: 10, px: { xs: 2, md: 8 }, backgroundColor: '#f9f9f9', overflow: 'hidden' }}> {/* ✅ Added overflow: hidden */}
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
                {/* IMAGE BOX */}
                <Grid 
                  item xs={12} md={5} 
                  data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"} 
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

                {/* CONTENT BOX */}
                <Grid 
                  item xs={12} md={7}
                  data-aos={idx % 2 === 0 ? "fade-left" : "fade-right"} 
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
      <Box sx={{ py: 10, backgroundColor: '#ffffff', overflow: 'hidden' }}> {/* ✅ Added overflow: hidden */}
        <Container maxWidth="xl">
          <Typography variant="h3" fontWeight={900} color="primary" textAlign="center" gutterBottom data-aos="fade-down">
            Our Products
          </Typography>
          <Divider sx={{ mx: 'auto', width: 120, borderBottomWidth: 5, borderColor: 'secondary.main', mb: 8, borderRadius: 2 }} />

          {/* Grid Container */}
          <Grid container spacing={3} justifyContent="center" alignItems="center">
            
            {/* 1. Products Loop */}
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

            {/* ✅ 2. ARROW BUTTON */}
            <Grid item xs={12} sm={12} md={1} data-aos="fade-left" data-aos-delay={500} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Button
                    component={Link}
                    to="/OurProduct"
                    sx={{
                        width: 60, 
                        height: 60,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
                        color: 'white',
                        minWidth: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
                            background: 'linear-gradient(135deg, #d81b60 0%, #ad1457 100%)',
                        }
                    }}
                >
                    <FaArrowRight size={24} />
                </Button>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ================= POST PROCESSES ================= */}
      <Box sx={{ py: 10, px: { xs: 2, md: 8 }, background: '#f4f6f8', overflow: 'hidden' }}> {/* ✅ Added overflow: hidden */}
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
      <Box sx={{ py: 10, backgroundColor: '#ffffff', overflow: 'hidden' }}> {/* ✅ Added overflow: hidden */}
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

    </Box>
  );
};

export default Home;
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
  useTheme,
  useMediaQuery,
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

// ✅ Process Data with Descriptions
const processData = [
    { title: 'Heat Treatment', desc: 'Improving material strength & durability.' },
    { title: 'Case Hardening', desc: 'Hardening surface for wear resistance.' },
    { title: 'Nitriding', desc: 'Enhancing surface hardness & life.' },
    { title: 'Grinding', desc: 'Precision surface finishing process.' },
    { title: 'Gear Hobbing', desc: 'Cutting gears with high accuracy.' },
    { title: 'EDM/Wire Cutting', desc: 'Intricate shapes with electrical sparks.' },
    { title: 'Broaching', desc: 'Removing material for specific shapes.' },
    { title: 'Powder Coating', desc: 'Durable and decorative finish.' },
    { title: 'Painting', desc: 'Protective coating against corrosion.' },
    { title: 'Blackening', desc: 'Anti-reflective & corrosion resistant.' },
    { title: 'Phosphating', desc: 'Surface preparation for coating.' },
    { title: 'Chrome & Zinc Plating', desc: 'Shiny, corrosion-free plating.' },
];

const Home = () => {
  const theme = useTheme();
  // Check if screen is mobile (xs or sm)
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // ✅ Logic to chunk data for Carousel
  // Mobile: 1 item per slide. Laptop: 3 items per slide.
  const chunkSize = isMobile ? 1 : 3;
  const processChunks = [];
  for (let i = 0; i < processData.length; i += chunkSize) {
    processChunks.push(processData.slice(i, i + chunkSize));
  }

  return (
    <Box sx={{ width: '100%' }}>
      
      {/* ================= HERO SECTION ================= */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
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
                  height: { xs: 300, md: 400 }, 
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
                      mb: 2,
                      color: '#1a237e',
                      fontSize: { xs: '1.6rem', sm: '2.5rem', md: '3.5rem' }, 
                      textShadow: '0px 4px 12px rgba(0,0,0,0.1)',
                      lineHeight: 1.2
                    }}
                  >
                    We <span style={{ color: '#d81b60' }}>{slide.highlight}</span>{' '}
                    {slide.title.split(' ').slice(2).join(' ')}
                  </Typography>
                  
                  <Box sx={{ 
                    display: 'flex', 
                    flexDirection: { xs: 'column', sm: 'row' }, 
                    justifyContent: 'center', 
                    gap: { xs: 1.5, sm: 3 }, 
                    mt: { xs: 2, sm: 4 }
                  }}>
                    <Button
                      component={Link}
                      to="/about"
                      variant="contained"
                      color="secondary"
                      size="large"
                      sx={{ 
                        borderRadius: '50px', 
                        px: { xs: 4, md: 5 }, 
                        py: 1, 
                        fontSize: { xs: '0.9rem', md: '1.1rem' }, 
                        fontWeight: 'bold' 
                      }}
                    >
                      Our Company
                    </Button>
                    <Button
                      component={Link}
                      to="/ContactUs"
                      variant="outlined"
                      color="secondary"
                      size="large"
                      sx={{ 
                        borderRadius: '50px', 
                        px: { xs: 4, md: 5 }, 
                        py: 1, 
                        fontSize: { xs: '0.9rem', md: '1.1rem' }, 
                        borderWidth: 2, 
                        fontWeight: 'bold' 
                      }}
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
      <Box sx={{ py: { xs: 4, md: 10 }, px: { xs: 1, md: 8 }, backgroundColor: '#f9f9f9', overflow: 'hidden' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 1, md: 3 } }}> 
            <Typography 
              variant="h3" 
              fontWeight={800} 
              color="primary" 
              textAlign="center" 
              gutterBottom 
              data-aos="fade-down" 
              sx={{ 
                fontSize: { xs: '1.8rem', md: '3rem' }, 
                mb: 1
              }}
            >
              Our Vision & Mission
            </Typography>
            <Divider sx={{ mx: 'auto', width: 100, borderBottomWidth: 5, borderColor: 'secondary.main', mb: { xs: 3, md: 8 }, borderRadius: 2 }} />

            {visionMissionData.map((item, idx) => (
            <Grid
                container
                spacing={{ xs: 2, md: 6 }}
                alignItems="center"
                justifyContent="center"
                key={idx}
                direction={{ xs: 'column', md: idx % 2 === 0 ? 'row' : 'row-reverse' }}
                sx={{ mb: { xs: 3, md: 8 } }}
            >
                {/* IMAGE BOX - HIDDEN ON MOBILE */}
                <Grid 
                  item xs={12} md={5} 
                  sx={{ display: { xs: 'none', md: 'block' } }}
                  data-aos={window.innerWidth < 900 ? "fade-up" : (idx % 2 === 0 ? "fade-right" : "fade-left")}
                >
                  <Paper
                      elevation={6}
                      sx={{
                      borderRadius: 4,
                      overflow: 'hidden',
                      height: { xs: 250, md: 320 },
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
                  data-aos={window.innerWidth < 900 ? "fade-up" : (idx % 2 === 0 ? "fade-left" : "fade-right")}
                >
                  <Paper
                    elevation={2}
                    sx={{
                        p: { xs: 2, md: 4 }, 
                        borderRadius: 3,
                        backgroundColor: '#ffffff',
                        borderLeft: `6px solid #1976d2`,
                    }}
                  >
                      <Typography 
                        variant="h4" 
                        fontWeight={800} 
                        color="#2c3e50" 
                        gutterBottom 
                        sx={{ 
                          fontSize: { xs: '1.4rem', md: '2.2rem' },
                          mb: 1
                        }}
                      >
                        {item.title}
                      </Typography>
                      
                      <List disablePadding>
                        {item.points.map((point, i) => (
                            <ListItem key={i} alignItems="flex-start" sx={{ px: 0, py: 0.2 }}> 
                                <ListItemIcon sx={{ minWidth: 24, mt: 0.5 }}> 
                                    <FaAngleRight color="#d81b60" size={14} />
                                </ListItemIcon>
                                <ListItemText
                                    primary={
                                        <Typography 
                                          variant="body1" 
                                          color="text.secondary" 
                                          sx={{ 
                                            fontSize: { xs: '0.85rem', md: '1.1rem' }, 
                                            fontWeight: 500,
                                            lineHeight: 1.3 
                                          }}
                                        >
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
      <Box sx={{ py: { xs: 4, md: 10 }, backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <Container maxWidth="xl">
          <Typography 
            variant="h3" 
            fontWeight={900} 
            color="primary" 
            textAlign="center" 
            gutterBottom 
            data-aos="fade-down" 
            sx={{ 
              fontSize: { xs: '1.8rem', md: '3rem' } 
            }}
          >
            Our Products
          </Typography>
          <Divider sx={{ mx: 'auto', width: 120, borderBottomWidth: 5, borderColor: 'secondary.main', mb: { xs: 4, md: 8 }, borderRadius: 2 }} />

          <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" alignItems="stretch">
            
            {product.slice(0, 4).map((prod, index) => (
              <Grid item xs={6} sm={6} md={2.4} key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    boxShadow: 3,
                    border: '1px solid #eee',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: 12,
                      borderColor: 'primary.main'
                    },
                  }}
                >
                  <Box sx={{ 
                    p: 1, 
                    height: { xs: 150, md: 200 }, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    bgcolor: '#fff'
                  }}>
                    <img
                      src={prod.img}
                      alt={prod.alt}
                      style={{
                        maxWidth: '95%',
                        maxHeight: '95%',
                        objectFit: 'contain',
                      }}
                    />
                  </Box>
                  
                  <CardContent sx={{ flexGrow: 1, textAlign: 'center', bgcolor: '#fafafa', p: { xs: 1, md: 3 } }}>
                    <Typography 
                      variant="h6" 
                      fontWeight={800} 
                      sx={{ 
                        color: '#2c3e50', 
                        fontSize: { xs: '0.85rem', md: '1.1rem' }, 
                        lineHeight: 1.2, 
                        mb: 0.5 
                      }}
                    >
                      {prod.alt}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        fontSize: { xs: '0.7rem', md: '0.95rem' }, 
                      }}
                    >
                      {prod.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}

            <Grid item xs={12} sm={12} md={1} data-aos="fade-left" data-aos-delay={500} sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 2, md: 0 } }}>
                <Button
                    component={Link}
                    to="/OurProduct"
                    sx={{
                        width: 50, 
                        height: 50,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
                        color: 'white',
                        minWidth: 'auto',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
                    }}
                >
                    <FaArrowRight size={20} />
                </Button>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* ================= POST PROCESSES (CAROUSEL) ================= */}
      <Box sx={{ py: { xs: 4, md: 10 }, px: { xs: 1, md: 8 }, background: '#f4f6f8', overflow: 'hidden' }}>
        <Container maxWidth="xl">
            <Typography 
              variant="h3" 
              fontWeight={800} 
              color="text.primary" 
              textAlign="center" 
              gutterBottom 
              data-aos="fade-down" 
              sx={{ 
                fontSize: { xs: '1.8rem', md: '3rem' } 
              }}
            >
            Post Processes
            </Typography>
            <Divider sx={{ mb: { xs: 4, md: 8 }, mx: 'auto', width: 120, height: 5, backgroundColor: 'secondary.main', borderRadius: 2 }} />
            
            {/* CAROUSEL WRAPPER */}
            <Box sx={{ maxWidth: '100%', mx: 'auto', pb: 4 }}>
              <Carousel
                showArrows={!isMobile} // Hide arrows on mobile for cleaner look
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={4000}
                stopOnHover={true}
                swipeable
                emulateTouch
                showIndicators={true} // Dots at bottom
              >
                {processChunks.map((chunk, i) => (
                  <Box key={i} sx={{ pb: 6, px: { xs: 1, md: 2 } }}> {/* Padding bottom for dots */}
                    <Grid container spacing={3} justifyContent="center">
                      {chunk.map((proc, index) => (
                        <Grid item xs={12} md={4} key={index}>
                          <Paper
                            elevation={3}
                            sx={{
                              p: 3,
                              borderRadius: 3,
                              textAlign: 'center',
                              height: '100%',
                              minHeight: 180, // Fixed height for consistency
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'white',
                              borderBottom: '4px solid #1976d2',
                              transition: 'transform 0.3s',
                              '&:hover': {
                                transform: 'translateY(-5px)',
                                boxShadow: 6
                              }
                            }}
                          >
                             <Typography 
                                variant="h6" 
                                fontWeight={800} 
                                color="primary.main" 
                                gutterBottom
                                sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' } }}
                              >
                                {proc.title}
                             </Typography>
                             <Typography 
                                variant="body2" 
                                color="text.secondary"
                                sx={{ fontSize: { xs: '0.9rem', md: '1rem' } }}
                             >
                                {proc.desc}
                             </Typography>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                ))}
              </Carousel>
            </Box>

        </Container>
      </Box>

      {/* ================= CUSTOMERS SECTION ================= */}
      <Box sx={{ py: { xs: 4, md: 10 }, backgroundColor: '#ffffff', overflow: 'hidden' }}>
        <Container>
            <Typography 
              variant="h3" 
              fontWeight={800} 
              color="text.primary" 
              textAlign="center" 
              gutterBottom 
              data-aos="fade-down" 
              sx={{ 
                fontSize: { xs: '1.8rem', md: '3rem' } 
              }}
            >
                Our Customers
            </Typography>
            <Divider sx={{ mb: { xs: 4, md: 8 }, mx: 'auto', width: 100, height: 5, backgroundColor: 'secondary.main', borderRadius: 2 }} />
            
            <Grid container spacing={{ xs: 3, md: 8 }} justifyContent="center" alignItems="center">
                {customers.map((c, i) => (
                <Grid item key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                    <Box
                    component="img"
                    src={c.image}
                    alt={`Customer ${i}`}
                    sx={{
                        width: { xs: 110, md: 160 },
                        height: { xs: 55, md: 80 },
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
          bottom: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: { xs: 50, md: 70 },
          height: { xs: 50, md: 70 },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
          textDecoration: 'none',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.15)', boxShadow: '0 6px 20px rgba(0,0,0,0.4)' },
        }}
      >
        <FaWhatsapp size={28} />
      </Box>

    </Box>
  );
};

export default Home;
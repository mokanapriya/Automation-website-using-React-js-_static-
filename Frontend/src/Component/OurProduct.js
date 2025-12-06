import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample product data
const projects = [
  {
    img: '/image/1.png',
    alt: 'Double-Groove Spacer or Pulley Spacer',
    description: 'Used in power transmission systems, offering dual groove functionality for improved load balance.'
  },
  {
    img: '/image/2.png',
    alt: 'Single-Bore Precision Spacer',
    description: 'Provides precise spacing for rotating machinery, typically used in mechanical assemblies.'
  },
  {
    img: '/image/3.png',
    alt: 'Central Bore Bushing or Sleeve',
    description: 'Ensures proper alignment and reduces friction in rotating shafts.'
  },
  {
    img: '/image/4.png',
    alt: 'External Threaded Lock Nut / Slotted Retaining Ring',
    description: 'Used in mechanical assemblies for secure locking and easy disassembly.'
  },
  {
    img: '/image/5.png',
    alt: 'Circular Cap with Center Bore',
    description: 'Covers and protects mechanical parts while allowing shaft passage.'
  },
  {
    img: '/image/6.png',
    alt: 'Brass Male Connector or Custom Nozzle',
    description: 'Connects fluid or air systems in industrial machinery.'
  },
  {
    img: '/image/7.png',
    alt: 'Splined Shaft with Locking Collar',
    description: 'Transfers torque with secure axial positioning.'
  },
  {
    img: '/image/8.png',
    alt: 'Machined Components',
    description: 'Precision components tailored to diverse industrial needs.'
  },
  {
    img: '/image/9.png',
    alt: 'Spline Shaft',
    description: 'Facilitates torque transmission in power equipment.'
  },
  {
    img: '/image/10.png',
    alt: 'Knurled Head Screw',
    description: 'Hand-adjustable fastener for tool-free applications.'
  },
  {
    img: '/image/11.png',
    alt: 'Quick Connect Coupling',
    description: 'Allows rapid, leak-proof connection of fluid lines.'
  },
  {
    img: '/image/12.png',
    alt: 'Quick Connect Couplings (Multiple Units)',
    description: 'Batch of high-performance fluid connectors.'
  },
  {
    img: '/image/13.png',
    alt: 'Quick Connect Coupling (Front View)',
    description: 'Front view showcasing interface design.'
  },
  {
    img: '/image/14.png',
    alt: 'Quick Connect Coupling (Side View)',
    description: 'Side view showing locking mechanism.'
  }
];

const OurProduct = () => {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <>
      {/* Main white background container */}
      <Box
        sx={{
          backgroundColor: '#ffffff',
          pt: { xs: 12, md: 10 },
          pb: { xs: 4, md: 6 },
          px: { xs: 2, md: 4 },
          position: 'relative',
          zIndex: 1,
          minHeight: '100vh',
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight={800}
            textAlign="center"
            gutterBottom
            sx={{
              mb: 2,
              fontSize: { xs: '2rem', md: '3rem' },
              color: '#003366',
            }}
          >
            Our Products
          </Typography>
          <Divider
            sx={{
              mx: 'auto',
              width: 100,
              borderBottomWidth: 4,
              borderColor: '#d81b60',
              mb: 4,
              borderRadius: 2,
            }}
          />

          <div className="product-grid" style={{ position: 'relative', zIndex: 1 }}>
            {projects.map((project, i) => (
              <div
                key={i}
                className="product-card"
                onClick={() => setIndex(i)}
                style={{ cursor: 'pointer' }}
                data-aos="zoom-in-up"
              >
                <div className="product-thumb">
                  <img
                    src={project.img}
                    alt={project.alt}
                    className="product-image"
                  />
                  <div className="overlay">
                    <a
                      href={project.img}
                      className="icon-link"
                      title="View Product"
                      onClick={(e) => e.preventDefault()}
                    >
                      🔗
                    </a>
                  </div>
                </div>

                <div className="product-info">
                  <h3 className="product-title">{project.alt}</h3>
                  {project.desc && <p>{project.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Box>

      {/* Lightbox Preview */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={projects.map((p) => ({ 
          src: p.img,
          alt: p.alt,
          description: p.description,
          title: p.alt
        }))}
        on={{
          view: ({ index: currentIndex }) => {
            setIndex(currentIndex);
          },
        }}
        render={{
          slide: ({ slide }) => {
            return (
              <div className="lightbox-custom-slide">
                <img src={slide.src} alt={slide.alt} />
                <div className="lightbox-caption">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            );
          },
        }}
      />
    </>
  );
};

export default OurProduct;

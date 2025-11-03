import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../App.css';

const infrastructureImages = [
  { src: '/image/CNC.png', caption: 'CNC Turning Centers in operation' },
  { src: '/image/vertical.png', caption: 'Vertical Machining Center in our facility' },
  { src: '/image/15.png', caption: 'Inspection with VMM and Height Gauges' },
  { src: '/image/16.png', caption: 'High Precision Drilling Machines' },
];

const Infrastructure = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      className="infrastructure-section"
      style={{
        padding: '80px 24px',
        position: 'relative',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
      }}
    >
      {/* 🔧 Main Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h2 className="infrastructure-title" data-aos="fade-up">Our Infrastructure</h2>
        <p className="infrastructure-subtext" data-aos="fade-up" data-aos-delay="200">
          State-of-the-art CNC facility equipped for precision and reliability.
        </p>

        <div className="infra-description" data-aos="fade-up" data-aos-delay="300">
          <div className="infra-point" data-aos="zoom-in-up" data-aos-delay="400">
            <p>
              MICROAUTOMATION is built in an area of over 2600 sq. feet and is installed with branded CNC machines like ACE Turning Centers, Vertical Machining Center, and drilling machine.
            </p>
          </div>
          <div className="infra-point" data-aos="zoom-in-up" data-aos-delay="600">
            <p>
              Our testing and inspection facilities are well equipped to deliver high-quality precision components, measured using branded instruments like VMM and 2D Height Gauge.
            </p>
          </div>
        </div>

        <div className="infra-grid">
          {infrastructureImages.map((item, index) => (
            <div className="infra-card" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <img src={item.src} alt={item.caption} className="infra-image" />
              <p className="infra-caption">{item.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;

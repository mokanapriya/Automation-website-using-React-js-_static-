
// import React, { useState, useEffect } from 'react';
// import Lightbox from 'yet-another-react-lightbox';
// import 'yet-another-react-lightbox/styles.css';
// import '../App.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// // Sample product data
// const projects = [
//   {
//     img: '/image/1.png',
//     alt: 'Double-Groove Spacer or Pulley Spacer',
//     description: 'Used in power transmission systems, offering dual groove functionality for improved load balance.'
//   },
//   {
//     img: '/image/2.png',
//     alt: 'Single-Bore Precision Spacer',
//     description: 'Provides precise spacing for rotating machinery, typically used in mechanical assemblies.'
//   },
//   {
//     img: '/image/3.png',
//     alt: 'Central Bore Bushing or Sleeve',
//     description: 'Ensures proper alignment and reduces friction in rotating shafts.'
//   },
//   {
//     img: '/image/4.png',
//     alt: 'External Threaded Lock Nut / Slotted Retaining Ring',
//     description: 'Used in mechanical assemblies for secure locking and easy disassembly.'
//   },
//   {
//     img: '/image/5.png',
//     alt: 'Circular Cap with Center Bore',
//     description: 'Covers and protects mechanical parts while allowing shaft passage.'
//   },
//   {
//     img: '/image/6.png',
//     alt: 'Brass Male Connector or Custom Nozzle',
//     description: 'Connects fluid or air systems in industrial machinery.'
//   },
//   {
//     img: '/image/7.png',
//     alt: 'Splined Shaft with Locking Collar',
//     description: 'Transfers torque with secure axial positioning.'
//   },
//   {
//     img: '/image/8.png',
//     alt: 'Machined Components',
//     description: 'Precision components tailored to diverse industrial needs.'
//   },
//   {
//     img: '/image/9.png',
//     alt: 'Spline Shaft',
//     description: 'Facilitates torque transmission in power equipment.'
//   },
//   {
//     img: '/image/10.png',
//     alt: 'Knurled Head Screw',
//     description: 'Hand-adjustable fastener for tool-free applications.'
//   },
//   {
//     img: '/image/11.png',
//     alt: 'Quick Connect Coupling',
//     description: 'Allows rapid, leak-proof connection of fluid lines.'
//   },
//   {
//     img: '/image/12.png',
//     alt: 'Quick Connect Couplings (Multiple Units)',
//     description: 'Batch of high-performance fluid connectors.'
//   },
//   {
//     img: '/image/13.png',
//     alt: 'Quick Connect Coupling (Front View)',
//     description: 'Front view showcasing interface design.'
//   },
//   {
//     img: '/image/14.png',
//     alt: 'Quick Connect Coupling (Side View)',
//     description: 'Side view showing locking mechanism.'
//   }
// ];

// // Color blob component
// const ColorBlob = ({ sx }) => (
//   <div
//     style={{
//       position: 'absolute',
//       borderRadius: '50%',
//       filter: 'blur(120px)',
//       opacity: 0.5,
//       zIndex: 0,
//       ...sx,
//     }}
//   />
// );

// const OurProduct = () => {
//   const [index, setIndex] = useState(-1);

//   useEffect(() => {
//     AOS.init({ duration: 800 });
//   }, []);

//   return (
//     <>
//       {/* Background with blobs and gradient */}
//       <div className="blob-background" style={{ position: 'relative', padding: '4rem 2rem', overflow: 'hidden' }}>
//         <ColorBlob sx={{ width: 300, height: 300, backgroundColor: '#f06292', top: -100, left: -100 }} />
//         <ColorBlob sx={{ width: 250, height: 250, backgroundColor: '#4dd0e1', bottom: -80, right: -50 }} />
//         <ColorBlob sx={{ width: 200, height: 200, backgroundColor: '#ffd54f', top: 150, right: 100 }} />

//         {/* Products Grid */}
//         <div className="product-grid" style={{ position: 'relative', zIndex: 1 }}>
//           {projects.map((project, i) => (
//             <div
//               key={i}
//               className="product-card"
//               onClick={() => setIndex(i)}
//               style={{ cursor: 'pointer' }}
//               data-aos="zoom-in-up"
//             >
//               <div className="product-thumb">
//                 <img src={project.img} alt={project.alt} className="product-image" />
//                 <div className="overlay">
//                   <a href={project.img} className="icon-link" title="View Product" onClick={(e) => e.preventDefault()}>
//                     🔗
//                   </a>
//                 </div>
//               </div>
//               <div className="product-title">{project.alt}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Preview */}
//       {index >= 0 && (
//         <Lightbox
//           open={index >= 0}
//           index={index}
//           close={() => setIndex(-1)}
//           slides={projects.map((p) => ({ src: p.img }))}
//           render={{
//             slide: () => (
//               <div className="lightbox-custom-slide" data-aos="fade-up">
//                 <img src={projects[index].img} alt={projects[index].alt} />
//                 <div className="lightbox-caption">
//                   <h3>{projects[index].alt}</h3>
//                   <p>{projects[index].description}</p>
//                 </div>
//               </div>
//             ),
//           }}
//         />
//       )}
//     </>
//   );
// };

// export default OurProduct;
import React, { useState, useEffect } from 'react';
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
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '4rem 2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Products Grid */}
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
                <img src={project.img} alt={project.alt} className="product-image" />
                <div className="overlay">
                  <a href={project.img} className="icon-link" title="View Product" onClick={(e) => e.preventDefault()}>
                    🔗
                  </a>
                </div>
              </div>
              <div className="product-title">{project.alt}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview */}
      {index >= 0 && (
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={projects.map((p) => ({ src: p.img }))}
          render={{
            slide: () => (
              <div className="lightbox-custom-slide" data-aos="fade-up">
                <img src={projects[index].img} alt={projects[index].alt} />
                <div className="lightbox-caption">
                  <h3>{projects[index].alt}</h3>
                  <p>{projects[index].description}</p>
                </div>
              </div>
            ),
          }}
        />
      )}
    </>
  );
};

export default OurProduct;

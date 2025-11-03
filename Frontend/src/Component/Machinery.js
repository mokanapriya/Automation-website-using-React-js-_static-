
// import React, { useEffect } from 'react';
// import { Box, Typography, Container, Grid, Divider, Paper } from '@mui/material';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const machineryList = [
//   {
//     title: "VMC MILLING CENTER",
//     details: "Bed Size – 1000 x 530 x 530 – with 4 Axis",
//     img: "/image/vertical.png",
//   },
//   {
//     title: "CNC TURNING CENTER ACE CLASSIC LM",
//     details: "Turning Diameter – 400 MM, Turning Length – 650 MM, Spindle Hallowbar – 75 MM",
//     img: "/image/CNC.png",
//   },
//   {
//     title: "CNC TURNING CENTER ACE JOBBER XL",
//     details: "Turning Diameter – 200 MM, Turning Length – 300 MM, Spindle Hallowbar – 36 MM",
//     img: "/image/15.png",
//   },
//   {
//     title: "CNC TURNING CENTER ACE JOBBER XL",
//     details: "Turning Diameter – 200 MM, Turning Length – 300 MM, Spindle Hallowbar – 36 MM",
//     img: "/image/16.png",
//   },
//   {
//     title: "DRILLING MACHINE",
//     details: "1.5 Inch Capacity",
//     img: "/image/drill.png",
//   },
// ];

// const Machinery = () => {
//   useEffect(() => {
//     AOS.init({ duration: 700, once: true });
//   }, []);

//   return (
//     <Box
//       sx={{
//         background: 'linear-gradient(135deg, #f0f4f8, #d9e2ec)',
//         minHeight: '100vh',
//         py: 8,
//         position: 'relative',
//         overflow: 'hidden',
//       }}
//     >
//       {/* Soft wave background */}
//       <Box
//         sx={{
//           position: 'absolute',
//           top: -100,
//           left: 0,
//           right: 0,
//           height: 200,
//           background:
//             'radial-gradient(circle at top center, #a0c4ff33, transparent 70%)',
//           zIndex: 0,
//           pointerEvents: 'none',
//         }}
//       />

//       <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
//         <Typography
//           variant="h3"
//           align="center"
//           gutterBottom
//           sx={{
//             fontWeight: 700,
//             color: '#334e68',
//             mb: 4,
//             fontFamily: '"Poppins", sans-serif',
//           }}
//         >
//           Machinery Details
//         </Typography>

//         <Divider
//           sx={{
//             mb: 6,
//             borderColor: '#627d98',
//             width: 100,
//             mx: 'auto',
//             borderWidth: 2,
//             borderRadius: 1,
//           }}
//         />

//         {machineryList.map((machine, idx) => {
//           const isEven = idx % 2 === 1;
//           return (
//             <Grid
//               container
//               key={idx}
//               spacing={4}
//               flexDirection={isEven ? 'row-reverse' : 'row'}
//               alignItems="center"
//               data-aos={isEven ? 'fade-left' : 'fade-right'}
//               data-aos-delay={idx * 150}
//               sx={{ mb: 8 }}
//             >
//               <Grid item xs={12} md={6}>
//                 <Paper
//                   elevation={3}
//                   sx={{
//                     borderRadius: 3,
//                     overflow: 'hidden',
//                     transition: 'transform 0.3s ease',
//                     '&:hover': {
//                       transform: 'scale(1.03)',
//                       boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
//                     },
//                   }}
//                 >
//                   <Box
//                     component="img"
//                     src={machine.img}
//                     alt={machine.title}
//                     sx={{
//                       width: '100%',
//                       height: 300,
//                       objectFit: 'cover',
//                     }}
//                   />
//                 </Paper>
//               </Grid>

//               <Grid item xs={12} md={6}>
//                 <Typography
//                   variant="h5"
//                   fontWeight="600"
//                   color="#334e68"
//                   gutterBottom
//                 >
//                   {machine.title}
//                 </Typography>
//                 <Divider
//                   sx={{
//                     mb: 2,
//                     borderColor: '#bcccdc',
//                     width: 60,
//                     borderWidth: 1.5,
//                     borderRadius: 1,
//                   }}
//                 />
//                 <Typography
//                   variant="body1"
//                   color="#627d98"
//                   sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}
//                 >
//                   {machine.details}
//                 </Typography>
//               </Grid>
//             </Grid>
//           );
//         })}
//       </Container>
//     </Box>
//   );
// };

// export default Machinery;
import React, { useEffect } from 'react';
import { Box, Typography, Container, Grid, Divider, Paper } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

const machineryList = [
  {
    title: "VMC MILLING CENTER",
    details: "Bed Size – 1000 x 530 x 530 – with 4 Axis",
    img: "/image/vertical.png",
  },
  {
    title: "CNC TURNING CENTER ACE CLASSIC LM",
    details: "Turning Diameter – 400 MM, Turning Length – 650 MM, Spindle Hallowbar – 75 MM",
    img: "/image/CNC.png",
  },
  {
    title: "CNC TURNING CENTER ACE JOBBER XL",
    details: "Turning Diameter – 200 MM, Turning Length – 300 MM, Spindle Hallowbar – 36 MM",
    img: "/image/15.png",
  },
  {
    title: "CNC TURNING CENTER ACE JOBBER XL",
    details: "Turning Diameter – 200 MM, Turning Length – 300 MM, Spindle Hallowbar – 36 MM",
    img: "/image/16.png",
  },
  {
    title: "DRILLING MACHINE",
    details: "1.5 Inch Capacity",
    img: "/image/drill.png",
  },
];

const Machinery = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#ffffff',  // White background
        minHeight: '100vh',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Removed the soft wave background */}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: '#334e68',
            mb: 4,
            fontFamily: '"Poppins", sans-serif',
          }}
        >
          Machinery Details
        </Typography>

        <Divider
          sx={{
            mb: 6,
            borderColor: '#627d98',
            width: 100,
            mx: 'auto',
            borderWidth: 2,
            borderRadius: 1,
          }}
        />

        {machineryList.map((machine, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <Grid
              container
              key={idx}
              spacing={4}
              flexDirection={isEven ? 'row-reverse' : 'row'}
              alignItems="center"
              data-aos={isEven ? 'fade-left' : 'fade-right'}
              data-aos-delay={idx * 150}
              sx={{ mb: 8 }}
            >
              <Grid item xs={12} md={6}>
                <Paper
                  elevation={3}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.03)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.15)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={machine.img}
                    alt={machine.title}
                    sx={{
                      width: '100%',
                      height: 300,
                      objectFit: 'cover',
                    }}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} md={6}>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color="#334e68"
                  gutterBottom
                >
                  {machine.title}
                </Typography>
                <Divider
                  sx={{
                    mb: 2,
                    borderColor: '#bcccdc',
                    width: 60,
                    borderWidth: 1.5,
                    borderRadius: 1,
                  }}
                />
                <Typography
                  variant="body1"
                  color="#627d98"
                  sx={{ fontSize: '1.1rem', lineHeight: 1.6 }}
                >
                  {machine.details}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Container>
    </Box>
  );
};

export default Machinery;

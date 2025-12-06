
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublicIcon from '@mui/icons-material/Public';

const qualityPoints = [
  {
    title: 'Integrity & Ethics',
    icon: SecurityIcon,
    desc: 'Transparency and honesty guide all our decisions.',
    color: '#6a11cb',
  },
  {
    title: 'Learning Culture',
    icon: SchoolIcon,
    desc: 'We grow through continuous learning and skill-building.',
    color: '#2575fc',
  },
  {
    title: 'Customer Centricity',
    icon: PeopleIcon,
    desc: 'Putting our customers first is our top priority.',
    color: '#fc5c7d',
  },
  {
    title: 'Innovation',
    icon: EmojiObjectsIcon,
    desc: 'We embrace forward-thinking ideas and creativity.',
    color: '#00c6ff',
  },
  {
    title: 'Well-being',
    icon: FavoriteIcon,
    desc: 'Health, safety, and happiness of our people come first.',
    color: '#f7971e',
  },
  {
    title: 'Sustainability',
    icon: PublicIcon,
    desc: 'Protecting the planet and its resources responsibly.',
    color: '#43cea2',
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const QualityPolicy = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 10 },
        pb: { xs: 6, md: 12 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#fff',
        minHeight: '100vh',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontWeight={900}
          textAlign="center"
          gutterBottom
          sx={{
            mb: 4,
            background: 'linear-gradient(90deg, #6a11cb, #2575fc)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.04em',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Quality Policy
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          sx={{
            maxWidth: 720,
            mx: 'auto',
            mb: { xs: 4, md: 8 },
            fontWeight: 400,
            letterSpacing: '0.02em',
            lineHeight: 1.6,
            fontSize: { xs: '1rem', md: '1.25rem' },
          }}
        >
          Our company is committed to maintaining the highest quality standards
          through the following principles:
        </Typography>

        <Grid
          container
          spacing={{ xs: 4, sm: 5, md: 6 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {qualityPoints.map(({ title, icon: Icon, desc, color }, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                custom={index}
                whileHover={{
                  scale: 1.06,
                  boxShadow: `0 20px 40px ${color}80`,
                }}
                transition={{ type: 'spring', stiffness: 140 }}
              >
                <Paper
                  elevation={8}
                  sx={{
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    borderRadius: 4,
                    background: 'rgba(255, 255, 255, 0.98)',
                    backdropFilter: 'blur(14px)',
                    height: '100%',
                  }}
                >
                  <Avatar
                    sx={{
                      bgcolor: color,
                      width: 68,
                      height: 68,
                      mb: 2,
                      boxShadow: `0 8px 20px ${color}55`,
                      color: 'white',
                    }}
                  >
                    <Icon fontSize="large" />
                  </Avatar>

                  <Typography
                    variant="h6"
                    fontWeight={700}
                    color="text.primary"
                    sx={{ letterSpacing: '0.03em' }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.text.secondary}
                    sx={{ px: { xs: 1, md: 3 }, lineHeight: 1.6 }}
                  >
                    {desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default QualityPolicy;

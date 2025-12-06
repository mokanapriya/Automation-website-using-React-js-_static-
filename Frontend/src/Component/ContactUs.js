import React from 'react';
import { Container, Box, Typography, Grid, Paper } from '@mui/material';
import '../App.css';

const ContactUs = () => {
  return (
    <Box
      sx={{
        pt: { xs: 12, md: 10 },
        pb: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
        backgroundColor: '#f9fafb',
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
            mb: 4,
            fontSize: { xs: '2rem', md: '3rem' },
            color: '#003366',
          }}
        >
          Get in Touch
        </Typography>

        <Grid container spacing={4} sx={{ mb: 4 }}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, md: 4 },
                borderRadius: 3,
                backgroundColor: '#ffffff',
              }}
            >
              <form className="contact-form" style={{ padding: 0 }}>
                <div className="form-row" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="name" style={{ alignSelf: 'center' }}>Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div className="form-row" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="email" style={{ alignSelf: 'center' }}>Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                    }}
                  />
                </div>

                <div className="form-row" style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="message" style={{ alignSelf: 'flex-start', paddingTop: '0.75rem' }}>Message</label>
                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Type your message here..."
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      fontFamily: 'inherit',
                      resize: 'vertical',
                    }}
                  ></textarea>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                  <button
                    type="submit"
                    style={{
                      padding: '0.75rem 2rem',
                      background: '#003366',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 600,
                      transition: 'background 0.3s',
                    }}
                    onMouseOver={(e) => e.target.style.background = '#004080'}
                    onMouseOut={(e) => e.target.style.background = '#003366'}
                  >
                    Send
                  </button>
                </div>
              </form>
            </Paper>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 2, md: 3 },
                borderRadius: 3,
                backgroundColor: '#ffffff',
                height: '100%',
              }}
            >
              <Box className="contact-info" style={{ padding: 0 }}>
                <Box
                  sx={{
                    mb: 3,
                    pb: 2,
                    borderBottom: '2px solid #e5e7eb',
                  }}
                >
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#003366' }}>
                    Address
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    📍 No: 7/25, Ramasamy Nagar, Karuparayanpalayam, Mylampatti Post,
                    <br />
                    Coimbatore, Tamil Nadu 641062, INDIA
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mb: 3,
                    pb: 2,
                    borderBottom: '2px solid #e5e7eb',
                  }}
                >
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#003366' }}>
                    Phone
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    📞 9655821758, 9843036020
                  </Typography>
                </Box>

                <Box>
                  <Typography variant="h6" fontWeight={700} sx={{ mb: 1, color: '#003366' }}>
                    Email
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    📧 microautomation@aol.in
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>

        {/* Map */}
        <Box
          sx={{
            mt: 4,
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 3,
          }}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.472771052145!2d76.99660411480032!3d11.007451792163807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857dbfbf6466b%3A0xdcc1e92df36a45e5!2sMicroform%20Automation!5e0!3m2!1sen!2sin!4v1683612345678!5m2!1sen!2sin"
            loading="lazy"
            style={{
              width: '100%',
              height: '400px',
              border: 'none',
              display: 'block',
            }}
          ></iframe>
        </Box>
      </Container>
    </Box>
  );
};

export default ContactUs;
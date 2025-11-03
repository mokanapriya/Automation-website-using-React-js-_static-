import React from 'react';
import { Card } from '@mui/material';
import { motion } from 'framer-motion';

const AnimatedCard = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ padding: 2, borderRadius: 2, boxShadow: 3 }}>
        {children}
      </Card>
    </motion.div>
  );
};

export default AnimatedCard;

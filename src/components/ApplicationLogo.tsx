import React from 'react';
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import grpcLogo from '../assets/grpc-logo.png';

const ApplicationLogo: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexGrow: { xs: 1, md: 1 } }}>
      <NavLink to="/">
        <Box component="img" sx={{ width: '16rem', my: '0.25rem', mx: '1rem' }} src={grpcLogo} alt="gRPC logo" />
      </NavLink>
    </Box>
  );
};

export default ApplicationLogo;
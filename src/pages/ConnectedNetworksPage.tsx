import React from 'react';
import { Grid2 } from '@mui/material';
import NetworksInformation from '../components/NetworksInformation';

const ConnectedNetworksPage: React.FC = () => {

  return (
    <>
      <Grid2 container spacing={0} alignItems={'stretch'}>
        <NetworksInformation />
      </Grid2>
    </>
  );
};

export default ConnectedNetworksPage;
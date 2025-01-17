import { Button, Container, Grid2, lighten, Paper, Typography, useTheme } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const theme = useTheme();

  return (
    <Container sx={{ my: '2rem' }}>
      <Grid2 container>
        <Grid2 size={{ xs: 12, sm: 12 }}>
          <Typography variant='h1'>The Art of Programming</Typography>
          <Typography variant='h2'>C# gRPC, React, Docker & Kubernetes</Typography>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={3}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper sx={{ minHeight: '20rem', p: '2rem', backgroundColor: lighten(theme.palette.primary.main, 0.2), color: theme.palette.primary.contrastText }}>
            <Typography variant="h2">gRPC Connected Networks.</Typography>
            <Typography>View the gRPC Connected Networks.</Typography>
            <Button component={Link} to="/networks" sx={{ marginTop: '2rem' }} variant="contained" color="secondary">
              gRPC Connected Networks
            </Button>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, }}>
          <Paper sx={{ minHeight: '20rem', p: '2rem', backgroundColor: lighten(theme.palette.primary.main, 0.7) }}>
            <Typography variant="h2">About this tutorial.</Typography>
            <Typography>Check out my blog posts to support the development of this application.</Typography>
            <Button component={Link} to="/about" sx={{ marginTop: '2rem' }} variant="contained" color="primary">
              About
            </Button>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default HomePage;
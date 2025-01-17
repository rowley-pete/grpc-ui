import React from 'react';
import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

export interface MainMenuNavigationProps {
  pages: {
    name: string;
    url: string;
  }[];
  handleCloseNavMenu: () => void;
}

const MainMenuNavigation: React.FC<MainMenuNavigationProps> = ({ pages, handleCloseNavMenu }) => {
  return (
    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <Link
          key={page.name}
          component={NavLink}
          to={page.url}
          underline="hover"
          textAlign="center"
          color="white"
          sx={{ mx: '1.5rem' }}
          onClick={handleCloseNavMenu}
        >
          {page.name}
        </Link>
      ))}
    </Box>
  );
};

export default MainMenuNavigation;
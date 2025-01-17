import { AppBar, Box, Container, Toolbar } from '@mui/material';
import React, { ReactNode, useState } from 'react';
import ApplicationLogo from '../components/ApplicationLogo';
import SideMenuNavigation from '../components/SideMenuNavigation';
import MainMenuNavigation from '../components/MainMenuNavigation';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const pages = [
    { name: 'Home', url: '/' },
    { name: 'Networks', url: '/networks' },
    { name: 'About', url: '/about' }
  ]
    .filter((page) => !!page)
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    .map((page) => page!);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar color='primary' elevation={0} position='fixed' sx={{ displayPrint: 'none', py: '1rem', px: 0 }}>
        <Toolbar disableGutters>

          <SideMenuNavigation
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
            pages={pages} />

          <ApplicationLogo />

          <MainMenuNavigation pages={pages} handleCloseNavMenu={handleCloseNavMenu} />

        </Toolbar>
      </AppBar>
      <Box sx={{ height: 105, width: '100%' }} />
      <Container sx={{ my: '2rem' }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
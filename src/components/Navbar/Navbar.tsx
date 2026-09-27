import { useEffect, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { tokens } from '../../theme/theme';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 12 });

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(10,11,15,0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? `1px solid ${tokens.border}` : '1px solid transparent',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Typography
            variant="h6"
            component="button"
            onClick={() => scrollTo('home')}
            sx={{
              flexGrow: 1,
              textAlign: 'left',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: tokens.text,
              fontSize: '1.05rem',
              letterSpacing: '-0.01em',
            }}
          >
            yourname.dev
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                sx={{
                  color: active === item.id ? tokens.text : tokens.textMuted,
                  px: 2,
                  position: 'relative',
                  '&:hover': { color: tokens.text, bgcolor: 'transparent' },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    left: 16,
                    right: 16,
                    bottom: 6,
                    height: '1.5px',
                    bgcolor: tokens.accent,
                    opacity: active === item.id ? 1 : 0,
                    transition: 'opacity 0.2s ease',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <IconButton
            sx={{ display: { xs: 'inline-flex', md: 'none' }, color: tokens.text }}
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: '78%',
            maxWidth: 320,
            bgcolor: tokens.bgElevated,
            borderLeft: `1px solid ${tokens.border}`,
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
          <IconButton onClick={() => setMobileOpen(false)} sx={{ color: tokens.text }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Box>
        <List sx={{ px: 1 }}>
          {NAV_ITEMS.map((item) => (
            <ListItemButton
              key={item.id}
              onClick={() => scrollTo(item.id)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                color: active === item.id ? tokens.text : tokens.textMuted,
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
}

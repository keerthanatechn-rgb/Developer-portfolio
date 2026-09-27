import { Box, Container, Typography, Button, Stack, Fade } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import HeroScene from '../3d/HeroScene';
import { tokens } from '../../theme/theme';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 12, md: 0 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.1fr 0.9fr' },
            alignItems: 'center',
            gap: { xs: 4, md: 6 },
          }}
        >
          <Fade in timeout={700}>
            <Box>
              <Typography
                sx={{
                  color: tokens.accent,
                  fontSize: '0.95rem',
                  mb: 2,
                  fontFamily: "'Fraunces', Georgia, serif",
                }}
              >
                Hi, I&apos;m Keerthana
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3.2rem', md: '3.8rem' },
                  lineHeight: 1.08,
                  mb: 2,
                  maxWidth: 620,
                }}
              >
                Computer Science Student &amp; Developer
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontSize: '1.05rem', maxWidth: 480, mb: 4 }}
              >
                Building practical digital experiences with code, data and modern
                technologies.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollTo('projects')}
                >
                  View Projects
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollTo('contact')}
                >
                  Contact Me
                </Button>
              </Stack>
            </Box>
          </Fade>

          <Box sx={{ height: { xs: 320, md: 460 } }}>
            <HeroScene />
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          bottom: 28,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5,
          color: tokens.textMuted,
        }}
      >
        <Typography variant="caption">Scroll</Typography>
        <ArrowDownwardIcon
          sx={{
            fontSize: 16,
            animation: 'floatDown 2s ease-in-out infinite',
            '@keyframes floatDown': {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(6px)' },
            },
          }}
        />
      </Box>
    </Box>
  );
}

import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { tokens } from '../../theme/theme';

const STATS = [
  { label: 'Projects Built', value: '12+' },
  { label: 'Technologies', value: '18' },
  { label: 'Years Learning', value: '4' },
  { label: 'Problem Solving', value: '250+' },
];

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Typography
              variant="body2"
              sx={{ color: tokens.accent, mb: 1.5, fontFamily: "'Fraunces', Georgia, serif" }}
            >
              About
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 3 }}>
              A computer science student who enjoys turning ideas into working software.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 480, mb: 2 }}>
              I&apos;m currently studying computer science with a focus on full-stack
              development and applied machine learning. I like working across the stack —
              from designing an interface to shaping the data behind it — and I learn
              fastest by building things I&apos;d actually want to use.
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 480 }}>
              Outside of coursework, I contribute to a few open-source projects and spend
              time experimenting with 3D on the web, like the scene in this hero section.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {STATS.map((stat) => (
                <Grid item xs={6} key={stat.label}>
                  <Paper
                    variant="outlined"
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      bgcolor: tokens.bgElevated,
                      height: '100%',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontSize: { xs: '1.6rem', md: '2rem' },
                        fontWeight: 600,
                        color: tokens.text,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 0.5 }}>
                      {stat.label}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

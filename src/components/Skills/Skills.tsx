import { Box, Container, Typography, Grid, Paper, Chip, Stack } from '@mui/material';
import { skills } from '../../data/skills';
import { tokens } from '../../theme/theme';

export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{ color: tokens.accent, mb: 1.5, fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Skills
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 6, maxWidth: 600 }}>
          Tools and technologies I use to build things
        </Typography>

        <Grid container spacing={2.5}>
          {skills.map((group) => (
            <Grid item xs={12} sm={6} md={4} key={group.category}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: tokens.bgElevated,
                  transition: 'border-color 0.2s ease',
                  '&:hover': { borderColor: tokens.borderStrong },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Fraunces', Georgia, serif",
                    fontSize: '1rem',
                    mb: 2,
                    color: tokens.text,
                  }}
                >
                  {group.category}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1}>
                  {group.items.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      size="small"
                      sx={{
                        transition: 'all 0.18s ease',
                        '&:hover': {
                          borderColor: tokens.accent,
                          color: tokens.text,
                          transform: 'translateY(-1px)',
                        },
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

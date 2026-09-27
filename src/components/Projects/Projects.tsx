import { Box, Container, Typography, Grid } from '@mui/material';
import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';
import { tokens } from '../../theme/theme';

export default function Projects() {
  return (
    <Box id="projects" component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{ color: tokens.accent, mb: 1.5, fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Projects
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 6, maxWidth: 600 }}>
          A few things I&apos;ve built
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} sm={6} key={project.id}>
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

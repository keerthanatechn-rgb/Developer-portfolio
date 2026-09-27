import { Box, Container, Typography, Chip } from '@mui/material';
import { experience, TimelineEntry } from '../../data/experience';
import { tokens } from '../../theme/theme';

const TYPE_LABEL: Record<TimelineEntry['type'], string> = {
  education: 'Education',
  internship: 'Internship',
  certification: 'Certification',
  achievement: 'Achievement',
};

export default function Experience() {
  return (
    <Box id="experience" component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{ color: tokens.accent, mb: 1.5, fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Experience
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 6, maxWidth: 600 }}>
          Education, internships &amp; milestones
        </Typography>

        <Box sx={{ position: 'relative', maxWidth: 780 }}>
          <Box
            sx={{
              position: 'absolute',
              left: 7,
              top: 8,
              bottom: 8,
              width: '1px',
              bgcolor: tokens.border,
            }}
          />

          {experience.map((entry) => (
            <Box key={entry.id} sx={{ position: 'relative', pl: 5, pb: 5, '&:last-of-type': { pb: 0 } }}>
              <Box
                sx={{
                  position: 'absolute',
                  left: 0,
                  top: 6,
                  width: 15,
                  height: 15,
                  borderRadius: '50%',
                  border: `2px solid ${tokens.accent}`,
                  bgcolor: tokens.bg,
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: 1.5,
                  mb: 0.75,
                }}
              >
                <Typography sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.05rem' }}>
                  {entry.title}
                </Typography>
                <Chip label={TYPE_LABEL[entry.type]} size="small" />
              </Box>
              <Typography variant="body2" sx={{ color: tokens.text, mb: 0.5 }}>
                {entry.organization}, {entry.period}
              </Typography>
              <Typography variant="body2" sx={{ maxWidth: 560 }}>
                {entry.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

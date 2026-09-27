import { Box, Container, Typography, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { tokens } from '../../theme/theme';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{ borderTop: `1px solid ${tokens.border}`, py: 4 }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">
            Your Name — {year}. Built with React &amp; Three.js.
          </Typography>

          <Stack direction="row" spacing={1} alignItems="center">
            <IconButton
              size="small"
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: tokens.textMuted, '&:hover': { color: tokens.text } }}
              aria-label="GitHub"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: tokens.textMuted, '&:hover': { color: tokens.text } }}
              aria-label="LinkedIn"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              href="mailto:you@example.com"
              sx={{ color: tokens.textMuted, '&:hover': { color: tokens.text } }}
              aria-label="Email"
            >
              <EmailIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={scrollTop}
              sx={{
                color: tokens.textMuted,
                border: `1px solid ${tokens.border}`,
                ml: 1,
                '&:hover': { color: tokens.text, borderColor: tokens.borderStrong },
              }}
              aria-label="Back to top"
            >
              <ArrowUpwardIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

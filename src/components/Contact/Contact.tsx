import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Stack,
  Link,
  Alert,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import RoomIcon from '@mui/icons-material/RoomOutlined';
import { tokens } from '../../theme/theme';

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const CONTACT_LINKS = [
  { icon: <EmailIcon fontSize="small" />, label: 'you@example.com', href: 'mailto:you@example.com' },
  { icon: <LinkedInIcon fontSize="small" />, label: 'linkedin.com/in/yourname', href: 'https://linkedin.com/in/yourname' },
  { icon: <GitHubIcon fontSize="small" />, label: 'github.com/yourusername', href: 'https://github.com/yourusername' },
  { icon: <RoomIcon fontSize="small" />, label: 'Your City, Country', href: undefined },
];

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Name is required.';
  if (!values.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.';
  }
  if (!values.message.trim()) {
    errors.message = 'Message is required.';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange =
    (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Replace with a real submission (form service, API route, mailto, etc.)
      setSubmitted(true);
      setValues({ name: '', email: '', message: '' });
    }
  };

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 10, md: 14 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{ color: tokens.accent, mb: 1.5, fontFamily: "'Fraunces', Georgia, serif" }}
        >
          Contact
        </Typography>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 6, maxWidth: 600 }}>
          Let&apos;s work together
        </Typography>

        <Grid container spacing={{ xs: 5, md: 8 }}>
          <Grid item xs={12} md={5}>
            <Typography variant="body1" sx={{ maxWidth: 400, mb: 4 }}>
              I&apos;m open to internships, collaborations, and interesting projects.
              Reach out through any of these, or use the form.
            </Typography>
            <Stack spacing={2}>
              {CONTACT_LINKS.map((item) => (
                <Stack direction="row" spacing={1.5} alignItems="center" key={item.label}>
                  <Box sx={{ color: tokens.accent, display: 'flex' }}>{item.icon}</Box>
                  {item.href ? (
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      sx={{ color: tokens.textMuted, '&:hover': { color: tokens.text } }}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Typography variant="body2">{item.label}</Typography>
                  )}
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box component="form" onSubmit={handleSubmit} noValidate>
              <Stack spacing={2.5}>
                {submitted && (
                  <Alert severity="success" onClose={() => setSubmitted(false)}>
                    Thanks — your message has been sent. I&apos;ll reply soon.
                  </Alert>
                )}
                <TextField
                  label="Name"
                  fullWidth
                  value={values.name}
                  onChange={handleChange('name')}
                  error={Boolean(errors.name)}
                  helperText={errors.name}
                />
                <TextField
                  label="Email"
                  type="email"
                  fullWidth
                  value={values.email}
                  onChange={handleChange('email')}
                  error={Boolean(errors.email)}
                  helperText={errors.email}
                />
                <TextField
                  label="Message"
                  fullWidth
                  multiline
                  minRows={4}
                  value={values.message}
                  onChange={handleChange('message')}
                  error={Boolean(errors.message)}
                  helperText={errors.message}
                />
                <Box>
                  <Button type="submit" variant="contained" size="large">
                    Send Message
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

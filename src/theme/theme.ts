import { createTheme, Shadows } from '@mui/material/styles';

// Design tokens — cozy professional ocean palette
// Background:  #0c1e26 (deep warm-leaning navy, not pure black)
// Elevated:    #122b35
// Border:      rgba(233,240,238,0.08) — hairline, warm-tinted
// Text:        #eaf2f0 (warm off-white) / muted #9fb8bd
// Accent:      #3ba9c7 (ocean teal-blue, single accent, used sparingly)

export const tokens = {
  bg: '#0c1e26',
  bgElevated: '#122b35',
  border: 'rgba(233, 240, 238, 0.08)',
  borderStrong: 'rgba(233, 240, 238, 0.16)',
  text: '#eaf2f0',
  textMuted: '#9fb8bd',
  accent: '#3ba9c7',
  accentSoft: 'rgba(59, 169, 199, 0.14)',
};

const headingFont = "'Fraunces', Georgia, serif";
const bodyFont = "'Inter', -apple-system, BlinkMacSystemFont, sans-serif";

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: tokens.bg,
      paper: tokens.bgElevated,
    },
    text: {
      primary: tokens.text,
      secondary: tokens.textMuted,
    },
    primary: {
      main: tokens.accent,
      contrastText: '#0c1e26',
    },
    divider: tokens.border,
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily: bodyFont,
    h1: {
      fontFamily: headingFont,
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: headingFont,
      fontWeight: 600,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: headingFont,
      fontWeight: 600,
    },
    h4: {
      fontFamily: headingFont,
      fontWeight: 500,
    },
    h5: {
      fontFamily: headingFont,
      fontWeight: 500,
    },
    h6: {
      fontFamily: headingFont,
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.75,
      color: tokens.textMuted,
    },
    body2: {
      lineHeight: 1.65,
      color: tokens.textMuted,
    },
    button: {
      textTransform: 'none',
      fontWeight: 500,
      letterSpacing: '-0.005em',
    },
  },
  // A soft, low, warm shadow for a "cozy" sense of depth rather than a flat look —
  // used sparingly (mainly on hover states), not a heavy default across all cards.
  shadows: Array(25).fill('none').map((_, i) =>
    i === 0
      ? 'none'
      : '0 12px 32px -16px rgba(4, 20, 26, 0.55)'
  ) as unknown as Shadows,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 22px',
          fontSize: '0.95rem',
        },
        contained: {
          backgroundColor: tokens.text,
          color: tokens.bg,
          '&:hover': {
            backgroundColor: tokens.accent,
            color: '#fff',
          },
        },
        outlined: {
          borderColor: tokens.borderStrong,
          color: tokens.text,
          '&:hover': {
            borderColor: tokens.accent,
            backgroundColor: tokens.accentSoft,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          border: `1px solid ${tokens.border}`,
          backgroundColor: 'transparent',
          color: tokens.textMuted,
          fontSize: '0.8rem',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          border: `1px solid ${tokens.border}`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            '& fieldset': { borderColor: tokens.border },
            '&:hover fieldset': { borderColor: tokens.borderStrong },
            '&.Mui-focused fieldset': { borderColor: tokens.accent },
          },
        },
      },
    },
  },
});

export default theme;

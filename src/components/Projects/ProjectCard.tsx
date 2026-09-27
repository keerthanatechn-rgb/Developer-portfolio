import { useRef, useState, CSSProperties, MouseEvent } from 'react';
import { Box, Paper, Typography, Stack, Chip, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Project } from '../../data/projects';
import { tokens } from '../../theme/theme';

interface ProjectCardProps {
  project: Project;
}

// Lightweight CSS-only tilt: reads pointer position relative to the card
// and applies a small perspective rotation. No extra libraries needed.
export default function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<CSSProperties>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setStyle({
      transform: `perspective(700px) rotateX(${-y * 5}deg) rotateY(${x * 5}deg) translateY(-2px)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({ transform: 'perspective(700px) rotateX(0) rotateY(0) translateY(0)' });
  };

  return (
    <Paper
      ref={cardRef}
      variant="outlined"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      sx={{
        bgcolor: tokens.bgElevated,
        overflow: 'hidden',
        transition: 'transform 0.15s ease, border-color 0.2s ease',
        willChange: 'transform',
        '&:hover': { borderColor: tokens.borderStrong },
        ...style,
      }}
    >
      <Box
        sx={{
          height: 140,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: `1px solid ${tokens.border}`,
          background:
            'linear-gradient(135deg, rgba(59,169,199,0.16), rgba(59,169,199,0.02))',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Fraunces', Georgia, serif",
            fontSize: '2.8rem',
            fontWeight: 600,
            color: tokens.accent,
            opacity: 0.85,
          }}
        >
          {project.accentLetter}
        </Typography>
      </Box>

      <Box sx={{ p: 3 }}>
        <Typography
          sx={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: '1.1rem', mb: 1 }}
        >
          {project.name}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2, minHeight: { md: 66 } }}>
          {project.description}
        </Typography>

        <Stack direction="row" flexWrap="wrap" gap={0.75} sx={{ mb: 2.5 }}>
          {project.tags.map((tag) => (
            <Chip key={tag} label={tag} size="small" />
          ))}
        </Stack>

        <Stack direction="row" spacing={1}>
          <Button
            size="small"
            variant="outlined"
            startIcon={<GitHubIcon fontSize="small" />}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </Button>
          {project.liveUrl && (
            <Button
              size="small"
              variant="text"
              startIcon={<LaunchIcon fontSize="small" />}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: tokens.textMuted, '&:hover': { color: tokens.text } }}
            >
              Live Demo
            </Button>
          )}
        </Stack>
      </Box>
    </Paper>
  );
}

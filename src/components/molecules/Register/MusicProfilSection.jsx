import React from "react";
import { Container, Typography, TextField, Select } from "../../atoms";

const MusicProfileSection = ({ theme, formData, errors, onInputChange }) => {
  const levels = [
    { value: 'Débutant', label: '🌱 Débutant' },
    { value: 'Intermédiaire', label: '🎯 Intermédiaire' },
    { value: 'Avancé', label: '🏆 Avancé' },
    { value: 'Expert', label: '⭐ Expert' }
  ];

  return (
    <Container.Base
      padding="1.5rem"
      bgColor={theme.colors.current.surfaceElevated}
      rounded
      style={{
        border: `1px solid ${theme.colors.current.border}`
      }}
    >
      <Typography.Typography
        variant="h4"
        margin="0 0 1rem 0"
        color={theme.colors.current.text}
      >
        🎵 Profil musical
      </Typography.Typography>

      <Container.Flex direction="column" gap="1rem">
        <Container.Flex direction="row" gap="1rem">
          <Container.Base style={{ flex: 1 }}>
            <Typography.Typography
              margin="0 0 0.5rem 0"
              color={theme.colors.current.text}
              size="0.9rem"
            >
              Expérience musicale *
            </Typography.Typography>
            <TextField.TextField
              value={formData.experience}
              onChange={(e) => onInputChange('experience', e.target.value)}
              placeholder="Ex: 5 ans, Débutant, etc."
              fullWidth
              rounded
              error={!!errors.experience}
              style={{
                backgroundColor: theme.colors.current.surface,
                color: theme.colors.current.text,
                border: `1px solid ${errors.experience ? theme.colors.secondary : theme.colors.current.border}`
              }}
            />
          </Container.Base>

          <Container.Base style={{ flex: 1 }}>
            <Typography.Typography
              margin="0 0 0.5rem 0"
              color={theme.colors.current.text}
              size="0.9rem"
            >
              Niveau
            </Typography.Typography>
            <Select.Base 
              value={formData.level}  
              onChange={value => onInputChange('level', value)}  
              options={levels}  
              theme={theme}  
            />  
          </Container.Base>
        </Container.Flex>

        {errors.experience && (
          <Typography.Typography color={theme.colors.secondary} size="0.9rem">
            {errors.experience}
          </Typography.Typography>
        )}
      </Container.Flex>
    </Container.Base>
  );
};

export default MusicProfileSection;
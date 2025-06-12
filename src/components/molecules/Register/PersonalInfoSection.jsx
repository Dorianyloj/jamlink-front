import React from "react";
import { Container, Typography, TextField } from "../../atoms";

const PersonalInfoSection = ({ theme, formData, errors, onInputChange }) => {
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
        👤 Informations personnelles
      </Typography.Typography>

      <Container.Flex direction="column" gap="1rem">
        <Container.Flex direction="row" gap="1rem">
          <TextField.TextField
            label="Prénom *"
            labelColor={theme.colors.current.text}
            value={formData.firstname}
            onChange={(e) => onInputChange('firstname', e.target.value)}
            placeholder="Votre prénom"
            fullWidth
            rounded
            error={!!errors.firstname}
            style={{
              backgroundColor: theme.colors.current.surface,
              color: theme.colors.current.text,
              border: `1px solid ${errors.firstname ? theme.colors.secondary : theme.colors.current.border}`
            }}
          />

          <TextField.TextField
            label="Nom *"
            labelColor={theme.colors.current.text}
            value={formData.lastname}
            onChange={(e) => onInputChange('lastname', e.target.value)}
            placeholder="Votre nom"
            fullWidth
            rounded
            error={!!errors.lastname}
            style={{
              backgroundColor: theme.colors.current.surface,
              color: theme.colors.current.text,
              border: `1px solid ${errors.lastname ? theme.colors.secondary : theme.colors.current.border}`
            }}
          />
        </Container.Flex>

        {(errors.firstname || errors.lastname) && (
          <Typography.Typography color={theme.colors.secondary} size="0.9rem">
            {errors.firstname || errors.lastname}
          </Typography.Typography>
        )}

        <TextField.TextField
          label="Localisation *"
          labelColor={theme.colors.current.text}
          value={formData.location}
          onChange={(e) => onInputChange('location', e.target.value)}
          placeholder="Ville, Région, Pays (ex: Paris, France)"
          fullWidth
          rounded
          error={!!errors.location}
          style={{
            backgroundColor: theme.colors.current.surface,
            color: theme.colors.current.text,
            border: `1px solid ${errors.location ? theme.colors.secondary : theme.colors.current.border}`
          }}
        />
        {errors.location && (
          <Typography.Typography color={theme.colors.secondary} size="0.9rem">
            {errors.location}
          </Typography.Typography>
        )}
      </Container.Flex>
    </Container.Base>
  );
};

export default PersonalInfoSection;
import React from "react";
import { Container, Typography, TextField} from "../../atoms";

const LoginInfoSection = ({
  theme,
  formData,
  errors,
  onInputChange,
  confirmPassword,
  onConfirmPasswordChange
}) => {
  return (
    <>
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
          🔐 Informations de connexion
        </Typography.Typography>

        <Container.Flex direction="column" gap="1rem">
          <TextField.TextField
            label="Nom d'utilisateur *"
            labelColor={theme.colors.current.text}
            value={formData.username}
            onChange={(e) => onInputChange('username', e.target.value)}
            placeholder="Choisissez un nom d'utilisateur unique (min. 3 caractères)"
            fullWidth
            rounded
            error={!!errors.username}
            style={{
              backgroundColor: theme.colors.current.surface,
              color: theme.colors.current.text,
              border: `1px solid ${errors.username ? theme.colors.secondary : theme.colors.current.border}`
            }}
          />
          {errors.username && (
            <Typography.Typography color={theme.colors.secondary} size="0.9rem">
              {errors.username}
            </Typography.Typography>
          )}

          <TextField.TextField
            label="Mot de passe *"
            labelColor={theme.colors.current.text}
            type="password"
            value={formData.password}
            onChange={(e) => onInputChange('password', e.target.value)}
            placeholder="Minimum 6 caractères"
            fullWidth
            rounded
            error={!!errors.password}
            style={{
              backgroundColor: theme.colors.current.surface,
              color: theme.colors.current.text,
              border: `1px solid ${errors.password ? theme.colors.secondary : theme.colors.current.border}`
            }}
          />

          <TextField.TextField
            label="Confirmer le mot de passe *"
            labelColor={theme.colors.current.text}
            type="password"
            value={confirmPassword}
            onChange={(e) => onConfirmPasswordChange(e.target.value)}
            placeholder="Répétez le mot de passe"
            fullWidth
            rounded
            error={!!errors.confirmPassword}
            style={{
              backgroundColor: theme.colors.current.surface,
              color: theme.colors.current.text,
              border: `1px solid ${errors.confirmPassword ? theme.colors.secondary : theme.colors.current.border}`
            }}
          />

          {(errors.password || errors.confirmPassword) && (
            <Typography.Typography color={theme.colors.secondary} size="0.9rem">
              {errors.password || errors.confirmPassword}
            </Typography.Typography>
          )}
        </Container.Flex>
      </Container.Base>
    </>
  );
};

export default LoginInfoSection;
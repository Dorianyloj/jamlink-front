import React from "react";
import { Container, Typography, Form } from "../../atoms";

import { RegisterMolecules } from "../../molecules";

const RegisterForm = ({
  theme,
  formData,
  confirmPassword,
  errors,
  isLoading,
  onInputChange,
  onConfirmPasswordChange,
  onSubmit,
  onNavigate
}) => {
  return (
    <Container.FadeIn>
      <Container.Base
        padding="2rem"
        bgColor={theme.colors.current.surface}
        rounded
        elevated
        style={{
          border: `1px solid ${theme.colors.current.border}`,
          boxShadow: `0 4px 12px ${theme.colors.current.shadow}`,
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        <Typography.Typography
          variant="h2"
          align="center"
          margin="0 0 1rem 0"
          color={theme.colors.current.text}
        >
          🎵 Rejoindre JamLink
        </Typography.Typography>

        <Typography.Typography
          align="center"
          margin="0 0 2rem 0"
          color={theme.colors.current.textSecondary}
        >
          Créez votre compte et connectez-vous avec des musiciens passionnés
        </Typography.Typography>

        <Form.Base onSubmit={onSubmit}>
          <Container.Flex direction="column" gap="1.5rem">

            <RegisterMolecules.FormErrors errors={errors} theme={theme} />

            <RegisterMolecules.LoginInfoSection
              theme={theme}
              formData={formData}
              errors={errors}
              onInputChange={onInputChange}
              confirmPassword={confirmPassword}
              onConfirmPasswordChange={onConfirmPasswordChange}
            />

            <RegisterMolecules.PersonalInfoSection
              theme={theme}
              formData={formData}
              errors={errors}
              onInputChange={onInputChange}
            />

            <RegisterMolecules.MusicProfileSection
              theme={theme}
              formData={formData}
              errors={errors}
              onInputChange={onInputChange}
            />

            <RegisterMolecules.FormActions
              theme={theme}
              isLoading={isLoading}
              onNavigate={onNavigate}
            />

          </Container.Flex>
        </Form.Base>

        <Container.Base
          margin="2rem 0 0 0"
          bgColor={theme.isNightMode ? `${theme.colors.warning}20` : `${theme.colors.warning}10`}
          padding="1rem"
          rounded
          style={{
            border: `1px solid ${theme.colors.warning}`,
            boxShadow: `0 2px 8px ${theme.colors.current.shadow}`
          }}
        >
          <Typography.Typography
            variant="h4"
            margin="0 0 0.5rem 0"
            color={theme.colors.warning}
          >
            💡 Informations importantes :
          </Typography.Typography>
          <Typography.Typography color={theme.colors.current.text} size="0.9rem">
            • Tous les champs marqués d'un * sont obligatoires<br />
            • Votre nom d'utilisateur doit être unique<br />
            • Le mot de passe doit contenir au moins 6 caractères<br />
            • Vous pourrez compléter votre profil musical après inscription
          </Typography.Typography>
        </Container.Base>
      </Container.Base>
    </Container.FadeIn>
  );
};

export default RegisterForm;
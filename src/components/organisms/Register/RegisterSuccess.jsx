import React from "react";
import { Container, Typography, Button } from "../../atoms";

const RegisterSuccess = ({ theme, onNavigate }) => {
  return (
    <Container.FadeIn>
      <Container.Base
        padding="2rem"
        bgColor={theme.colors.current.surface}
        rounded
        elevated
        style={{
          border: `1px solid ${theme.colors.success}`,
          boxShadow: `0 4px 12px ${theme.colors.current.shadow}`,
          backgroundColor: theme.isNightMode
            ? `${theme.colors.success}20`
            : `${theme.colors.success}10`,
          maxWidth: '500px',
          margin: '0 auto',
          textAlign: 'center'
        }}
      >
        <Typography.Typography
          variant="h2"
          align="center"
          margin="0 0 1.5rem 0"
          color={theme.colors.success}
        >
          ✅ Inscription réussie !
        </Typography.Typography>

        <Typography.Typography
          align="center"
          margin="0 0 2rem 0"
          color={theme.colors.current.text}
        >
          Bienvenue dans la communauté JamLink ! Vous pouvez maintenant vous connecter avec vos identifiants.
        </Typography.Typography>

        <Container.Flex direction="row" gap="1rem" justify="center">
          <Button.Default
            onClick={() => onNavigate('login')}
            style={{
              backgroundColor: theme.colors.primary,
              color: '#ffff',
              border: 'none',
              padding: '0.8rem 2rem'
            }}
          >
            🚀 Se connecter
          </Button.Default>

          <Button.Default
            onClick={() => onNavigate('home')}
            variant="tertiary"
            style={{
              backgroundColor: 'transparent',
              color: theme.colors.current.text,
              border: `1px solid ${theme.colors.current.border}`,
              padding: '0.8rem 2rem'
            }}
          >
            🏠 Retour à l'accueil
          </Button.Default>
        </Container.Flex>
      </Container.Base>
    </Container.FadeIn>
  );
};

export default RegisterSuccess;
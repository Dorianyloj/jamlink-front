import React from "react";
import { Container, Typography, Button } from "../../atoms";

const AuthError = ({ authError, theme, onClearError }) => {
  if (!authError) return null;

  return (
    <Container.Base
      bgColor={theme.isNightMode ? `${theme.colors.secondary}20` : `${theme.colors.secondary}10`}
      padding="1rem"
      rounded
      containerWidth="300px"
      style={{
        border: `1px solid ${theme.colors.secondary}`,
        boxShadow: `0 2px 8px ${theme.colors.current.shadow}`
      }}
    >
      <Typography.Typography
        color={theme.colors.secondary}
        align="center"
        bold
      >
        ⚠️ {authError}
      </Typography.Typography>
      <Container.Flex justify="center" margin="0.5rem 0 0 0">
        <Button.Default
          onClick={onClearError}
          variant="tertiary"
          small
          style={{
            backgroundColor: 'transparent',
            color: theme.colors.secondary,
            border: `1px solid ${theme.colors.secondary}`
          }}
        >
          ✕ Fermer
        </Button.Default>
      </Container.Flex>
    </Container.Base>
  );
};

export default AuthError;
import React from "react";
import { Container, Typography, TextField, Button, Form } from "../../atoms";

import { LoginMolecules } from "../../molecules";

const LoginForm = ({
  theme,
  username,
  password,
  setUsername,
  setPassword,
  authError,
  onClearError,
  onLogin,
  loading
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
          maxWidth: '500px',
          margin: '0 auto'
        }}
      >
        <Typography.Typography
          variant="h2"
          align="center"
          margin="0 0 1.5rem 0"
          color={theme.colors.current.text}
        >
          🔐 Connexion
        </Typography.Typography>

        <Typography.Typography
          align="center"
          margin="0 0 1.5rem 0"
          color={theme.colors.current.textSecondary}
        >
          Connectez-vous pour accéder aux groupes de musique
        </Typography.Typography>

        <Form.Base onSubmit={onLogin}>
          <Container.Flex direction="column" gap="1rem" align="center">
            <TextField.TextField
              label="Nom d'utilisateur"
              labelColor={theme.colors.current.text}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Entrez votre nom d'utilisateur"
              fullWidth
              rounded
              error={!!authError}
              containerWidth="300px"
              style={{
                backgroundColor: theme.colors.current.surface,
                color: theme.colors.current.text,
                border: `1px solid ${theme.colors.current.border}`
              }}
            />

            <TextField.TextField
              label="Mot de passe"
              labelColor={theme.colors.current.text}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Entrez votre mot de passe"
              fullWidth
              rounded
              error={!!authError}
              containerWidth="300px"
              style={{
                backgroundColor: theme.colors.current.surface,
                color: theme.colors.current.text,
                border: `1px solid ${theme.colors.current.border}`
              }}
            />

            <LoginMolecules.AuthError
              authError={authError}
              theme={theme}
              onClearError={onClearError}
            />

            <Button.Default
              type="submit"
              disabled={loading || !username.trim() || !password.trim()}
              margin="1rem 0 0 0"
              style={{
                backgroundColor: loading
                  ? theme.colors.current.textSecondary
                  : theme.colors.primary,
                color: '#ffff',
                border: 'none',
                padding: '0.8rem 2rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1
              }}
            >
              {loading ? "🔄 Connexion en cours..." : "🚀 Se connecter"}
            </Button.Default>
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
            💡 Identifiants de test :
          </Typography.Typography>
          <Typography.Typography color={theme.colors.current.text}>
            <strong>Nom d'utilisateur :</strong> admin<br />
            <strong>Mot de passe :</strong> password
          </Typography.Typography>
        </Container.Base>
      </Container.Base>
    </Container.FadeIn>
  );
};

export default LoginForm;
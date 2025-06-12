import React from "react";
import { Container, Button } from "../../atoms";

const FormActions = ({ theme, isLoading, onNavigate }) => {
  return (
    <Container.Flex direction="row" gap="1rem" justify="center">
      <Button.Default
        type="submit"
        disabled={isLoading}
        style={{
          backgroundColor: isLoading
            ? theme.colors.current.textSecondary
            : theme.colors.primary,
          color: '#ffff',
          border: 'none',
          padding: '0.8rem 2rem',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          opacity: isLoading ? 0.7 : 1
        }}
      >
        {isLoading ? "🔄 Inscription en cours..." : "🚀 Créer mon compte"}
      </Button.Default>

      <Button.Default
        type="button"
        onClick={() => onNavigate('login')}
        variant="tertiary"
        style={{
          backgroundColor: 'transparent',
          color: theme.colors.current.text,
          border: `1px solid ${theme.colors.current.border}`,
          padding: '0.8rem 2rem'
        }}
      >
        🔐 Déjà un compte ?
      </Button.Default>
    </Container.Flex>
  );
};

export default FormActions;
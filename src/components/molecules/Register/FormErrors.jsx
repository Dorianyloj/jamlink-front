import React from "react";
import { Container, Typography } from "../../atoms";

const FormErrors = ({ errors, theme }) => {
  if (!errors.general) return null;

  return (
    <Container.Base
      bgColor={theme.isNightMode ? `${theme.colors.secondary}20` : `${theme.colors.secondary}10`}
      padding="1rem"
      rounded
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
        ⚠️ {errors.general}
      </Typography.Typography>
    </Container.Base>
  );
};

export default FormErrors;
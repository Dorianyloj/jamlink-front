import React from "react";
import { Container, Typography } from "../../atoms";

const UserLeadingGroups = ({ theme, leadingGroups }) => {
  if (!leadingGroups || leadingGroups.length === 0) return null;

  return (
    <Container.UserProfile bgColor={theme.colors.current.surfaceElevated} border={`1px solid ${theme.colors.current.border}`}>
      <Typography.Typography
        variant="h4"
        margin="0 0 1rem 0"
        color={theme.colors.warning}
      >
        👑 Groupes que je dirige
      </Typography.Typography>

      <Container.Flex direction="column" gap="0.5rem">
        {leadingGroups.map((group) => (
          <Container.Base
            key={group.id}
            padding="0.75rem"
            bgColor={theme.colors.current.surface}
            rounded
            style={{
              border: `1px solid ${theme.colors.warning}`
            }}
          >
            <Typography.Typography
              color={theme.colors.current.text}
              style={{ fontWeight: 'bold' }}
            >
              👑 {group.name}
            </Typography.Typography>
          </Container.Base>
        ))}
      </Container.Flex>
    </Container.UserProfile>
  );
};

export default UserLeadingGroups;
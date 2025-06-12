import React from "react";
import { Container, Typography } from "../../atoms";

const UserMusicGroups = ({ theme, musicGroups }) => {
  if (!musicGroups || musicGroups.length === 0) return null;

  return (
    <Container.UserProfile bgColor={theme.colors.current.surfaceElevated} border={`1px solid ${theme.colors.current.border}`}>
      <Typography.Typography
        variant="h4"
        margin="0 0 1rem 0"
        color={theme.colors.current.text}
      >
        🎵 Mes Groupes ({musicGroups.length})
      </Typography.Typography>

      <Container.Flex direction="column" gap="0.5rem">
        {musicGroups.map((group) => (
          <Container.Base
            key={group.id}
            padding="0.75rem"
            bgColor={theme.colors.current.surface}
            rounded
            style={{
              border: `1px solid ${theme.colors.current.border}`
            }}
          >
            <Typography.Typography
              color={theme.colors.current.text}
              style={{ fontWeight: 'bold' }}
            >
              🎤 {group.name}
            </Typography.Typography>
          </Container.Base>
        ))}
      </Container.Flex>
    </Container.UserProfile>
  );
};

export default UserMusicGroups;
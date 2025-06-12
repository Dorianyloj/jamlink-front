import React from "react";
import { Container, Typography } from "../../atoms";

const UserInfo = ({ theme, user }) => {
  const formatLevel = (level) => {
    const levels = {
      'BEGINNER': '🌱 Débutant',
      'INTERMEDIATE': '🎯 Intermédiaire',
      'ADVANCED': '🏆 Avancé',
      'EXPERT': '⭐ Expert'
    };
    return levels[level] || level;
  };

  return (
    <Container.UserProfile bgColor={theme.colors.current.surfaceElevated} border={`1px solid ${theme.colors.current.border}`}>
      <Typography.Typography
        variant="h4"
        margin="0 0 1rem 0"
        color={theme.colors.current.text}
      >
        👤 Profil
      </Typography.Typography>

      <Typography.Typography
        margin="0 0 0.5rem 0"
        color={theme.colors.current.text}
      >
        <strong>Nom complet:</strong> {user.firstname} {user.lastname}
      </Typography.Typography>

      <Typography.Typography
        margin="0 0 0.5rem 0"
        color={theme.colors.current.text}
      >
        <strong>Nom d'utilisateur:</strong> {user.username}
      </Typography.Typography>

      <Typography.Typography
        margin="0 0 0.5rem 0"
        color={theme.colors.current.text}
      >
        <strong>📍 Localisation:</strong> {user.location}
      </Typography.Typography>

      <Typography.Typography
        margin="0 0 0.5rem 0"
        color={theme.colors.current.text}
      >
        <strong>🎵 Expérience:</strong> {user.experience} ans
      </Typography.Typography>

      <Typography.Typography
        margin="0 0 0.5rem 0"
        color={theme.colors.current.text}
      >
        <strong>📊 Niveau:</strong> {formatLevel(user.level)}
      </Typography.Typography>

      <Typography.Typography
        margin="0 0 0.5rem 0"
        color={theme.colors.current.textSecondary}
      >
        <strong>🔑 Rôles:</strong> {user.roles.join(', ')}
      </Typography.Typography>
    </Container.UserProfile>
  );
};

export default UserInfo;
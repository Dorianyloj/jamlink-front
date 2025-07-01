import React from 'react';
import { Container, Typography, Badge, Section } from '../../atoms';

const MusicGroupInfo = ({ description, location, level, currentMembers, maxMembers, theme }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'BEGINNER':
        return theme.colors.success || '#4caf50';
      case 'INTERMEDIATE':
        return theme.colors.warning || '#ff9800';
      case 'EXPERT':
        return theme.colors.error || '#f44336';
      default:
        return theme.colors.current.textSecondary;
    }
  };

  return (
    <Container.Flex direction="column" gap="1rem">
      {/* Description */}
      <Section.Section 
        bgColor={theme.colors.current.surfaceElevated}
        padding="1rem" 
        rounded
        style={{
          border: `1px solid ${theme.colors.current.border}`
        }}
      >
        <Typography.Typography size="0.95rem" color={theme.colors.current.text}>
          📝 {description}
        </Typography.Typography>
      </Section.Section>

      {/* Infos principales */}
      <Container.Flex direction="column" gap="0.5rem">
        <Container.Flex direction="row" justify="space-between" align="center">
          <Typography.Typography size="0.9rem" color={theme.colors.current.textSecondary}>
            📍 {location}
          </Typography.Typography>
          <Badge.Badge 
            variant="success" 
            size="small"
            style={{
              backgroundColor: `${getLevelColor(level)}20`,
              color: getLevelColor(level),
              border: `1px solid ${getLevelColor(level)}`
            }}
          >
            {level}
          </Badge.Badge>
        </Container.Flex>
        
        <Typography.Typography size="0.9rem" color={theme.colors.current.textSecondary}>
          👥 {currentMembers}/{maxMembers} membres
        </Typography.Typography>
      </Container.Flex>
    </Container.Flex>
  );
};

export default MusicGroupInfo;
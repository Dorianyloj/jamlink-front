import React from 'react';
import { Container, Typography, Badge, Section } from '../../atoms';

const MembersList = ({ members, maxDisplay = 3, theme }) => {
  const displayedMembers = members.slice(0, maxDisplay);
  const remainingCount = members.length - maxDisplay;

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
    <Container.Base>
      <Typography.Typography 
        variant="h4" 
        margin="0 0 0.8rem 0" 
        color={theme.colors.current.text}
      >
        👨‍🎤 Membres
      </Typography.Typography>
      <Container.Flex direction="column" gap="0.5rem">
        {displayedMembers.map((user) => (
          <Section.Section 
            key={user.id} 
            bgColor={theme.colors.current.surfaceElevated}
            padding="0.8rem" 
            rounded
            style={{
              border: `1px solid ${theme.colors.current.border}`
            }}
          >
            <Container.Flex direction="row" justify="space-between" align="center">
              <Typography.Typography 
                size="0.9rem" 
                bold 
                color={theme.colors.current.text}
              >
                {user.firstname} {user.lastname}
              </Typography.Typography>
              <Badge.Badge 
                variant="purple" 
                size="small"
                style={{
                  backgroundColor: `${getLevelColor(user.level)}20`,
                  color: getLevelColor(user.level),
                  border: `1px solid ${getLevelColor(user.level)}`
                }}
              >
                {user.level}
              </Badge.Badge>
            </Container.Flex>
            
            <Typography.Typography 
              margin="0.3rem 0 0 0" 
              size="0.8rem" 
              color={theme.colors.current.textSecondary}
            >
              🎹 {user.instruments.map(i => i.name).join(", ")}
            </Typography.Typography>
          </Section.Section>
        ))}
        
        {remainingCount > 0 && (
          <Section.Section 
            bgColor={theme.colors.current.surface}
            padding="0.5rem" 
            rounded
            style={{
              border: `1px solid ${theme.colors.current.border}`
            }}
          >
            <Typography.Typography 
              align="center" 
              size="0.8rem" 
              color={theme.colors.current.textSecondary}
            >
              ... et {remainingCount} autre{remainingCount > 1 ? 's' : ''} membre{remainingCount > 1 ? 's' : ''}
            </Typography.Typography>
          </Section.Section>
        )}
      </Container.Flex>
    </Container.Base>
  );
};

export default MembersList;
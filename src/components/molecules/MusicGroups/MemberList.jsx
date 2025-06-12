import React from 'react';
import { Container, Typography, Badge, Section } from '../../atoms';

const MembersList = ({ members, maxDisplay = 3 }) => {
  const displayedMembers = members.slice(0, maxDisplay);
  const remainingCount = members.length - maxDisplay;

  return (
    <div>
      <Typography.Typography variant="h4" margin="0 0 0.8rem 0" color="#2c3e50">
        👨‍🎤 Membres
      </Typography.Typography>
      <Container.Flex direction="column" gap="0.5rem">
        {displayedMembers.map((user) => (
          <Section.Section 
            key={user.id} 
            bgColor="#f1f2f6" 
            padding="0.8rem" 
            rounded
          >
            <Container.Flex direction="row" justify="space-between" align="center">
              <Typography.Typography size="0.9rem" bold color="#2c3e50">
                {user.firstname} {user.lastname}
              </Typography.Typography>
              <Badge.Badge variant="purple" size="small">
                {user.level}
              </Badge.Badge>
            </Container.Flex>
            
            <Typography.Typography margin="0.3rem 0 0 0" size="0.8rem" color="#7f8c8d">
              🎹 {user.instruments.map(i => i.name).join(", ")}
            </Typography.Typography>
          </Section.Section>
        ))}
        
        {remainingCount > 0 && (
          <Section.Section bgColor="#ecf0f1" padding="0.5rem" rounded>
            <Typography.Typography align="center" size="0.8rem" color="#7f8c8d">
              ... et {remainingCount} autre{remainingCount > 1 ? 's' : ''} membre{remainingCount > 1 ? 's' : ''}
            </Typography.Typography>
          </Section.Section>
        )}
      </Container.Flex>
    </div>
  );
};

export default MembersList;
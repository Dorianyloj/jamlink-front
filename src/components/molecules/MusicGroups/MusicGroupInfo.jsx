import React from 'react';
import { Container, Typography, Badge, Section } from '../../atoms';

const MusicGroupInfo = ({ description, location, level, currentMembers, maxMembers }) => {
  return (
    <Container.Flex direction="column" gap="1rem">
      {/* Description */}
      <Section.Section bgColor="#f8f9fa" padding="1rem" rounded>
        <Typography.Typography size="0.95rem" color="#2c3e50">
          📝 {description}
        </Typography.Typography>
      </Section.Section>

      {/* Infos principales */}
      <Container.Flex direction="column" gap="0.5rem">
        <Container.Flex direction="row" justify="space-between" align="center">
          <Typography.Typography size="0.9rem" color="#7f8c8d">
            📍 {location}
          </Typography.Typography>
          <Badge.Badge variant="success" size="small">
            {level}
          </Badge.Badge>
        </Container.Flex>
        
        <Typography.Typography size="0.9rem" color="#7f8c8d">
          👥 {currentMembers}/{maxMembers} membres
        </Typography.Typography>
      </Container.Flex>
    </Container.Flex>
  );
};

export default MusicGroupInfo;
import React from 'react';
import { Container, Typography, Badge } from '../../atoms';

const MusicStylesList = ({ styles, theme }) => {
  return (
    <Container.Base>
      <Typography.Typography 
        variant="h4" 
        margin="0 0 0.8rem 0" 
        color={theme.colors.current.text}
      >
        🎵 Styles musicaux
      </Typography.Typography>
      <Container.Flex direction="row" gap="0.5rem" wrap="wrap">
        {styles.map((style, index) => (
          <Badge.Badge 
            key={index} 
            variant="primary"
            style={{
              backgroundColor: theme.colors.primary ? `${theme.colors.primary}20` : '#e3f2fd',
              color: theme.colors.primary || '#2196f3',
              border: `1px solid ${theme.colors.primary || '#2196f3'}`
            }}
          >
            {style.name}
          </Badge.Badge>
        ))}
      </Container.Flex>
    </Container.Base>
  );
};

export default MusicStylesList;
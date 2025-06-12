import React from 'react';
import { Container, Typography, Badge } from '../../atoms';

const MusicStylesList = ({ styles }) => {
  return (
    <div>
      <Typography.Typography variant="h4" margin="0 0 0.8rem 0" color="#2c3e50">
        🎵 Styles musicaux
      </Typography.Typography>
      <Container.Flex direction="row" gap="0.5rem" wrap="wrap">
        {styles.map((style, index) => (
          <Badge.Badge key={index} variant="danger">
            {style.name}
          </Badge.Badge>
        ))}
      </Container.Flex>
    </div>
  );
};

export default MusicStylesList;
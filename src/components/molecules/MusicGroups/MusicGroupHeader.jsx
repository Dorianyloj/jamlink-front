import React from 'react';
import { Header, Typography } from '../../atoms';

const MusicGroupHeader = ({ groupName, leaderName }) => {
  return (
    <Header.Header bgColor="#3498db" padding="1.5rem">
      <Typography.Typography variant="h2" color="#ffffff" margin="0 0 0.5rem 0">
        🎸 {groupName}
      </Typography.Typography>
      <Typography.Typography color="#ecf0f1" size="0.9rem">
        👑 {leaderName}
      </Typography.Typography>
    </Header.Header>
  );
};

export default MusicGroupHeader;
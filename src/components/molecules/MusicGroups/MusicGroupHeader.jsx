import React from 'react';
import { Header, Typography } from '../../atoms';

const MusicGroupHeader = ({ groupName, leaderName, theme }) => {
  return (
    <Header.Header 
      bgColor={theme.colors.primary || "#3498db"} 
      padding="1.5rem"
      style={{
        border: `1px solid ${theme.colors.current.border}`,
        borderRadius: '8px 8px 0 0'
      }}
    >
      <Typography.Typography 
        variant="h2" 
        color={theme.colors.onPrimary || "#ffffff"} 
        margin="0 0 0.5rem 0"
      >
        🎸 {groupName}
      </Typography.Typography>
      <Typography.Typography 
        color={theme.colors.onPrimary ? `${theme.colors.onPrimary}CC` : "#ecf0f1"} 
        size="0.9rem"
      >
        👑 {leaderName}
      </Typography.Typography>
    </Header.Header>
  );
};

export default MusicGroupHeader;
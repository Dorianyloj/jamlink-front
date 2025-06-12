import React from "react";
import { Container, Typography } from "../../atoms";
import AddInstrumentSection from "./AddInstrumentSection";

const UserInstruments = ({ theme, instruments, user }) => {
  const formatInstrumentCategory = (category) => {
    const categories = {
      'KEYS': '🎹',
      'STRINGS': '🎸',
      'PERCUSSION': '🥁',
      'WIND': '🎺',
      'ELECTRONIC': '🎛️',
      'VOCAL': '🎤'
    };
    return categories[category] || '🎵';
  };

  if (!instruments || instruments.length === 0) return null;

  return (
    <Container.UserProfile bgColor={theme.colors.current.surfaceElevated} border={`1px solid ${theme.colors.current.border}`}>
      <Typography.Typography
        variant="h4"
        margin="0 0 1rem 0"
        color={theme.colors.current.text}
      >
        🎸 Mes Instruments
      </Typography.Typography>

      <Container.Flex direction="row" gap="0.5rem" wrap="wrap">
        {instruments.map((instrument, index) => (
          <Container.Base
            key={index}
            padding="0.5rem 1rem"
            bgColor={theme.colors.primary}
            rounded
            style={{
              display: 'inline-block',
              margin: '0.25rem'
            }}
          >
            <Typography.Typography
              color="#fff"
              style={{ fontSize: '0.9rem' }}
            >
              {formatInstrumentCategory(instrument.category)} {instrument.name}
            </Typography.Typography>
          </Container.Base>
        ))}
      </Container.Flex>

      <Container.Base
        margin="1rem 0 0 0"
        padding="0"
        rounded={false}
        style={{ textAlign: 'left' }}
      >
        <AddInstrumentSection theme={theme} userId={user.id}/>
      </Container.Base>
    </Container.UserProfile>
  );
};

export default UserInstruments; 
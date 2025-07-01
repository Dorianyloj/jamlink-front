import React from 'react';
import { Container } from '../atoms';
import MusicGroupCard from './MusicGroupCard';

const MusicGroupsList = ({ groups, theme }) => {
  return (
    <Container.Flex direction="row" wrap="wrap" gap="2rem" justify="flex-start">
      {groups.map((group) => (
        <MusicGroupCard key={group.id} group={group} theme={theme} />
      ))}
    </Container.Flex>
  );
};

export default MusicGroupsList;
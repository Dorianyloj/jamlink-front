import React from 'react';
import { Container } from '../atoms';
import MusicGroupCard from './MusicGroupCard';

const MusicGroupsList = ({ groups }) => {
  return (
    <Container.Flex direction="row" wrap="wrap" gap="2rem" justify="flex-start">
      {groups.map((group) => (
        <MusicGroupCard key={group.id} group={group} />
      ))}
    </Container.Flex>
  );
};

export default MusicGroupsList;
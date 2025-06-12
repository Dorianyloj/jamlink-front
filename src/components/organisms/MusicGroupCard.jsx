import React from 'react';
import { Container, Card } from '../atoms';
import { MusicGroups } from '../molecules';

const MusicGroupCard = ({ group }) => {
  const leaderName = `${group.userLeader.firstname} ${group.userLeader.lastname}`;

  return (
    <Container.FadeIn>
      <Card.Card hover>
        {/* Header */}
        <MusicGroups.MusicGroupHeader 
          groupName={group.name}
          leaderName={leaderName}
        />

        {/* Contenu */}
        <Container.Base padding="1.5rem" bgColor="transparent">
          <Container.Flex direction="column" gap="1rem">
            
            {/* Informations générales */}
            <MusicGroups.MusicGroupInfo
              description={group.description}
              location={group.location}
              level={group.level}
              currentMembers={group.users.length}
              maxMembers={group.maxMembers}
            />

            {/* Styles musicaux */}
            <MusicGroups.MusicStylesList styles={group.musicStyles} />

            {/* Membres */}
            <MusicGroups.MembersList members={group.users} maxDisplay={1} />

          </Container.Flex>
        </Container.Base>
      </Card.Card>
    </Container.FadeIn>
  );
};

export default MusicGroupCard;
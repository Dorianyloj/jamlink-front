import React from 'react';
import { Container, Card } from '../atoms';
import { MusicGroups } from '../molecules';

const MusicGroupCard = ({ group, theme }) => {
  const leaderName = `${group.userLeader.firstname} ${group.userLeader.lastname}`;

  return (
    <Container.FadeIn>
      <Card.Card 
        hover
        style={{
          backgroundColor: theme.colors.current.surfaceElevated,
          border: `1px solid ${theme.colors.current.border}`,
          boxShadow: `0 2px 8px ${theme.colors.current.shadow}`
        }}
      >
        {/* Header */}
        <MusicGroups.MusicGroupHeader 
          groupName={group.name}
          leaderName={leaderName}
          theme={theme}
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
              theme={theme}
            />

            {/* Styles musicaux */}
            <MusicGroups.MusicStylesList 
              styles={group.musicStyles} 
              theme={theme}
            />

            {/* Membres */}
            <MusicGroups.MembersList 
              members={group.users} 
              maxDisplay={1} 
              theme={theme}
            />

          </Container.Flex>
        </Container.Base>
      </Card.Card>
    </Container.FadeIn>
  );
};

export default MusicGroupCard;
import React from "react";
import { Container, Typography, Button } from "../../atoms";

import { UserMolecules } from "../../molecules";

const UserProfile = ({ theme, user, userStatus, onLogout }) => {
  return (
    <Container.FadeIn>
      <Container.Base
        padding="2rem"
        bgColor={theme.colors.current.surface}
        rounded
        elevated
        style={{
          border: `1px solid ${theme.colors.success}`,
          boxShadow: `0 4px 12px ${theme.colors.current.shadow}`,
          backgroundColor: theme.isNightMode
            ? `${theme.colors.success}20`
            : `${theme.colors.success}10`
        }}
      >
        <Typography.Typography
          variant="h3"
          align="center"
          margin="0 0 1.5rem 0"
          color={theme.colors.success}
        >
          ✅ Connexion réussie
        </Typography.Typography>

        {user ? (
          <>
            <Container.Flex margin={"0 0 1.5rem 0"} wrap="wrap">
              <Container.Flex width="50%">
                <UserMolecules.UserInfo theme={theme} user={user} />
              </Container.Flex>
              <Container.Flex width="50%">
                <UserMolecules.UserInstruments theme={theme} instruments={user.instruments} user={user}/>
              </Container.Flex>
              <Container.Flex width="50%">
                <UserMolecules.UserMusicGroups theme={theme} musicGroups={user.musicGroups} />
              </Container.Flex>
              <Container.Flex width="50%">
                <UserMolecules.UserLeadingGroups theme={theme} leadingGroups={user.leadingGroups} />
              </Container.Flex>
            </Container.Flex>
          </>
        ) : (
          <Container.Flex direction="column" align="center" margin="2rem 0">
            <Typography.Typography
              align="center"
              margin="0 0 1.5rem 0"
              color={theme.colors.current.textSecondary}
              variant="h4"
            >
              🔄 Chargement de votre profil...
            </Typography.Typography>
            <Typography.Typography
              align="center"
              color={theme.colors.current.textSecondary}
              style={{ fontSize: '0.9rem' }}
            >
              Récupération de vos informations personnelles et de vos groupes de musique
            </Typography.Typography>
          </Container.Flex>
        )}

        <Container.Flex justify="center">
          <Button.Default
            onClick={onLogout}
            variant="secondary"
            style={{
              backgroundColor: theme.colors.secondary,
              color: '#ffff',
              border: 'none'
            }}
          >
            🚪 Se déconnecter
          </Button.Default>
        </Container.Flex>
      </Container.Base>
    </Container.FadeIn>
  );
};

export default UserProfile;
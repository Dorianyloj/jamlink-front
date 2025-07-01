import React, { useEffect } from "react";
import { Container, Typography, Button } from "../atoms";
import { MusicGroupList, AccessDenied} from "../organisms";
import { useSelector, useDispatch } from "react-redux";
import { fetchMusicGroups } from "../../store";

const MusicGroups = ({ theme }) => {
  const dispatch = useDispatch();
  
  // Récupération des données du store Redux
  const musicGroups = useSelector((state) => state.musicGroups.groups);
  const status = useSelector((state) => state.musicGroups.status);
  const error = useSelector((state) => state.musicGroups.errors);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  // Chargement initial des groupes de musique seulement si aucune donnée n'existe
  useEffect(() => {
    if (isAuthenticated && status === "idle" && (!musicGroups || musicGroups.length === 0)) {
      dispatch(fetchMusicGroups());
    }
  }, [dispatch, status, isAuthenticated, musicGroups]);
  
  // Déterminer si on est en train de charger
  const loading = status === "pending";
  
  // Si l'utilisateur n'est pas authentifié
  if (!isAuthenticated) {
    return <AccessDenied />;
  }
  
  return (
    <Container.FadeIn>
      <Container.Base 
        padding="2rem" 
        bgColor={theme.colors.current.surface}
        rounded 
        elevated
        style={{
          border: `1px solid ${theme.colors.current.border}`,
          boxShadow: `0 4px 12px ${theme.colors.current.shadow}`
        }}
      >
        {/* Header */}
        <Container.Flex direction="row" justify="space-between" align="center" margin="0 0 2rem 0">
          <Typography.Typography variant="h1" color={theme.colors.current.text}>
            🎵 Groupes de Musique
          </Typography.Typography>
          <Button.Default 
            onClick={() => dispatch(fetchMusicGroups())} 
            variant="tertiary" 
            size="small"
            style={{
              backgroundColor: theme.colors.current.surfaceElevated,
              color: theme.colors.current.text,
              border: `1px solid ${theme.colors.current.border}`
            }}
          >
            🔄 Actualiser
          </Button.Default>
        </Container.Flex>
        
        {/* Loading */}
        {loading && (
          <Container.Base 
            bgColor={theme.colors.current.surfaceElevated}
            padding="2rem" 
            rounded 
            margin="0 0 2rem 0"
            style={{
              border: `1px solid ${theme.colors.current.border}`
            }}
          >
            <Typography.Typography align="center" size="1.1rem" color={theme.colors.current.text}>
              🎼 Chargement des groupes de musique...
            </Typography.Typography>
          </Container.Base>
        )}
        
        {/* Error */}
        {!loading && error && (
          <Container.Base 
            bgColor={theme.colors.current.surfaceElevated}
            padding="1.5rem" 
            rounded 
            margin="0 0 2rem 0" 
            elevated
            style={{
              border: `1px solid ${theme.colors.error || '#f44336'}`,
              backgroundColor: theme.colors.error ? `${theme.colors.error}10` : '#ffebee'
            }}
          >
            <Typography.Typography align="center" color={theme.colors.error || '#f44336'} bold>
              ❌ {error}
            </Typography.Typography>
            {error.includes("Session expirée") && (
              <Typography.Typography align="center" margin="0.5rem 0 0 0" color={theme.colors.current.textSecondary}>
                Veuillez vous reconnecter dans la section "Connexion".
              </Typography.Typography>
            )}
          </Container.Base>
        )}
        
        {/* Content */}
        {!loading && !error && musicGroups && musicGroups.length > 0 ? (
          <MusicGroupList groups={musicGroups} theme={theme} />
        ) : (
          !loading && !error && (
            <Container.Base 
              bgColor={theme.colors.current.surfaceElevated}
              padding="3rem" 
              rounded 
              elevated
              style={{
                textAlign: 'center',
                border: `1px solid ${theme.colors.current.border}`
              }}
            >
              <Typography.Typography size="1.2rem" color={theme.colors.current.text}>
                🎵 Aucun groupe de musique disponible pour le moment.
              </Typography.Typography>
              <Typography.Typography 
                margin="0.5rem 0 0 0" 
                color={theme.colors.current.textSecondary}
              >
                Les nouveaux groupes apparaîtront ici.
              </Typography.Typography>
            </Container.Base>
          )
        )}
      </Container.Base>
    </Container.FadeIn>
  );
};

export default MusicGroups;
import React, { useEffect } from "react";
import { Container, Typography, Button } from "../atoms";
import { MusicGroupList, AccessDenied} from "../organisms";
import { useSelector, useDispatch } from "react-redux";
import { fetchMusicGroups } from "../../store";

const MusicGroups = () => {
  const dispatch = useDispatch();
  
  // Récupération des données du store Redux
  const musicGroups = useSelector((state) => state.musicGroups.groups);
  const status = useSelector((state) => state.musicGroups.status);
  const error = useSelector((state) => state.musicGroups.errors);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  // Chargement initial des groupes de musique
  useEffect(() => {
    if (isAuthenticated && status === "idle") {
      dispatch(fetchMusicGroups());
    }
  }, [dispatch, status, isAuthenticated]);
  
  // Déterminer si on est en train de charger
  const loading = status === "pending";
  
  // Si l'utilisateur n'est pas authentifié
  if (!isAuthenticated) {
    return (
      <AccessDenied />  
    );
  }
  
  return (
    <Container.Base padding="2rem" bgColor="#f8f9fa" rounded elevated>
      {/* Header */}
      <Container.Flex direction="row" justify="space-between" align="center" margin="0 0 2rem 0">
        <Typography.Typography variant="h1" color="#2c3e50">
          🎵 Groupes de Musique
        </Typography.Typography>
        <Button.Default onClick={() => dispatch(fetchMusicGroups())} variant="tertiary" small>
          🔄 Actualiser
        </Button.Default>
      </Container.Flex>
      
      {/* Loading */}
      {loading && (
        <Container.Base bgColor="#e3f2fd" padding="2rem" rounded margin="0 0 2rem 0">
          <Typography.Typography align="center" size="1.1rem">
            🎼 Chargement des groupes de musique...
          </Typography.Typography>
        </Container.Base>
      )}
      
      {/* Error */}
      {!loading && error && (
        <Container.Base bgColor="#ffebee" padding="1.5rem" rounded margin="0 0 2rem 0" elevated>
          <Typography.Typography align="center" color="#f44336" bold>
            ❌ {error}
          </Typography.Typography>
          {error.includes("Session expirée") && (
            <Typography.Typography align="center" margin="0.5rem 0 0 0">
              Veuillez vous reconnecter dans la section "Connexion".
            </Typography.Typography>
          )}
        </Container.Base>
      )}
      
      {/* Content */}
      {!loading && !error && musicGroups && musicGroups.length > 0 ? (
        <MusicGroupList groups={musicGroups} />
      ) : (
        !loading && !error && (
          <Container.Base bgColor="#fff3cd" padding="3rem" rounded elevated>
            <Typography.Typography align="center" size="1.2rem">
              🎵 Aucun groupe de musique disponible pour le moment.
            </Typography.Typography>
          </Container.Base>
        )
      )}
    </Container.Base>
  );
};

export default MusicGroups;
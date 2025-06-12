import React, { useEffect } from "react";
import { Container, Typography, Button } from "../atoms";
import { useSelector, useDispatch } from "react-redux";
import { fetchAdvertisements } from "../../store";
import { AccessDenied } from "../organisms";

const Advertisements = ({ theme }) => {
  const dispatch = useDispatch();
  
  // Récupération des données du store Redux
  const advertisements = useSelector((state) => state.advertisements.ads);
  const status = useSelector((state) => state.advertisements.status);
  const error = useSelector((state) => state.advertisements.errors);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  
  // Chargement initial des advertisements
  useEffect(() => {
    if (isAuthenticated && status === "idle") {
      dispatch(fetchAdvertisements());
    }
  }, [dispatch, status, isAuthenticated]);
  
  // Déterminer si on est en train de charger
  const loading = status === "pending";
  
  // Si l'utilisateur n'est pas authentifié
  if (!isAuthenticated) {
    return (
      
        <AccessDenied/>
      
    );
  }
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'ACTIVE':
        return theme.colors.success || '#4caf50';
      case 'CLOSED':
        return theme.colors.error || '#f44336';
      default:
        return theme.colors.current.textSecondary;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'ACTIVE':
        return '✅';
      case 'CLOSED':
        return '❌';
      default:
        return '⏸️';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };
  
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
            📢 Annonces Musicales
          </Typography.Typography>
          <Button.Default 
            onClick={() => {/* dispatch(fetchAdvertisements()) */}} 
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
              🎼 Chargement des annonces...
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
        
        {/* Content - Liste des annonces */}
        {!loading && !error && advertisements && advertisements.length > 0 ? (
          <Container.Base>
            {advertisements.map((ad) => (
              <Container.Base
                key={ad.id}
                margin="0 0 1.5rem 0"
                padding="1.5rem"
                bgColor={theme.colors.current.surfaceElevated}
                rounded
                elevated
                style={{
                  border: `1px solid ${theme.colors.current.border}`,
                  boxShadow: `0 2px 8px ${theme.colors.current.shadow}`
                }}
              >
                {/* Header de l'annonce */}
                <Container.Flex direction="row" justify="space-between" align="flex-start" margin="0 0 1rem 0">
                  <Container.Base style={{ flex: 1 }}>
                    <Typography.Typography variant="h3" margin="0 0 0.5rem 0" color={theme.colors.current.text}>
                      {ad.title}
                    </Typography.Typography>
                    <Typography.Typography 
                      size="0.9rem" 
                      color={theme.colors.current.textSecondary}
                      margin="0 0 0.5rem 0"
                    >
                      Par <strong>{ad.creator.name}</strong>
                    </Typography.Typography>
                  </Container.Base>
                  
                  <Container.Base
                    padding="0.5rem 1rem"
                    rounded
                    style={{
                      backgroundColor: `${getStatusColor(ad.status)}20`,
                      border: `1px solid ${getStatusColor(ad.status)}`,
                      minWidth: 'fit-content'
                    }}
                  >
                    <Typography.Typography 
                      size="0.8rem" 
                      color={getStatusColor(ad.status)}
                      bold
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {getStatusIcon(ad.status)} {ad.status}
                    </Typography.Typography>
                  </Container.Base>
                </Container.Flex>

                {/* Description */}
                <Typography.Typography 
                  margin="0 0 1rem 0" 
                  color={theme.colors.current.text}
                  style={{ lineHeight: '1.5' }}
                >
                  {ad.description}
                </Typography.Typography>

                {/* Instruments recherchés */}
                {ad.instruments && ad.instruments.length > 0 && (
                  <Container.Base margin="0 0 1rem 0">
                    <Typography.Typography 
                      size="0.9rem" 
                      color={theme.colors.current.textSecondary}
                      margin="0 0 0.5rem 0"
                      bold
                    >
                      🎸 Instruments recherchés :
                    </Typography.Typography>
                    <Container.Flex direction="row" gap="0.5rem" wrap>
                      {ad.instruments.map((instrument) => (
                        <Container.Base
                          key={instrument.id}
                          padding="0.3rem 0.8rem"
                          rounded
                          style={{
                            backgroundColor: theme.colors.primary ? `${theme.colors.primary}20` : '#e3f2fd',
                            border: `1px solid ${theme.colors.primary || '#2196f3'}`,
                            display: 'inline-block'
                          }}
                        >
                          <Typography.Typography 
                            size="0.8rem" 
                            color={theme.colors.primary || '#2196f3'}
                          >
                            {instrument.name}
                          </Typography.Typography>
                        </Container.Base>
                      ))}
                    </Container.Flex>
                  </Container.Base>
                )}

                {/* Informations de localisation et dates */}
                <Container.Flex direction="row" justify="space-between" align="center" wrap>
                  <Container.Base>
                    <Typography.Typography 
                      size="0.8rem" 
                      color={theme.colors.current.textSecondary}
                      margin="0 0 0.2rem 0"
                    >
                      📍 <strong>{ad.location}</strong> (rayon: {ad.radius} km)
                    </Typography.Typography>
                    <Typography.Typography 
                      size="0.8rem" 
                      color={theme.colors.current.textSecondary}
                    >
                      📅 Créée le {formatDate(ad.createdAt)}
                    </Typography.Typography>
                  </Container.Base>
                  
                  <Container.Base>
                    <Typography.Typography 
                      size="0.8rem" 
                      color={theme.colors.current.textSecondary}
                    >
                      ⏰ Expire le {formatDate(ad.expiresAt)}
                    </Typography.Typography>
                  </Container.Base>
                </Container.Flex>
              </Container.Base>
            ))}
          </Container.Base>
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
                📢 Aucune annonce disponible pour le moment.
              </Typography.Typography>
              <Typography.Typography 
                margin="0.5rem 0 0 0" 
                color={theme.colors.current.textSecondary}
              >
                Les nouvelles annonces apparaîtront ici.
              </Typography.Typography>
            </Container.Base>
          )
        )}
      </Container.Base>
    </Container.FadeIn>
  );
};

export default Advertisements;
import React from 'react';
import { Container, Typography, Button } from '../atoms';
import InstrumentCarousel from '../threed/InstrumentCarousel';

const Home = ({ onNavigate, theme }) => {
  return (
    <Container.FadeIn>
    <Container.Base padding="0" bgColor="transparent">
    
    {/* Hero Section avec Batterie 3D */}
    <Container.Base 
    bgColor={theme.colors.primary}
    padding="3rem 2rem" 
    rounded 
    margin="0 0 2rem 0"
    style={{
    background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 100%)`,
    textAlign: 'center',
    boxShadow: `0 4px 16px ${theme.colors.current.shadow}`
    }}
    >
    <Typography.Typography variant="h1" color="#ffff" margin="0 0 1rem 0">
    🎵 Bienvenue sur JamLink
    </Typography.Typography>
    <Typography.Typography size="1.2rem" color="#ecf0f1" margin="0 0 2rem 0">
    La plateforme qui connecte les musiciens passionnés
    </Typography.Typography>
    
    {/* Carrousel d'instruments 3D */}  
    <Container.Base   
      margin="2rem 0"  
      style={{  
        backgroundColor: 'rgba(255,255,255,0.1)',  
        borderRadius: '15px',  
        padding: '2rem 1rem',  
        backdropFilter: 'blur(10px)',  
        border: '1px solid rgba(255,255,255,0.2)'  
      }}  
    >  
      <Typography.Typography   
        size="1rem"   
        color="#ecf0f1"   
        margin="0 0 1.5rem 0"  
        style={{ opacity: 0.9 }}  
      >  
        ✨ Découvrez nos instruments en 3D  
      </Typography.Typography>  
        
      <InstrumentCarousel theme={theme} />
    </Container.Base>  

    <Container.Flex direction="row" gap="1rem" justify="center" wrap="wrap">
    <Button.Default
    variant="secondary"
    onClick={() => onNavigate('musicGroups')}
    style={{ 
    backgroundColor: theme.colors.secondary, 
    border: 'none',
    color: '#ffff'
    }}
    >
    🎸 Découvrir les groupes
    </Button.Default>
    <Button.Default
    variant="secondary"
    onClick={() => onNavigate('login')}
    style={{ 
    backgroundColor: theme.colors.success, 
    border: 'none',
    color: '#ffff'
    }}
    >
    🚀 Rejoindre la communauté
    </Button.Default>
    </Container.Flex>
    </Container.Base>

    {/* Features Section */}
    <Container.Flex direction="row" gap="2rem" wrap="wrap" justify="center">
    
    {/* Feature 1 */}
    <Container.Base 
    bgColor={theme.colors.current.surface}
    padding="2rem" 
    rounded 
    elevated
    style={{ 
    minWidth: '300px', 
    maxWidth: '350px', 
    flex: '1 1 300px',
    textAlign: 'center',
    border: `1px solid ${theme.colors.current.border}`,
    boxShadow: `0 4px 12px ${theme.colors.current.shadow}`
    }}
    >
    <Typography.Typography variant="h2" margin="0 0 1rem 0" color={theme.colors.current.text}>
    🤝 Trouve ton groupe
    </Typography.Typography>
    <Typography.Typography color={theme.colors.current.textSecondary} margin="0 0 1.5rem 0">
    Connecte-toi avec des musiciens de ton niveau et de tes styles musicaux préférés
    </Typography.Typography>
    <Button.Default
    variant="tertiary"
    small
    onClick={() => onNavigate('musicGroups')}
    style={{
    backgroundColor: theme.colors.primary,
    color: '#ffff',
    border: 'none'
    }}
    >
    Explorer les groupes
    </Button.Default>
    </Container.Base>

    {/* Feature 3 */}
    <Container.Base 
    bgColor={theme.colors.current.surface}
    padding="2rem" 
    rounded 
    elevated
    style={{ 
    minWidth: '300px', 
    maxWidth: '350px', 
    flex: '1 1 300px',
    textAlign: 'center',
    border: `1px solid ${theme.colors.current.border}`,
    boxShadow: `0 4px 12px ${theme.colors.current.shadow}`
    }}
    >
    <Typography.Typography variant="h2" margin="0 0 1rem 0" color={theme.colors.current.text}>
    🌟 Partage ta passion
    </Typography.Typography>
    <Typography.Typography color={theme.colors.current.textSecondary} margin="0 0 1.5rem 0">
    Rejoins une communauté active de musiciens et partage tes créations
    </Typography.Typography>
    <Button.Default
    variant="tertiary"
    small
    onClick={() => onNavigate('contact')}
    style={{
    backgroundColor: theme.colors.warning,
    color: '#ffff',
    border: 'none'
    }}
    >
    En savoir plus
    </Button.Default>
    </Container.Base>

    </Container.Flex>

    {/* Stats Section avec mention 3D */}
    <Container.Base 
    bgColor={theme.colors.current.surfaceElevated}
    padding="2rem" 
    rounded 
    margin="2rem 0"
    style={{ 
    textAlign: 'center',
    border: `1px solid ${theme.colors.current.border}`,
    boxShadow: `0 2px 8px ${theme.colors.current.shadow}`
    }}
    >
    <Typography.Typography variant="h2" margin="0 0 2rem 0" color={theme.colors.current.text}>
    📊 JamLink en chiffres
    </Typography.Typography>
    <Container.Flex direction="row" gap="2rem" justify="center" wrap="wrap">
    <Container.Base style={{ textAlign: 'center', minWidth: '150px' }}>
    <Typography.Typography variant="h1" color={theme.colors.primary} margin="0 0 0.5rem 0">
    500+
    </Typography.Typography>
    <Typography.Typography color={theme.colors.current.textSecondary}>
    Musiciens actifs
    </Typography.Typography>
    </Container.Base>
    <Container.Base style={{ textAlign: 'center', minWidth: '150px' }}>
    <Typography.Typography variant="h1" color={theme.colors.secondary} margin="0 0 0.5rem 0">
    120+
    </Typography.Typography>
    <Typography.Typography color={theme.colors.current.textSecondary}>
    Groupes formés
    </Typography.Typography>
    </Container.Base>
    <Container.Base style={{ textAlign: 'center', minWidth: '150px' }}>
    <Typography.Typography variant="h1" color={theme.colors.success} margin="0 0 0.5rem 0">
    50+
    </Typography.Typography>
    <Typography.Typography color={theme.colors.current.textSecondary}>
    Styles musicaux
    </Typography.Typography>
    </Container.Base>
    <Container.Base style={{ textAlign: 'center', minWidth: '150px' }}>
    <Typography.Typography variant="h1" color={theme.colors.accent} margin="0 0 0.5rem 0">
    NEW
    </Typography.Typography>
    <Typography.Typography color={theme.colors.current.textSecondary}>
    Expérience 3D
    </Typography.Typography>
    </Container.Base>
    </Container.Flex>
    </Container.Base>

    {/* Call to Action */}
    <Container.Base 
    bgColor={theme.colors.current.surface}
    padding="2rem" 
    rounded 
    elevated
    style={{ 
    textAlign: 'center',
    border: `1px solid ${theme.colors.current.border}`,
    boxShadow: `0 4px 12px ${theme.colors.current.shadow}`
    }}
    >
    <Typography.Typography variant="h2" margin="0 0 1rem 0" color={theme.colors.current.text}>
    🎯 Prêt à faire de la musique ?
    </Typography.Typography>
    <Typography.Typography color={theme.colors.current.textSecondary} margin="0 0 2rem 0" size="1.1rem">
    Rejoins dès maintenant la communauté JamLink et trouve les musiciens parfaits pour tes projets !
    </Typography.Typography>
    <Container.Flex direction="row" gap="1rem" justify="center" wrap="wrap">
    <Button.Default
    variant="primary"
    onClick={() => onNavigate('login')}
    style={{ 
    backgroundColor: theme.colors.accent, 
    border: 'none',
    padding: '0.8rem 2rem',
    color: '#ffff'
    }}
    >
    🎤 S'inscrire gratuitement
    </Button.Default>
    <Button.Default
    variant="tertiary"
    onClick={() => onNavigate('3d')}
    style={{ 
    padding: '0.8rem 2rem',
    backgroundColor: 'transparent',
    color: theme.colors.current.text,
    border: `2px solid ${theme.colors.accent}`
    }}
    >
    🥁 Essayer la 3D
    </Button.Default>
    <Button.Default
    variant="tertiary"
    onClick={() => onNavigate('musicGroups')}
    style={{ 
    padding: '0.8rem 2rem',
    backgroundColor: 'transparent',
    color: theme.colors.current.text,
    border: `2px solid ${theme.colors.primary}`
    }}
    >
    👀 Explorer sans compte
    </Button.Default>
    </Container.Flex>
    </Container.Base>

    </Container.Base>
    </Container.FadeIn>
  );
};

export default Home;
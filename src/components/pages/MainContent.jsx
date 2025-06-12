import React from 'react';
import { Typography } from "../atoms";
import { Clock, Pokedex, MusicGroups, Login, Threed } from "../pages";
import { Container } from "../atoms";
import Home from "../pages/Home";
import DrumKitGLB from '../threed/DrumkitGLB';
import Register from './Register';

const MainContent = ({ section, onNavigate, theme }) => {
    
    switch (section) {
    case "home":
      return <Home onNavigate={onNavigate} theme={theme} />;
    case "clock":
      return <Clock />;
    case "pokedex":
      return <Pokedex />;
    case "register":
      return <Register theme={theme} onNavigate={onNavigate}/>;
    case "3d":
        return (
          <div style={{height: '600px'}}>
            <DrumKitGLB></DrumKitGLB>
          </div>
        )
        
    case "login":
      return <Login theme={theme}/>;
    case "contact":
      return (
        <Container.FadeIn>
          <Container.Base 
            bgColor={theme.colors.current.surface} 
            padding="2rem" 
            rounded 
            elevated
            style={{
              border: `1px solid ${theme.colors.current.border}`,
              boxShadow: `0 4px 12px ${theme.colors.current.shadow}`
            }}
          >
            <Typography.Typography variant="h2" margin="0 0 1rem 0" color={theme.colors.current.text}>
              📧 Contactez-nous
            </Typography.Typography>
            <Typography.Typography color={theme.colors.current.textSecondary} margin="0 0 1rem 0">
              Une question ? Une suggestion ? N'hésitez pas à nous écrire !
            </Typography.Typography>
            <Typography.Typography margin="1rem 0 0 0" bold color={theme.colors.primary}>
              📮 contact@jamlink.com
            </Typography.Typography>
          </Container.Base>
        </Container.FadeIn>
      );
    case "musicGroups":
      return <MusicGroups />;
    default:
      return (
        <Container.FadeIn>
          <Container.Base 
            bgColor={theme.colors.current.surface} 
            padding="2rem" 
            rounded 
            style={{
              textAlign: 'center',
              border: `1px solid ${theme.colors.current.border}`
            }}
          >
            <Typography.Typography color={theme.colors.current.text}>
              Choisissez une section dans le menu
            </Typography.Typography>
          </Container.Base>
        </Container.FadeIn>
      );
    }
};

export default MainContent;
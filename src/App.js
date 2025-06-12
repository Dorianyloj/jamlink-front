import './App.css';
import { Container, Button, Typography } from './components/atoms/';
import { NightModeProvider } from './context/NightModeContext';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { Menu } from './components/organisms';
import { useTheme } from './theme';
import MainContent from './components/pages/MainContent';
import { useSelector } from 'react-redux'; // Ajout pour accéder au store Redux

const nightTheme = {
  background: "#000",
  color: "#fff"
}
const dayTheme = {
  background: "#f0f0f0",
  color: "#000"
}

function App() {
  const [isNightMode, setIsNightMode] = useState(false);
  const [selectedSection, setSelectedSection] = useState("home");
  const theme = useTheme(isNightMode);

  // Récupération de l'état de connexion et des données utilisateur
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const toggleNightMode = () => {
    setIsNightMode(prevMode => !prevMode);
  };

  const handleNavigate = (section) => {
    setSelectedSection(section);
  };

  // Menu dynamique selon l'état de connexion
  const getMenuItems = () => {
    const baseItems = [
      { id: 1, label: "🏠 Accueil", section: "home" },
      { id: 5, label: "🎵 Groupes", section: "musicGroups" },
      { id: 2, label: "3D", section: "3d"},
      { id: 6, label: "📧 Contact", section: "contact" },
    ];
  
    if (isAuthenticated && user) {
      // Si connecté, afficher "Profil" avec le prénom de l'utilisateur
      return [
        ...baseItems,
        { 
          id: 4, 
          label: `👤 Profil (${user.firstname || user.username})`, 
          section: "login" // Même section mais contenu différent
        },
      ];
    } else {
      // Si non connecté, afficher "Connexion" et "Inscription"
      return [
        ...baseItems,
        { id: 4, label: "🔐 Connexion", section: "login" },
        { id: 7, label: "📝 Inscription", section: "register" },
      ];
    }
  };

  return (
    <ThemeProvider theme={isNightMode ? nightTheme : dayTheme}>
      <NightModeProvider value={isNightMode}>
        <Container.Base 
          padding="2rem" 
          style={{
            minHeight: '100vh',
            background: theme.colors.current.backgroundGradient,
            backgroundAttachment: 'local',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}
        >
          
          {/* Header */}
          <Container.Flex direction="row" justify="space-between" align="center" margin="0 0 2rem 0">
            <Typography.Typography 
              variant="h1" 
              margin="0" 
              color={theme.colors.current.text}
            >
              🎵 JamLink
            </Typography.Typography>
            
            {/* Affichage du nom d'utilisateur dans le header si connecté */}
            <Container.Flex direction="row" align="center" gap="1rem">
              {isAuthenticated && user && (
                <Typography.Typography 
                  color={theme.colors.current.text}
                  style={{ 
                    fontSize: '0.9rem',
                    padding: '0.5rem 1rem',
                    backgroundColor: theme.colors.current.surfaceElevated,
                    borderRadius: '20px',
                    border: `1px solid ${theme.colors.success}`
                  }}
                >
                  ✅ Connecté en tant que <strong>{user.firstname} {user.lastname}</strong>
                </Typography.Typography>
              )}
              
              <Button.Default
                variant="tertiary"
                size="medium"
                onClick={toggleNightMode}
                style={{
                  backgroundColor: theme.colors.current.surfaceElevated,
                  color: theme.colors.current.text,
                  border: `1px solid ${theme.colors.current.border}`
                }}
              >
                {isNightMode ? "☀️ Mode jour" : "🌙 Mode nuit"}
              </Button.Default>
            </Container.Flex>
          </Container.Flex>
          
          {/* Menu */}
          <Menu
            onSelect={handleNavigate}
            items={getMenuItems()} // Utilisation du menu dynamique
            theme={theme}
          />

          {/* Main Content */}
          <MainContent 
            section={selectedSection} 
            onNavigate={handleNavigate}
            theme={theme}
          />

        </Container.Base>
      </NightModeProvider>
    </ThemeProvider>
  );
}

export default App;
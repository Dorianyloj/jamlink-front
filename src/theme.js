// Palette de couleurs principale
export const colors = {
    // Couleurs principales
    primary: '#3498db',
    secondary: '#e74c3c',
    accent: '#9b59b6',
    success: '#27ae60',
    warning: '#f39c12',
    
    // Mode jour
    light: {
      background: '#f5f7fa',
      backgroundGradient: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      surface: '#ffffff',
      surfaceElevated: '#ffffff',
      text: '#2c3e50',
      textSecondary: '#7f8c8d',
      border: '#e0e0e0',
      shadow: 'rgba(0, 0, 0, 0.1)'
    },
    
    // Mode nuit
    dark: {
      background: '#0c0c0c',
      backgroundGradient: 'linear-gradient(135deg, #0c0c0c 0%, #424949 100%)',
      surface: '#2c2c54',
      surfaceElevated: '#40407a',
      text: '#ffffff',
      textSecondary: '#ddd',
      border: '#40407a',
      shadow: 'rgba(0, 0, 0, 0.3)'
    }
  };
  
  // Hook pour utiliser le thème
  export const useTheme = (isNightMode) => {
    return {
      colors: {
        ...colors,
        current: isNightMode ? colors.dark : colors.light
      },
      isNightMode
    };
  };
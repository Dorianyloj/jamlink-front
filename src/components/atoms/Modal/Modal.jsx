import React, { useEffect } from "react";
import { Container, Button } from "../index";

const Modal = ({ 
  isOpen, 
  onClose, 
  children, 
  title, 
  theme,
  maxWidth = "600px",
  showCloseButton = true 
}) => {
  
  // Fermer le modal avec la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose?.();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Empêcher le scroll du body
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  // Fermer en cliquant sur le backdrop
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };
  
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '1rem'
      }}
      onClick={handleBackdropClick}
    >
      <Container.Base
        bgColor={theme.colors.current.surfaceElevated}
        rounded
        elevated
        style={{
          maxWidth,
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          border: `1px solid ${theme.colors.current.border}`,
          position: 'relative'
        }}
      >
        {/* Header avec titre et bouton fermer */}
        {(title || showCloseButton) && (
          <Container.Flex 
            direction="row" 
            justify="space-between" 
            align="center"
            padding="1.5rem 1.5rem 0 1.5rem"
          >
            {title && (
              <h2 style={{ 
                margin: 0, 
                color: theme.colors.current.text,
                fontSize: '1.25rem',
                fontWeight: 'bold'
              }}>
                {title}
              </h2>
            )}
            
            {showCloseButton && (
              <Button.Default
                onClick={onClose}
                variant="tertiary"
                size="small"
                style={{
                  backgroundColor: 'transparent',
                  color: theme.colors.current.textSecondary,
                  border: 'none',
                  fontSize: '1.5rem',
                  padding: '0.25rem 0.5rem',
                  minWidth: 'auto'
                }}
              >
                ✕
              </Button.Default>
            )}
          </Container.Flex>
        )}
        
        {/* Contenu du modal */}
        <div style={{ padding: title || showCloseButton ? '1rem 1.5rem 1.5rem 1.5rem' : '1.5rem' }}>
          {children}
        </div>
      </Container.Base>
    </div>
  );
};

export default Modal; 
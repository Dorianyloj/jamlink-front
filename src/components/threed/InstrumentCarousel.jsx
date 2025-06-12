import React, { useEffect, useState, useCallback } from 'react';
import { Container, Button } from '../atoms';
import SimpleDrumKit from './SimpleDrumKit';
import SimpleSynthe from './SimpleSynthe';

const InstrumentCarousel = ({ theme }) => {
  const [currentInstrument, setCurrentInstrument] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false); 

  // Liste des instruments disponibles
  const instruments = [
    {
    id: 0,
    name: "Batterie",
    emoji: "🥁",
    component: SimpleDrumKit,
    description: "Découvrez notre batterie interactive"
    },
    {
    id: 1,
    name: "Synthétiseur",
    emoji: "🎹",
    component: SimpleSynthe,
    description: "Explorez les sons électroniques"
    }
  ];

  const changeInstrument = useCallback((newIndex) => {  
    if (newIndex === currentInstrument) return;  
    
    setIsTransitioning(true);  
    setTimeout(() => {  
      setCurrentInstrument(newIndex);  
      setIsTransitioning(false);  
    }, 250);  
  }, [currentInstrument]);  
    
  const nextInstrument = useCallback(() => {  
    const nextIndex = (currentInstrument + 1) % instruments.length;  
    changeInstrument(nextIndex);  
  }, [currentInstrument, changeInstrument, instruments.length]);  
    
  const prevInstrument = useCallback(() => {  
    const prevIndex = (currentInstrument - 1 + instruments.length) % instruments.length;  
    changeInstrument(prevIndex);  
  }, [currentInstrument, changeInstrument, instruments.length]); 

  const CurrentInstrumentComponent = instruments[currentInstrument].component;
  
  useEffect(() => {  
    const handleKeyPress = (event) => {  
      if (event.key === 'ArrowLeft') {  
        prevInstrument();  
      } else if (event.key === 'ArrowRight') {  
        nextInstrument();  
      }  
    };  
    
    window.addEventListener('keydown', handleKeyPress);  
    return () => window.removeEventListener('keydown', handleKeyPress);  
  }, [nextInstrument, prevInstrument]); // ✅ Ajout des dépendances

  return (
    <Container.Base style={{ position: 'relative' }}>

    {/* Container principal avec flèches */}
    <Container.Base style={{ position: 'relative' }}>
    {/* Flèche gauche */}
        <Button.Default
            onClick={prevInstrument}
            style={{
            position: 'absolute',
            left: '-10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
        }}
            onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
            onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
        >
        ←
        </Button.Default>

    {/* Instrument 3D */}
        <Container.Base  
            style={{  
            transition: 'all 0.3s ease',  
            opacity: isTransitioning ? 0.3 : 1,  
            transform: isTransitioning ? 'scale(0.95)' : 'scale(1)'  
        }}  
        >  
            <CurrentInstrumentComponent theme={theme} />  
        </Container.Base> 

    {/* Flèche droite */}
        <Button.Default
            onClick={nextInstrument}
            style={{
            position: 'absolute',
            right: '-10px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            border: '1px solid rgba(255,255,255,0.3)',
            color: '#fff',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.3s ease'
        }}
            onMouseEnter={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.3)';
            e.target.style.transform = 'translateY(-50%) scale(1.1)';
        }}
            onMouseLeave={(e) => {
            e.target.style.backgroundColor = 'rgba(255,255,255,0.2)';
            e.target.style.transform = 'translateY(-50%) scale(1)';
        }}
        >
        →
        </Button.Default>
    </Container.Base>

    {/* Indicateurs de pagination */}
    <Container.Flex direction="row" justify="center" gap="0.5rem" margin="1rem 0 0 0">
        {instruments.map((_, index) => (
        <Button.Default
            key={index}
            onClick={() => changeInstrument(index)} // ✅ Utilise changeInstrument au lieu de setCurrentInstrument
            style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: index === currentInstrument 
            ? 'rgba(255,255,255,0.8)' 
            : 'rgba(255,255,255,0.3)',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            padding: 0,
            minWidth: 'auto'
        }}
        />
        ))}
    </Container.Flex>

    {/* Contrôles clavier */}
        <Container.Base 
            style={{ 
            textAlign: 'center', 
            marginTop: '1rem',
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.6)'
        }}
        >
        Utilisez ← → ou cliquez sur les flèches pour naviguer
        </Container.Base>
    </Container.Base>
  );
};

export default InstrumentCarousel;
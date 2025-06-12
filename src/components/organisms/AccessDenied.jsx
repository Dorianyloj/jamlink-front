import React from 'react';
import { Container, Typography } from '../atoms';

const AccessDenied = () => {
    return (
        <Container.FadeIn>
            <Container.Base padding="2rem" bgColor="#fff3cd" rounded elevated>
                <Typography.Typography variant="h2" align="center" margin="0 0 1rem 0">
                    🔒 Accès restreint
                </Typography.Typography>
                <Typography.Typography align="center" margin="0 0 1.5rem 0">
                    Vous devez être connecté pour voir les groupes de musique.
                </Typography.Typography>
                <Typography.Typography align="center">
                    Allez dans la section "Connexion" pour vous authentifier.
                </Typography.Typography>
            </Container.Base>
        </Container.FadeIn>
        
    );
};

export default AccessDenied;
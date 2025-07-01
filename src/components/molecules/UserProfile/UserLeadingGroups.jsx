import React, { useState } from "react";
import { Container, Typography, Button } from "../../atoms";
import { MusicGroups } from "../../molecules";
import { useDispatch } from 'react-redux';
import { fetchMusicGroupDetails, clearSelectedGroup, fetchUserProfile } from '../../../store';

const UserLeadingGroups = ({ theme, leadingGroups }) => {
  const dispatch = useDispatch();
  const [editingGroupId, setEditingGroupId] = useState(null);
  
  if (!leadingGroups || leadingGroups.length === 0) return null;

  const handleEditClick = async (groupId) => {
    try {
      // Récupérer les détails complets du groupe
      await dispatch(fetchMusicGroupDetails(groupId)).unwrap();
      setEditingGroupId(groupId);
    } catch (error) {
      console.error('Erreur lors du chargement des détails:', error);
    }
  };

  const handleEditSuccess = async () => {
    setEditingGroupId(null);
    dispatch(clearSelectedGroup());
    
    // Recharger le profil utilisateur pour mettre à jour les groupes dirigés
    try {
      await dispatch(fetchUserProfile()).unwrap();
      console.log('✅ Profil utilisateur rechargé avec succès');
    } catch (error) {
      console.error('❌ Erreur lors du rechargement du profil:', error);
    }
  };

  const handleEditClose = () => {
    setEditingGroupId(null);
    dispatch(clearSelectedGroup());
  };

  return (
    <Container.UserProfile bgColor={theme.colors.current.surfaceElevated} border={`1px solid ${theme.colors.current.border}`}>
      <Typography.Typography
        variant="h4"
        margin="0 0 1rem 0"
        color={theme.colors.warning}
      >
        👑 Groupes que je dirige
      </Typography.Typography>

      <Container.Flex direction="column" gap="0.5rem">
        {leadingGroups.map((group) => (
          <Container.Base
            key={group.id}
            padding="0.75rem"
            bgColor={theme.colors.current.surface}
            rounded
            style={{
              border: `1px solid ${theme.colors.warning}`
            }}
          >
            <Container.Flex direction="row" justify="space-between" align="center">
              <Typography.Typography
                color={theme.colors.current.text}
                style={{ fontWeight: 'bold' }}
              >
                👑 {group.name}
              </Typography.Typography>
              
              <Button.Default
                onClick={() => handleEditClick(group.id)}
                variant="tertiary"
                size="small"
                style={{
                  backgroundColor: theme.colors.warning || '#ff9800',
                  color: 'white',
                  border: 'none',
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.5rem'
                }}
              >
                ✏️
              </Button.Default>
            </Container.Flex>
          </Container.Base>
        ))}
      </Container.Flex>
      
      {/* Modal d'édition */}
      {editingGroupId && (
        <MusicGroups.EditGroupForm
          theme={theme}
          isOpen={true}
          onClose={handleEditClose}
          onSuccess={handleEditSuccess}
          onRefresh={async () => {
            try {
              await dispatch(fetchUserProfile()).unwrap();
              console.log('✅ Profil utilisateur rechargé depuis le formulaire');
            } catch (error) {
              console.error('❌ Erreur lors du rechargement du profil depuis le formulaire:', error);
            }
          }}
        />
      )}
    </Container.UserProfile>
  );
};

export default UserLeadingGroups;
import React, { useState, useEffect } from "react";
import { Container, Typography, TextField, Button, Form, Modal } from "../../atoms";
import { useSelector, useDispatch } from "react-redux";
import { updateMusicGroup, clearUpdateErrors, clearDetailsErrors } from "../../../store";

const EditGroupForm = ({ theme, isOpen, onClose, onSuccess, onRefresh }) => {
  const dispatch = useDispatch();
  
  // États Redux
  const selectedGroup = useSelector((state) => state.musicGroups.selectedGroup);
  const updateStatus = useSelector((state) => state.musicGroups.updateStatus);
  const updateErrors = useSelector((state) => state.musicGroups.updateErrors);
  const detailsStatus = useSelector((state) => state.musicGroups.detailsStatus);
  const detailsErrors = useSelector((state) => state.musicGroups.detailsErrors);
  
  console.log('Selected Group:', selectedGroup);

  // États locaux du formulaire
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    level: "",
    maxMembers: 5
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

  // Mettre à jour le formulaire quand le groupe sélectionné change
  useEffect(() => {
    if (selectedGroup) {
      setFormData({
        name: selectedGroup.name || "",
        description: selectedGroup.description || "",
        location: selectedGroup.location || "",
        level: selectedGroup.level || "",
        maxMembers: selectedGroup.maxMembers || 5
      });
    }
  }, [selectedGroup]);
  
  // Gestion du changement des champs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'maxMembers' ? parseInt(value) || 1 : value
    }));
  };
  
  // Soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!selectedGroup) return;
    
    try {
      await dispatch(updateMusicGroup({
        groupId: selectedGroup.id,
        groupData: formData
      })).unwrap();
      
      // Afficher le message de succès
      setShowSuccess(true);
      
      // Fermer le modal après un délai
      setTimeout(() => {
        // Déclencher les callbacks de succès et de rafraîchissement
        onSuccess?.();
        onRefresh?.();
        onClose?.();
        setShowSuccess(false);
      }, 1500);
    } catch (error) {
      // L'erreur est gérée par Redux
    }
  };
  
  // Réinitialiser les erreurs à la fermeture
  useEffect(() => {
    return () => {
      dispatch(clearUpdateErrors());
      dispatch(clearDetailsErrors());
    };
  }, [dispatch]);
  
  const isLoading = updateStatus === "pending";
  const isLoadingDetails = detailsStatus === "pending";
  
  // Ne pas afficher le modal si on n'a pas de groupe sélectionné ou si on est en train de charger
  if (!selectedGroup && !isLoadingDetails) {
    return null;
  }
  
  return (
    <Modal.Modal
      isOpen={isOpen}
      onClose={onClose}
      title="✏️ Modifier le groupe"
      theme={theme}
      maxWidth="500px"
    >
      {/* Erreurs de chargement des détails */}
      {detailsErrors && (
        <Container.Base
          padding="1rem"
          bgColor={theme.colors.error ? `${theme.colors.error}10` : '#ffebee'}
          rounded
          margin="0 0 1rem 0"
          style={{
            border: `1px solid ${theme.colors.error || '#f44336'}`
          }}
        >
          <Typography.Typography color={theme.colors.error || '#f44336'}>
            ❌ {detailsErrors}
          </Typography.Typography>
        </Container.Base>
      )}

      {/* Erreurs de mise à jour */}
      {updateErrors && (
        <Container.Base
          padding="1rem"
          bgColor={theme.colors.error ? `${theme.colors.error}10` : '#ffebee'}
          rounded
          margin="0 0 1rem 0"
          style={{
            border: `1px solid ${theme.colors.error || '#f44336'}`
          }}
        >
          <Typography.Typography color={theme.colors.error || '#f44336'}>
            ❌ {updateErrors}
          </Typography.Typography>
        </Container.Base>
      )}

      {/* Message de succès */}
      {showSuccess && (
        <Container.Base
          padding="1rem"
          bgColor={theme.colors.success ? `${theme.colors.success}10` : '#e8f5e8'}
          rounded
          margin="0 0 1rem 0"
          style={{
            border: `1px solid ${theme.colors.success || '#4caf50'}`
          }}
        >
          <Typography.Typography color={theme.colors.success || '#4caf50'}>
            ✅ Groupe modifié avec succès ! Rechargement en cours...
          </Typography.Typography>
        </Container.Base>
      )}

      {/* État de chargement des détails */}
      {isLoadingDetails && (
        <Container.Base padding="2rem" bgColor="transparent">
          <Typography.Typography align="center" color={theme.colors.current.text}>
            🔄 Chargement des détails du groupe...
          </Typography.Typography>
        </Container.Base>
      )}
      
              {!isLoadingDetails && selectedGroup && (
          <Form.Base onSubmit={handleSubmit}>
            <Container.Flex direction="column" gap="1rem">
          
          {/* Nom du groupe */}
          <TextField.TextField
            label="Nom du groupe"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex: Les Rockeurs du dimanche"
            required
            fullWidth
            disabled={isLoading}
          />
          
          {/* Description */}
          <TextField.TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Décrivez votre groupe..."
            multiline
            rows={3}
            fullWidth
            disabled={isLoading}
          />
          
          {/* Lieu */}
          <TextField.TextField
            label="Lieu"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Ex: Paris, France"
            fullWidth
            disabled={isLoading}
          />
          
          {/* Niveau */}
          <Container.Base>
            <Typography.Typography 
              margin="0 0 0.5rem 0" 
              color={theme.colors.current.text}
              style={{ fontSize: '0.9rem', fontWeight: 'bold' }}
            >
              Niveau
            </Typography.Typography>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              disabled={isLoading}
              style={{
                width: '100%',
                padding: '0.75rem',
                border: `1px solid ${theme.colors.current.border}`,
                borderRadius: '0.375rem',
                backgroundColor: theme.colors.current.surface,
                color: theme.colors.current.text,
                fontSize: '1rem'
              }}
            >
              <option value="">Sélectionner un niveau</option>
              <option value="BEGINNER">Débutant</option>
              <option value="INTERMEDIATE">Intermédiaire</option>
              <option value="ADVANCED">Avancé</option>
            </select>
          </Container.Base>
          
          {/* Nombre maximum de membres */}
          <TextField.TextField
            label="Nombre maximum de membres"
            name="maxMembers"
            type="number"
            value={formData.maxMembers}
            onChange={handleChange}
            min="1"
            max="20"
            fullWidth
            disabled={isLoading}
          />
          
          {/* Boutons d'action */}
          <Container.Flex direction="row" gap="1rem" justify="flex-end" margin="1rem 0 0 0">
            <Button.Default
              type="button"
              onClick={onClose}
              variant="secondary"
              disabled={isLoading}
              style={{
                backgroundColor: theme.colors.current.surface,
                color: theme.colors.current.text,
                border: `1px solid ${theme.colors.current.border}`
              }}
            >
              Annuler
            </Button.Default>
            
            <Button.Default
              type="submit"
              variant="primary"
              disabled={isLoading}
              style={{
                backgroundColor: theme.colors.success || '#4caf50',
                color: 'white'
              }}
            >
              {isLoading ? "Modification..." : "💾 Enregistrer"}
            </Button.Default>
          </Container.Flex>
          
                    </Container.Flex>
          </Form.Base>
        )}
      </Modal.Modal>
    );
  };

export default EditGroupForm; 
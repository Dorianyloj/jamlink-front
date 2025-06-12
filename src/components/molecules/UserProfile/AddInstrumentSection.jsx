import React, { useEffect, useState } from 'react';
import { Container, Typography, Form, Select, Button } from '../../atoms';
import { useDispatch, useSelector } from 'react-redux';
import { fetchInstruments, clearInstrumentsError } from '../../../store';

const AddInstrumentSection = ({theme, userId}) => {
  const [selectedInstrumentId, setSelectedInstrumentId] = useState('');
  const [localError, setLocalError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const dispatch = useDispatch();
  
  const instruments = useSelector((state) => state.instruments.instruments);
  const instrumentsStatus = useSelector((state) => state.instruments.status);
  const instrumentsError = useSelector((state) => state.instruments.errors);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    if (instrumentsStatus === "idle") {
      dispatch(fetchInstruments());
    }
  }, [dispatch, instrumentsStatus]);

  useEffect(() => {
    return () => {
      dispatch(clearInstrumentsError());
    };
  }, [dispatch]);

  const handleAdd = async (e) => {  
    e.preventDefault();  
    setLocalError(null);  
    setSuccessMessage('');  
  
    if (!selectedInstrumentId) {  
      setLocalError('Veuillez sélectionner un instrument');  
      return;  
    }  
  
    if (!token) {  
      setLocalError('Vous devez être connecté pour ajouter un instrument');  
      return;  
    }  
  
    if (!userId) {  
      setLocalError('ID utilisateur manquant');  
      return;  
    }  
  
    const url = `/api/v1/users/${userId}/instruments`;
    const body = JSON.stringify({ instrumentId: selectedInstrumentId });
    const options = {
      method: 'POST',
      headers: {   
        'Content-Type': 'application/json',  
        'Authorization': `Bearer ${token}`  
      },
      body,
    };
  
    console.log("Envoi de la requête POST à :", url);
    console.log("Options de la requête :", options);
  
    try {  
      const response = await fetch(url, options);
  
      console.log("Réponse reçue :", response.status, response.statusText);
      const responseText = await response.text();
      console.log("Contenu de la réponse :", responseText);
  
      if (!response.ok) {  
        throw new Error('Erreur lors de l\'ajout de l\'instrument');  
      }  
  
      setSuccessMessage('Instrument ajouté avec succès !');  
      setSelectedInstrumentId('');  
    } catch (err) {  
      setLocalError(err.message || 'Erreur lors de l\'ajout de l\'instrument');  
    }  
  };

  const loading = instrumentsStatus === "pending";
  const error = instrumentsError || localError;

  return (
    <Container.Base>
      <Typography.Typography>Ajouter un instrument</Typography.Typography>
      
      {error && (
        <Typography.Typography style={{ color: 'red' }}>
          {error}
        </Typography.Typography>
      )}
      
      {successMessage && (
        <Typography.Typography style={{ color: 'green' }}>
          {successMessage}
        </Typography.Typography>
      )}

      {loading && (
        <Typography.Typography>Chargement des instruments...</Typography.Typography>
      )}

      <Form.Base onSubmit={handleAdd}>
        <Select.Base 
          value={selectedInstrumentId}  
          onChange={setSelectedInstrumentId} 
          theme={theme} 
          options={instruments.map(inst => ({ value: inst.id, label: inst.name }))}  
          placeholder="-- Sélectionnez un instrument --"
          disabled={loading}
        />  
        <Button.Default 
          type="submit" 
          style={{ marginLeft: '10px' }}
          disabled={loading || !selectedInstrumentId}
        >
          Ajouter
        </Button.Default>
      </Form.Base>
    </Container.Base>
  );
};

export default AddInstrumentSection;
import React, { useState, useEffect } from "react";
import { Container, Typography, Image, TextField } from "../atoms";
import { useSelector, useDispatch } from "react-redux";
import { fetchPokedex } from "../../store";

const Pokedex = () => {
  const dispatch = useDispatch();
  
  // Récupération des données du store Redux
  const pokemon = useSelector((state) => state.pokedex.pokedex);
  const status = useSelector((state) => state.pokedex.status);
  const error = useSelector((state) => state.pokedex.errors);

  const [searchTerm, setSearchTerm] = useState(pokemon?.name || "");
  
  // Fonction pour gérer le changement dans le champ de recherche
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
  };
  
  // Effet pour déclencher la recherche avec un délai
  useEffect(() => {
    // Ne pas rechercher si le terme est vide
    if (!searchTerm.trim()) return;
    
    const timeoutId = setTimeout(() => {
      dispatch(fetchPokedex(searchTerm));
    }, 500);
    
    return () => clearTimeout(timeoutId);
  }, [dispatch, searchTerm]);
  
  // Chargement initial
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokedex("ditto"));
    }
  }, [dispatch, status]);
  
  // Déterminer si on est en train de charger
  const loading = status === "pending";
  
  // Vérifier si le Pokémon est valide (a un nom)
  const isPokemonValid = pokemon && pokemon.name;
  
  return (
    <Container.Base padding="2rem" bgColor="#f5f5f5" rounded elevated>
      <Typography.Typography variant="h2" align="center" margin="0 0 1rem 0">
        Pokédex
      </Typography.Typography>
      
      <TextField.TextField
        label="Rechercher un Pokémon"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Ex: pikachu, charizard, eevee..."
        fullWidth
        rounded
        margin="0 0 1.5rem 0"
        error={!!error}
        errorMessage={error}
      />
      
      {loading && (
        <Typography.Typography align="center">Chargement...</Typography.Typography>
      )}
      
      {!loading && error && (
        <Typography.Typography align="center" color="#f44336">
          {error}
        </Typography.Typography>
      )}
      
      {!loading && !error && isPokemonValid && (
        <div>
          <Typography.Typography variant="h3" margin="1rem 0" align="center">
            {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
          </Typography.Typography>
          
          <Container.Flex direction="row" gap="2rem" margin="1rem 0" justify="center">
            <Image.Image
              src={pokemon.sprites.front_default} 
              alt={pokemon.name} 
              width="150px"
              height="150px"
              bgColor="#f0f0f0"
              containerRounded
              elevated
              containerPadding="0.5rem"
            />
            
            <Container.Flex direction="column" gap="0.5rem">
              <Typography.Typography>
                <strong>ID:</strong> {pokemon.id}
              </Typography.Typography>
              <Typography.Typography>
                <strong>Taille:</strong> {pokemon.height / 10} m
              </Typography.Typography>
              <Typography.Typography>
                <strong>Poids:</strong> {pokemon.weight / 10} kg
              </Typography.Typography>
              <Typography.Typography>
                <strong>Types:</strong> {pokemon.types.map(type => 
                  type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
                ).join(", ")}
              </Typography.Typography>
            </Container.Flex>
          </Container.Flex>
        </div>
      )}
    </Container.Base>
  );
};

export default Pokedex;
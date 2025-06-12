import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../store";

import { RegisterOrganisms } from "../organisms";

const Register = ({ theme, onNavigate }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    experience: "",
    level: "Débutant",
    location: "",
    roles: ["ROLE_USER"]
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: null
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) newErrors.username = "Le nom d'utilisateur est requis";
    if (formData.username.length < 3) newErrors.username = "Le nom d'utilisateur doit contenir au moins 3 caractères";
    if (!formData.password) newErrors.password = "Le mot de passe est requis";
    if (formData.password.length < 6) newErrors.password = "Le mot de passe doit contenir au moins 6 caractères";
    if (formData.password !== confirmPassword) newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    if (!formData.firstname.trim()) newErrors.firstname = "Le prénom est requis";
    if (!formData.lastname.trim()) newErrors.lastname = "Le nom est requis";
    if (!formData.location.trim()) newErrors.location = "La localisation est requise";
    if (!formData.experience.trim()) newErrors.experience = "L'expérience est requise";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const registrationData = {
        username: formData.username,
        password: formData.password,
        firstname: formData.firstname,
        lastname: formData.lastname,
        experience: formData.experience,
        level: formData.level,
        location: formData.location,
        roles: formData.roles
      };

      await dispatch(registerUser(registrationData)).unwrap();

      setRegistrationSuccess(true);

    } catch (error) {
      setErrors({ general: error || "Erreur lors de l'inscription. Veuillez réessayer." });
    } finally {
      setIsLoading(false);
    }
  };

  if (registrationSuccess) {
    return <RegisterOrganisms.RegisterSuccess theme={theme} onNavigate={onNavigate} />;
  }

  return (
    <RegisterOrganisms.RegisterForm
      theme={theme}
      formData={formData}
      confirmPassword={confirmPassword}
      errors={errors}
      isLoading={isLoading}
      onInputChange={handleInputChange}
      onConfirmPasswordChange={setConfirmPassword}
      onSubmit={handleSubmit}
      onNavigate={onNavigate}
    />
  );
};

export default Register;
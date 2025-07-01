# 🎵 JamLink

<div align="center">
  <img src="https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-2.8.2-764ABC?style=for-the-badge&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-0.177.0-000000?style=for-the-badge&logo=three.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Styled_Components-6.1.18-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
</div>

<div align="center">
  <h3>🎸 La plateforme qui connecte les musiciens passionnés 🥁</h3>
  <p>Application React moderne pour créer des groupes de musique, organiser des sessions de jam et découvrir des instruments en 3D</p>
</div>

---

## ✨ Fonctionnalités principales

### 🎵 **Communauté musicale**
- **Profils musiciens** - Créez et personnalisez votre profil avec vos instruments et styles musicaux
- **Groupes musicaux** - Créez, rejoignez et gérez des groupes de musique
- **Système d'authentification** - Connexion sécurisée avec gestion d'état persistante
- **Recherche et filtres** - Trouvez des musiciens par style, instrument ou région

### 🎨 **Interface moderne**
- **Mode nuit/jour** - Interface adaptative avec thème dynamique
- **Design responsive** - Compatible mobile, tablette et desktop
- **Animations fluides** - Transitions et effets visuels soignés
- **Architecture atomique** - Composants réutilisables et maintenables

### 🌟 **Expérience immersive**
- **Instruments 3D interactifs** - Découvrez des instruments (batterie, synthétiseur) en réalité virtuelle
- **Carrousel d'instruments** - Explorez les instruments disponibles en 3D
- **Interface intuitive** - Navigation simplifiée et expérience utilisateur optimisée

---

## 🚀 Installation et démarrage rapide

### Prérequis
- **Node.js** ≥ 16.0.0
- **npm** ≥ 7.0.0 ou **yarn** ≥ 1.22.0
- **Git**

### 🔧 Installation

```bash
# 1. Cloner le repository
git clone https://github.com/votre-username/jamlink-front.git
cd jamlink-front

# 2. Installer les dépendances
npm install
# ou
yarn install

# 3. Démarrer le serveur de développement
npm start
# ou
yarn start
```

### ✅ Accéder à l'application

L'application sera disponible sur **http://localhost:3001**

Le navigateur s'ouvrira automatiquement sur la page d'accueil.

---

## 🛠️ Technologies utilisées

### **Frontend**
- **React** `19.1.0` - Framework UI moderne
- **Redux Toolkit** `2.8.2` - Gestion d'état centralisée
- **React Router** - Navigation SPA
- **Styled Components** `6.1.18` - CSS-in-JS et theming

### **3D & Graphiques**
- **Three.js** `0.177.0` - Rendu 3D WebGL
- **React Three Fiber** `9.1.2` - Three.js pour React
- **React Three Drei** `10.1.2` - Utilitaires 3D avancés

### **Outils & Qualité**
- **Axios** `1.9.0` - Client HTTP
- **React Icons** `5.5.0` - Bibliothèque d'icônes
- **React Testing Library** - Tests unitaires
- **ESLint** - Linting et qualité code

---

## 📁 Structure du projet

```
jamlink-front/
├── src/
│   ├── components/          # Composants React (Architecture atomique)
│   │   ├── atoms/          # Composants de base (Button, Typography, etc.)
│   │   ├── molecules/      # Composants moyens (Forms, Cards, etc.)
│   │   ├── organisms/      # Composants complexes (Navigation, Lists, etc.)
│   │   ├── pages/          # Pages de l'application
│   │   └── threed/         # Composants 3D (Instruments, Scènes)
│   ├── context/            # Contexts React (ThemeProvider, etc.)
│   ├── store/              # Configuration Redux Store
│   ├── theme.js            # Configuration des thèmes
│   └── App.js              # Composant principal
├── public/
│   ├── models/             # Modèles 3D (.glb)
│   └── ...                 # Assets statiques
└── package.json
```

---

## 🎮 Scripts disponibles

```bash
# Développement
npm start              # Démarrer en mode développement (port 3001)

# Production
npm run build          # Build optimisé pour production
npm run build:analyze  # Analyser la taille du bundle

# Qualité code
npm run lint           # Vérifier le linting ESLint
npm run lint:fix       # Corriger automatiquement le linting
```

---

## ⚙️ Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
# API Backend
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_API_TIMEOUT=10000

# Application
REACT_APP_APP_NAME=JamLink
REACT_APP_VERSION=1.0.0

# Features (optionnel)
REACT_APP_ENABLE_3D=true
REACT_APP_ENABLE_ANALYTICS=false
```

### Configuration du proxy

Le proxy est configuré pour rediriger les requêtes API :
```json
"proxy": "https://localhost"
```

---

## 🎯 Fonctionnalités détaillées

### 🔐 **Authentification**
- Inscription avec validation de formulaire
- Connexion avec persistance de session
- Gestion automatique des tokens JWT
- Redirection intelligente après connexion

### 👥 **Gestion des groupes**
- Création de groupes musicaux
- Invitation et gestion des membres
- Définition des styles musicaux
- Système de rôles (leader, membre)

### 🎸 **Profils musiciens**
- Ajout d'instruments pratiqués
- Sélection de styles musicaux préférés
- Informations personnelles et contact
- Historique des groupes

### 🌐 **Interface 3D**
- Modèles 3D d'instruments haute qualité
- Interaction mouse/touch pour rotation
- Carrousel avec navigation fluide
- Chargement optimisé des assets 3D

---

## 🔧 Développement

### Architecture des composants

L'application suit le **pattern Atomic Design** :

```
atoms/          # Composants de base (Button, Input, Typography)
molecules/      # Combinaisons d'atoms (SearchBar, Card)
organisms/      # Composants complexes (Header, ProductList)
pages/          # Pages complètes de l'application
```

### État global (Redux)

```javascript
// Structure du store Redux
{
  auth: {
    user: null,
    isAuthenticated: false,
    token: null,
    status: 'idle'
  },
  musicGroups: {
    groups: [],
    currentGroup: null,
    loading: false
  }
}
```

### Système de thème

Support du mode sombre/clair avec styled-components :

```javascript
const theme = {
  colors: {
    primary: '#3498db',
    secondary: '#e74c3c',
    success: '#2ecc71',
    // ... autres couleurs
  }
}
```

---

## 🐛 Dépannage

### Problèmes courants

**Port déjà utilisé :**
```bash
PORT=3002 npm start
```

**Erreurs de dépendances :**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Problèmes de rendu 3D :**
- Vérifiez que WebGL est activé dans votre navigateur
- Testez sur Chrome/Firefox récent
- Vérifiez la carte graphique

**Build failed :**
```bash
npm run lint:fix
npm run build
```

---

## 🤝 Contribution

### Workflow de contribution

1. **Fork** le projet
2. **Créer** une branche feature
   ```bash
   git checkout -b feature/nouvelle-fonctionnalite
   ```
3. **Développer** avec commits atomiques
   ```bash
   git commit -m "feat: ajout nouvelle fonctionnalité"
   ```
4. **Tester** votre code
   ```bash
   npm test
   npm run lint
   ```
5. **Push** et créer une Pull Request

### Standards de code

- **ESLint** : Respecter la configuration ESLint
- **Commits** : Format conventionnel (`feat:`, `fix:`, `docs:`)
- **Tests** : Ajouter des tests pour les nouvelles fonctionnalités
- **Documentation** : Documenter les composants complexes

---

## 📱 Compatibilité

- **Navigateurs** : Chrome 80+, Firefox 75+, Safari 13+, Edge 80+
- **Mobiles** : iOS 13+, Android 8+
- **WebGL** : Requis pour les fonctionnalités 3D
- **JavaScript** : ES2020+

---

## 📄 Licence

Ce projet est sous licence **MIT**. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👨‍💻 Équipe

Développé avec ❤️ par l'équipe JamLink

**Contribuer** : Les contributions sont les bienvenues ! Consultez notre guide de contribution.

---

<div align="center">
  <strong>🎵 Happy jamming ! 🎸🥁🎹</strong>
  <br>
  <i>Connectons la communauté musicale mondiale</i>
</div>

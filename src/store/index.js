import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const tasks = [
    { id: 1, name: "Apprendre React", done: false },
    { id: 2, name: "Maîtriser l'architecture atomique", done: false }
]

const todoSlice = createSlice({
    name: 'todo',
    initialState: tasks,
    reducers: {
        toggleTask: (state, action) => {
            const task = state.find((task) => {
                return task.id === action.payload;
            })
            task.done = !task.done;
        },
        addTask: (state, action) => {
            state.push({
                id: state.length + 1,
                name: action.payload,
                done: false
            });
        },
        deleteTask: (state, action) => {
            return state.filter((task) => {
                return task.id !== action.payload;
            });
        }
    }
});

export const fetchPokedex = createAsyncThunk(
    "pokemon/fetchPokemon",
    async (payload = "mewtwo", { rejectWithValue }) => {
      try {
        let config = {
          method: "get",
          maxBodyLength: Infinity,
          url: "https://pokeapi.co/api/v2/pokemon/" + payload,
          headers: {},
        };
  
        const response = await axios.request(config);
        return response.data;
      } catch (error) {
        return rejectWithValue("Pokémon non trouvé. Vérifiez l'orthographe.");
      }
    }
  );
  
  const pokeSlice = createSlice({
    name: 'pokedex',
    initialState: {
      pokedex: null,
      status: "idle",
      errors: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchPokedex.pending, (state) => {
          state.status = "pending";
          state.errors = null;
        })
        .addCase(fetchPokedex.rejected, (state, action) => {
          state.status = "rejected";
          state.errors = action.payload || action.error.message;
        })
        .addCase(fetchPokedex.fulfilled, (state, action) => {
          state.status = "fulfilled";
          state.pokedex = action.payload;
          state.errors = null;
        });
    }
  });

// Action pour l'authentification
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/api/login_check",
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          username,
          password
        })
      };

      const response = await axios.request(config);
      
      // Stocker le token dans le localStorage
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('refreshToken', response.data.refresh_token);
      
      return response.data;
    } catch (error) {
      return rejectWithValue("Identifiants incorrects. Veuillez réessayer.");
    }
  }
);

// Action pour récupérer les données utilisateur  
export const fetchUserProfile = createAsyncThunk(  
  "auth/fetchUserProfile",  
  async (_, { rejectWithValue, getState }) => {  
    try {  
      const state = getState();  
      const token = state.auth.token;  
        
      if (!token) {  
        return rejectWithValue("Token manquant");  
      }  
  
      let config = {  
        method: "get",  
        maxBodyLength: Infinity,  
        url: "/api/v1/user/profile",  
        headers: {  
          'Authorization': `Bearer ${token}`  
        },  
      };  
  
      const response = await axios.request(config);  
      return response.data;  
    } catch (error) {  
      if (error.response?.status === 401) {  
        return rejectWithValue("Session expirée");  
      }  
      return rejectWithValue("Impossible de récupérer le profil utilisateur");  
    }  
  }  
);

// Slice pour l'authentification
const authSlice = createSlice({  
  name: 'auth',  
  initialState: {  
    token: localStorage.getItem('authToken') || null,  
    refreshToken: localStorage.getItem('refreshToken') || null,  
    user: null,   
    isAuthenticated: !!localStorage.getItem('authToken'),  
    status: "idle",  
    userStatus: "idle",   
    errors: null  
  },  
  reducers: {  
    logout: (state) => {  
      state.token = null;  
      state.refreshToken = null;  
      state.user = null;   
      state.isAuthenticated = false;  
      state.status = "idle";  
      state.userStatus = "idle";  
      state.errors = null;  
      localStorage.removeItem('authToken');  
      localStorage.removeItem('refreshToken');  
    },  
    clearError: (state) => {  
      state.errors = null;  
    }  
  },  
  extraReducers: (builder) => {  
    builder  
      // Login  
      .addCase(loginUser.pending, (state) => {  
        state.status = "pending";  
        state.errors = null;  
      })  
      .addCase(loginUser.rejected, (state, action) => {  
        state.status = "rejected";  
        state.errors = action.payload || action.error.message;  
        state.isAuthenticated = false;  
        state.token = null;  
        state.refreshToken = null;  
        state.user = null;  
      })  
      .addCase(loginUser.fulfilled, (state, action) => {  
        state.status = "fulfilled";  
        state.token = action.payload.token;  
        state.refreshToken = action.payload.refresh_token;  
        state.isAuthenticated = true;  
        state.errors = null;  
         
        if (action.payload.user) {  
          state.user = action.payload.user;  
        }  
      })  
        
      .addCase(fetchUserProfile.pending, (state) => {  
        state.userStatus = "pending";  
      })  
      .addCase(fetchUserProfile.rejected, (state, action) => {  
        state.userStatus = "rejected";  
        state.errors = action.payload || action.error.message;  
      })  
      .addCase(fetchUserProfile.fulfilled, (state, action) => {  
        state.userStatus = "fulfilled";  
        state.user = action.payload;  
      });  
  }  
});

// Action pour récupérer les groupes de musique avec authentification
export const fetchMusicGroups = createAsyncThunk(
  "musicGroups/fetchMusicGroups",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const token = state.auth.token;
      
      if (!token) {
        return rejectWithValue("Vous devez être connecté pour voir les groupes de musique.");
      }

      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "/api/v1/musicgroups",
        headers: {
          'Authorization': `Bearer ${token}`
        },
      };

      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      if (error.response?.status === 401) {
        return rejectWithValue("Session expirée. Veuillez vous reconnecter.");
      }
      return rejectWithValue("Impossible de récupérer les groupes de musique. Veuillez réessayer plus tard.");
    }
  }
);

const musicGroupsSlice = createSlice({
  name: 'musicGroups',
  initialState: {
    groups: [],
    status: "idle",
    errors: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMusicGroups.pending, (state) => {
        state.status = "pending";
        state.errors = null;
      })
      .addCase(fetchMusicGroups.rejected, (state, action) => {
        state.status = "rejected";
        state.errors = action.payload || action.error.message;
      })
      .addCase(fetchMusicGroups.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.groups = action.payload;
        state.errors = null;
      });
  }
});

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "/api/v1/users",
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify(userData)
      };

      const response = await axios.request(config);
      return response.data;
    } catch (error) {
      if (error.response?.status === 400) {
        return rejectWithValue("Données invalides. Vérifiez vos informations.");
      }
      return rejectWithValue("Erreur lors de l'inscription. Veuillez réessayer.");
    }
  }
);

// Action pour récupérer les instruments  
export const fetchInstruments = createAsyncThunk(  
  "instruments/fetchInstruments",  
  async (_, { rejectWithValue, getState }) => {  
    try {  
      const state = getState();  
      const token = state.auth.token;  
  
      if (!token) {  
        return rejectWithValue("Utilisateur non authentifié");  
      }  
  
      const config = {  
        method: "get",  
        url: "/api/v1/instruments",  
        headers: {  
          'Authorization': `Bearer ${token}`  
        }  
      };  
  
      const response = await axios.request(config);  
      return response.data; 
    } catch (error) {  
      if (error.response?.data?.error) {  
        return rejectWithValue(error.response.data.error);  
      }  
      return rejectWithValue("Erreur lors de la récupération des instruments");  
    }  
  }  
);

// Slice pour les instruments
const instrumentsSlice = createSlice({
  name: 'instruments',
  initialState: {
    instruments: [],
    selectedInstruments: [],
    status: "idle",
    errors: null
  },
  reducers: {
    selectInstrument: (state, action) => {
      const instrumentId = action.payload;
      if (!state.selectedInstruments.includes(instrumentId)) {
        state.selectedInstruments.push(instrumentId);
      }
    },
    deselectInstrument: (state, action) => {
      const instrumentId = action.payload;
      state.selectedInstruments = state.selectedInstruments.filter(id => id !== instrumentId);
    },
    clearSelectedInstruments: (state) => {
      state.selectedInstruments = [];
    },
    setSelectedInstruments: (state, action) => {
      state.selectedInstruments = action.payload;
    },
    clearInstrumentsError: (state) => {
      state.errors = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInstruments.pending, (state) => {
        state.status = "pending";
        state.errors = null;
      })
      .addCase(fetchInstruments.rejected, (state, action) => {
        state.status = "rejected";
        state.errors = action.payload || action.error.message;
      })
      .addCase(fetchInstruments.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.instruments = action.payload;
        state.errors = null;
      });
  }
});

export const { toggleTask, addTask, deleteTask } = todoSlice.actions;
export const { logout, clearError } = authSlice.actions;
export const { 
  selectInstrument, 
  deselectInstrument, 
  clearSelectedInstruments, 
  setSelectedInstruments,
  clearInstrumentsError 
} = instrumentsSlice.actions;

export const store = configureStore({
    reducer: {
        todoList: todoSlice.reducer,
        pokedex: pokeSlice.reducer,
        musicGroups: musicGroupsSlice.reducer,
        auth: authSlice.reducer,
        instruments: instrumentsSlice.reducer
    }
});
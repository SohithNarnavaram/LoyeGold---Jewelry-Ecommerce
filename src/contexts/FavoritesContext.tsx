import { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

export interface FavoriteItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface FavoritesState {
  items: FavoriteItem[];
}

type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: FavoriteItem }
  | { type: 'REMOVE_FAVORITE'; payload: number }
  | { type: 'LOAD_FAVORITES'; payload: FavoriteItem[] };

const initialState: FavoritesState = {
  items: [],
};

function favoritesReducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    
    case 'LOAD_FAVORITES':
      return {
        ...state,
        items: action.payload,
      };
    
    default:
      return state;
  }
}

interface FavoritesContextType {
  state: FavoritesState;
  addToFavorites: (item: FavoriteItem) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('loyegold-favorites');
    if (savedFavorites) {
      try {
        const favoriteItems = JSON.parse(savedFavorites);
        dispatch({ type: 'LOAD_FAVORITES', payload: favoriteItems });
      } catch (error) {
        console.error('Error loading favorites from localStorage:', error);
      }
    }
  }, []);

  // Save favorites to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('loyegold-favorites', JSON.stringify(state.items));
  }, [state.items]);

  const addToFavorites = (item: FavoriteItem) => {
    if (!isFavorite(item.id)) {
      dispatch({ type: 'ADD_FAVORITE', payload: item });
      toast({
        title: "Added to favorites",
        description: `${item.name} has been added to your favorites.`,
      });
    }
  };

  const removeFromFavorites = (id: number) => {
    const item = state.items.find(item => item.id === id);
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
    toast({
      title: "Removed from favorites",
      description: `${item?.name} has been removed from your favorites.`,
    });
  };

  const isFavorite = (id: number) => {
    return state.items.some(item => item.id === id);
  };

  return (
    <FavoritesContext.Provider value={{
      state,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
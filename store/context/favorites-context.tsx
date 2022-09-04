import React, { createContext, useState } from 'react';

interface FavoritesContext {
    ids: string[],
    addFavorite: (id: string) => void,
    removeFavorite: (id: string) => void
}

export const FavoritesContext = createContext<FavoritesContext>({
    ids: [],
    addFavorite: () => {},
    removeFavorite: () => {}
});

interface FavoritesContextProviderProps {
    children?: React.ReactNode;
}

const FavoritesContextProvider = ({ children }: FavoritesContextProviderProps) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

    const addFavorite = (id: string) => {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    };

    const removeFavorite = (id: string) => {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    };

    const value: FavoritesContext = {
        ids: favoriteMealIds,
        addFavorite,
        removeFavorite
    };

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;

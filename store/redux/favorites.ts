import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
    ids: string[],
}

const initialState: FavoriteState = {
    ids: []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<{ id: string }>) => {
            state.ids.push(action.payload.id);
        },
        removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1);
        }
    }
});

const { addFavorite, removeFavorite } = favoritesSlice.actions;
const favoritesReducer = favoritesSlice.reducer;

export { favoritesReducer, addFavorite, removeFavorite };


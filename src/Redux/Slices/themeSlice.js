import {createSlice} from '@reduxjs/toolkit';
import DARK_MODE from '../colorScheme/dark.json';
import LIGHT_MODE from '../colorScheme/light.json';

const themeSlice = createSlice({
  name: 'theme',
  initialState: LIGHT_MODE,
  reducers: {
    toggleTheme: state => {
      state.mode = state.mode.mode === 'light' ? DARK_MODE : LIGHT_MODE;
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;

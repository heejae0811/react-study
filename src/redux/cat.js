import { createSlice } from '@reduxjs/toolkit'
import * as database from '../database/cats'

export const catSlice = createSlice({
  name: 'cat',
  initialState: {
    cats: database.cats,
    selectedCat: null
  },
  reducers: {
    addHistory: (state, action) => {
      state.selectedCat.history.push(action.payload)

      state.cats = [
        ...state.cats.filter(cat => cat.name !== state.selectedCat.name),
        state.selectedCat
      ];
    },
    handleSelectedCat: (state, action) => {
      state.selectedCat = state.cats.find(cat => cat.name === action.payload)
    }
  }
})
export const { addHistory, handleSelectedCat } = catSlice.actions
export default catSlice.reducer

import {createSlice} from '@reduxjs/toolkit'
import * as database from '../database/cats'

export const catSlice = createSlice({
  name: 'cat',
  initialState: {
    cats: database.cats,
    selectedCat: null
  },
  reducers: {
    handleCreatedCat: (state, action) => {
      state.cats = [action.payload, ...state.cats]
    },
    handleDeletedCat: (state, action) => {
      state.cats = state.cats.filter(cat => cat.name !== action.payload)
    },
    handleSelectedCat: (state, action) => {
      state.selectedCat = state.cats.find(cat => cat.name === action.payload)
    },
    addHistory: (state, action) => {
      state.selectedCat.history.push(action.payload)

      state.cats = [
        ...state.cats.filter(cat => cat.name !== state.selectedCat.name),
        state.selectedCat
      ]
    },
    handleStatus: (state, action) => {
      state.selectedCat.status = action.payload

      state.cats = [
        ...state.cats.filter(cat => cat.name !== state.selectedCat.name),
        state.selectedCat
      ]
    },
    handleGainWeight: (state, action) => {
      state.selectedCat.weight = Number((state.selectedCat.weight + action.payload).toFixed(1))

      state.cats = [
        ...state.cats.filter(cat => cat.name !== state.selectedCat.name),
        state.selectedCat
      ]
    },
    handleLoseWeight: (state, action) => {
      state.selectedCat.weight = Number((state.selectedCat.weight - action.payload).toFixed(1))

      state.cats = [
        ...state.cats.filter(cat => cat.name !== state.selectedCat.name),
        state.selectedCat
      ]
    },
    handleAge: (state, action) => {
      state.selectedCat.age = state.selectedCat.age + 1

      state.cats = [
        ...state.cats.filter(cat => cat.name !== state.selectedCat.name),
        state.selectedCat
      ]
    }
  }
})

export const {
  handleCreatedCat,
  handleDeletedCat,
  handleSelectedCat,
  addHistory,
  handleStatus,
  handleGainWeight,
  handleLoseWeight,
  handleAge
} = catSlice.actions
export default catSlice.reducer

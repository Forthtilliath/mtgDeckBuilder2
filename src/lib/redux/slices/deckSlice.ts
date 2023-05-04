import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  cards: [] as CardDB[],
}

// Forth: Permet de rendre le type dynamique
// A contrario, si une erreur est faite dans initialState, on la repère moins facilement
export type Deck = typeof initialState

export const deckSlice = createSlice({
  name: 'deck',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Omit<CardDB, 'count'>>) => {
      const targetCard = state.cards.find(
        (curCard) => curCard.id === action.payload.id
      )
      if (targetCard) {
        if (targetCard.count < 4) targetCard.count += 1
      } else {
        state.cards.push({ ...action.payload, count: 1 })
      }
    },
    removeCard: (state, action: PayloadAction<CardDB['id']>) => {
      const indexToDelete = state.cards.findIndex(
        (curCard) => curCard.id === action.payload
      )
      if (state.cards[indexToDelete].count > 1) {
        state.cards[indexToDelete].count -= 1
      } else {
        state.cards.splice(indexToDelete, 1)
      }
    },
    reset: () => ({ ...initialState }),
  },
})

export const { addCard, removeCard, reset } = deckSlice.actions
export default deckSlice.reducer

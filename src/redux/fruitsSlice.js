import { createSlice } from '@reduxjs/toolkit'

export const fruitsSlice = createSlice({
    name: 'fruits',
        initialState: {
            selectedCategory: 'EXOTIC'
    },
    reducers: {
        filterCategory: (state, action) => {
        state.selectedCategory = action.payload
        },
    },
})

export const getSelectedCategory = state => state.fruits.selectedCategory;
export const { filterCategory } = fruitsSlice.actions;
export default fruitsSlice.reducer;
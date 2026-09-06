import type { StateCreator } from 'zustand'
import { getWines } from '../services/WineService'
import type { Wine } from '../utils/wines-schema'


export type RecipesSliceType = {
    categories: Wine[]
    fetchCategories: (color ?: string) => Promise<void>
}
export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: [],
    fetchCategories: async (color ?: string) => {
        const result = await getWines(color)
        set({ categories: result.data })
    }
})
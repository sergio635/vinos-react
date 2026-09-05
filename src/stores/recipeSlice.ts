import type { StateCreator } from 'zustand'
import { getWines } from '../services/WineService'
import type { Wine } from '../utils/wines-schema'


export type RecipesSliceType = {
    categories: Wine[]
    fetchCategories: () => Promise<void>
}
export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: [],
    fetchCategories: async () => {
        const result = await getWines()
        set({ categories: result.data })
    }
})
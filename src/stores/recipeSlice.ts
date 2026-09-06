import type { StateCreator } from 'zustand'
import { getWines, searchWines } from '../services/WineService'
import type { Wine, WineSearchResult } from '../utils/wines-schema'


export type RecipesSliceType = {
    categories: Wine[]
    searchResults: WineSearchResult[]
    fetchCategories: (color ?: string) => Promise<void>
    fetchSearch: (query: string) => Promise<void>
}
export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: [],
    searchResults: [],
    fetchCategories: async (color ?: string) => {
        const result = await getWines(color)
        set({ categories: result.data })
    },
    fetchSearch: async (query: string) => {
        const result = await searchWines(query);
        set({ searchResults: result.data })
    }
})
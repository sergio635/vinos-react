import type { StateCreator } from 'zustand'
import { getWines } from '../services/WineService'

type Category = {

}

export type RecipesSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>
}
export const createRecipeSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: [],
    fetchCategories: async () => {
        const result = await getWines()
        set({ categories: result.data })
    }
})
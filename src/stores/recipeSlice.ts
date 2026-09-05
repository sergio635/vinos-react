import type { StateCreator } from 'zustand'
import { getWines } from '../services/WineService'

type Category = {

}

export type RecipesSliceType = {
    categories: Category[]
    fetchCategories: () => Promise<void>
}
export const createRecipeSlice : StateCreator<RecipesSliceType> = () => ({
    categories: [],
    fetchCategories: async () => {
        getWines()
    }
})
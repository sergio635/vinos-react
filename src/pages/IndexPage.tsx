import {useAppStore} from '../stores/useAppStore'
import { useEffect } from 'react'
function IndexPage() {
  const categories = useAppStore((state) => state.categories)
  const fetchCategories = useAppStore((state) => state.fetchCategories)

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])
  return (
    <>
    <h1>Inicio</h1>
    </>
  )
}

export default IndexPage
import {useAppStore} from '../stores/useAppStore'
import { useEffect } from 'react'
function IndexPage() {
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
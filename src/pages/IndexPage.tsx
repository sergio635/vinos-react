import {useAppStore} from '../stores/useAppStore'
function IndexPage() {

  useAppStore((state) => state.categories)
  return (
    <>
    <h1>Inicio</h1>
    </>
  )
}

export default IndexPage
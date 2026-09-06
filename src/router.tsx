import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import FavoritesPage from "./pages/FavoritesPage";
import WineDetailPage from "./pages/WineDetailPage";
import Layout from "./layouts/Layout";

export default function AppRouter() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<IndexPage />} index/>
        <Route path="/favoritos" element={<FavoritesPage />} />
        <Route path="/vino/:id" element={<WineDetailPage />} />
      </Route> 
    </Routes>
    </BrowserRouter>
  )
}
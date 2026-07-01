import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {/* Muestra todos los productos */}
        <Route path="/" element={<ItemListContainer mensaje="Bienvenido a mi tienda" />} />
        
        {/* Muestra productos filtrados */}
        <Route path="/category/:categoryId" element={<ItemListContainer mensaje="Categoría Seleccionada" />} />
        
        {/* Ruta por detalle (La armaremos en pasos posteriores) */}
        <Route path="/item/:itemId" element={<div className="text-center p-10 font-bold">Detalle del Producto (Próximamente)</div>} />
        
        {/* Ruta 404 para dirección no válida */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
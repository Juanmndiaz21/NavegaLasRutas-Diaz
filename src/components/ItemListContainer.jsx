import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../asyncMock';
import ItemList from './ItemList';

const ItemListContainer = ({ mensaje }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    // se llama a la promesa por categoria
    const asyncFunction = categoryId ? getProductsByCategory : getProducts;

    asyncFunction(categoryId)
      .then(response => {
        setProducts(response);
      })
      .catch(error => {
        console.error("Error al cargar productos:", error);
      })
      .finally(() => {
        setLoading(false);
      });

  }, [categoryId]);

  if (loading) {
    return (
      <section className='textoTienda text-center p-10'>
        <h2>Cargando productos...</h2>
      </section>
    );
  }

  return (
    <section className='textoTienda p-4'>
      <h2 className="text-center font-bold text-2xl mb-6">{mensaje}</h2>
      { }
      <ItemList products={products} />
    </section>
  );
};

export default ItemListContainer;


import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../asyncMock';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const { itemId } = useParams();

    useEffect(() => {
        setLoading(true);

        // promesa específica para traer un solo producto por ID
        getProductById(itemId)
            .then(response => {
                setProduct(response);
            })
            .catch(error => {
                console.error("Error al cargar el detalle:", error);
            })
            .finally(() => {
                setLoading(false);
            });

    }, [itemId]); // Se vuelve a ejecutar si cambia el ID en la URL

    if (loading) {
        return <h2 className="text-center p-10 text-xl font-semibold">Cargando detalle del producto...</h2>;
    }

    return (
        <div className="container mx-auto p-4">
            {product ? <ItemDetail {...product} /> : <h2 className="text-center text-red-500 font-semibold">El producto no existe.</h2>}
        </div>
    );
};

export default ItemDetailContainer;
